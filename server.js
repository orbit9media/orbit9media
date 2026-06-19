const express = require('express');
const cors    = require('cors');
const path    = require('path');
const fs      = require('fs');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Paths ───────────────────────────────────────────────
const ROOT   = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const DB     = path.join(ROOT, 'data', 'db.json');

// ── Startup diagnostics ─────────────────────────────────
console.log('=== Orbit9Media Starting ===');
console.log('Root dir   :', ROOT);
console.log('Public dir :', PUBLIC);
console.log('DB path    :', DB);
console.log('public exists?', fs.existsSync(PUBLIC));
console.log('index.html?  ', fs.existsSync(path.join(PUBLIC, 'index.html')));
console.log('admin.html?  ', fs.existsSync(path.join(PUBLIC, 'admin.html')));
console.log('db.json?     ', fs.existsSync(DB));
if (fs.existsSync(ROOT)) {
  console.log('Root contents:', fs.readdirSync(ROOT));
}

app.use(cors());
app.use(express.json());
app.use(express.static(PUBLIC));

// ── DB helpers ──────────────────────────────────────────
function readDB() {
  if (!fs.existsSync(DB)) {
    // Create empty DB if missing
    const empty = { articles: [], nextId: 1, adminPassword: 'orbit9admin2026' };
    fs.mkdirSync(path.dirname(DB), { recursive: true });
    fs.writeFileSync(DB, JSON.stringify(empty, null, 2));
    return empty;
  }
  return JSON.parse(fs.readFileSync(DB, 'utf8'));
}
function writeDB(data) {
  fs.mkdirSync(path.dirname(DB), { recursive: true });
  fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

// ── Auth middleware ─────────────────────────────────────
function auth(req, res, next) {
  const token = req.headers['x-admin-token'];
  const db    = readDB();
  if (token !== db.adminPassword) return res.status(401).json({ error: 'Unauthorized' });
  next();
}

// ── Localize helper ─────────────────────────────────────
function localizeArticle(a, lang) {
  return {
    id:        a.id,
    type:      a.type,
    district:  a.district,
    thumb:     a.thumb,
    published: a.published,
    date:      a.date,
    category:  a[`category_${lang}`] || a.category_en || '',
    title:     a[`title_${lang}`]    || a.title_en    || '',
    excerpt:   a[`excerpt_${lang}`]  || a.excerpt_en  || '',
    source:    a[`source_${lang}`]   || a.source_en   || '',
    meta:      a[`meta_${lang}`]     || a.meta_en     || '',
  };
}

// ══ PUBLIC API ══════════════════════════════════════════

app.get('/api/news', (req, res) => {
  const lang = req.query.lang === 'ml' ? 'ml' : 'en';
  const db   = readDB();
  const pub  = db.articles.filter(a => a.published);
  res.json({ lang, articles: pub.map(a => localizeArticle(a, lang)) });
});

app.get('/api/articles/:id', (req, res) => {
  const lang = req.query.lang === 'ml' ? 'ml' : 'en';
  const db   = readDB();
  const a    = db.articles.find(a => a.id === parseInt(req.params.id));
  if (!a) return res.status(404).json({ error: 'Not found' });
  res.json(localizeArticle(a, lang));
});

// ══ ADMIN API ═══════════════════════════════════════════

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  const db = readDB();
  if (password === db.adminPassword) {
    res.json({ success: true, token: db.adminPassword });
  } else {
    res.status(401).json({ error: 'Wrong password' });
  }
});

app.get('/api/admin/articles', auth, (req, res) => {
  const db = readDB();
  res.json({ articles: db.articles });
});

app.post('/api/admin/articles', auth, (req, res) => {
  const db   = readDB();
  const body = req.body;
  const article = {
    id:           db.nextId++,
    type:         body.type         || 'latest',
    district:     body.district     || 'Kerala',
    thumb:        body.thumb        || 'ct1',
    published:    body.published !== undefined ? body.published : true,
    date:         body.date         || new Date().toISOString().split('T')[0],
    category_en:  body.category_en  || '',
    category_ml:  body.category_ml  || '',
    title_en:     body.title_en     || '',
    title_ml:     body.title_ml     || '',
    excerpt_en:   body.excerpt_en   || '',
    excerpt_ml:   body.excerpt_ml   || '',
    source_en:    body.source_en    || 'Orbit9Media',
    source_ml:    body.source_ml    || 'ഓർബിറ്റ്9 മീഡിയ',
    meta_en:      body.meta_en      || '',
    meta_ml:      body.meta_ml      || '',
  };
  db.articles.unshift(article);
  writeDB(db);
  res.json({ success: true, article });
});

app.put('/api/admin/articles/:id', auth, (req, res) => {
  const db  = readDB();
  const idx = db.articles.findIndex(a => a.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  db.articles[idx] = { ...db.articles[idx], ...req.body, id: db.articles[idx].id };
  writeDB(db);
  res.json({ success: true, article: db.articles[idx] });
});

app.delete('/api/admin/articles/:id', auth, (req, res) => {
  const db  = readDB();
  const idx = db.articles.findIndex(a => a.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  db.articles.splice(idx, 1);
  writeDB(db);
  res.json({ success: true });
});

app.patch('/api/admin/articles/:id/toggle', auth, (req, res) => {
  const db = readDB();
  const a  = db.articles.find(a => a.id === parseInt(req.params.id));
  if (!a) return res.status(404).json({ error: 'Not found' });
  a.published = !a.published;
  writeDB(db);
  res.json({ success: true, published: a.published });
});

// ── Frontend routes ─────────────────────────────────────
app.get('/admin', (req, res) => {
  const f = path.join(PUBLIC, 'admin.html');
  if (fs.existsSync(f)) return res.sendFile(f);
  res.status(404).send('admin.html not found. Check public/ folder on GitHub.');
});

app.get('*', (req, res) => {
  const f = path.join(PUBLIC, 'index.html');
  if (fs.existsSync(f)) return res.sendFile(f);
  res.status(404).send(`
    <h2>index.html not found</h2>
    <p>Expected at: ${f}</p>
    <p>Root contents: ${JSON.stringify(fs.existsSync(ROOT) ? fs.readdirSync(ROOT) : 'root missing')}</p>
    <p>Public contents: ${JSON.stringify(fs.existsSync(PUBLIC) ? fs.readdirSync(PUBLIC) : 'public folder missing')}</p>
    <p><b>Fix:</b> Make sure public/index.html and public/admin.html are uploaded to GitHub.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`\n✅ Orbit9Media live at http://localhost:${PORT}`);
  console.log(`   Admin: http://localhost:${PORT}/admin\n`);
});
