// Fill the new portfolio template with the content extracted from the current site.
const fs = require('fs'), path = require('path');
const [projectsJson, contentJson, outDir] = process.argv.slice(2);
const raw = JSON.parse(fs.readFileSync(projectsJson, 'utf8'));
const other = JSON.parse(fs.readFileSync(contentJson, 'utf8'))._other;

// Per-project facts the old data stored inconsistently (category typos, all-caps titles).
const meta = {
  'the broken camp':      { title: 'The Broken Camp',      kind: 'Level design',  filters: ['Level design', 'Gameplay'],    context: 'University final year project, solo',   short: 'Military third-person shooter' },
  'knight fight':         { title: 'Knight Fight',         kind: 'Level design',  filters: ['Level design', 'Gameplay'],    context: 'University team project',               short: 'Multiplayer physics brawler' },
  'nightclub fight arena':{ title: 'Nightclub Fight Arena',kind: 'Level design',  filters: ['Level design', 'Environment', 'Freelance'], context: 'Freelance, studio client', short: 'Combat arena for a client' },
  'boss arena':           { title: 'Boss Arena',           kind: 'Level design',  filters: ['Level design', 'Environment'], context: 'O-Sens Studio',                         short: 'Boss encounter space' },
  'echoes beyond the hill':{title: 'Echoes Beyond The Hill',kind: 'Gameplay',     filters: ['Gameplay', 'Level design'],    context: 'University project',                    short: '2D platformer' },
  'gauntlet mania':       { title: 'Gauntlet Mania',       kind: 'Gameplay',      filters: ['Gameplay'],                    context: 'University project',                    short: 'Arena combat prototype' },
  'the boys: ascent':     { title: 'The Boys: Ascent',     kind: 'Gameplay',      filters: ['Gameplay', 'Freelance'],       context: 'Freelance, released fan game',          short: 'Open-world action' },
  'european town cinematic environment': { title: 'European Town', kind: 'Environment', filters: ['Environment', 'Freelance'], context: 'Freelance, cinematic client project', short: 'Cinematic environment' },
  'hidden cave':          { title: 'Hidden Cave',          kind: 'Environment',   filters: ['Environment'],                 context: 'O-Sens Studio',                         short: 'Cinematic environment' },
  'forgotten temple':     { title: 'Forgotten Temple',     kind: 'Environment',   filters: ['Environment'],                 context: 'KitBash3D Secrets of the Luminara challenge', short: 'Cinematic environment' },
};
const order = ['the broken camp', 'knight fight', 'nightclub fight arena', 'the boys: ascent', 'echoes beyond the hill', 'gauntlet mania',
  'boss arena', 'european town cinematic environment', 'hidden cave', 'forgotten temple'];

const exists = rel => fs.existsSync(path.join(outDir, rel));
const projects = order.map(key => {
  const p = raw.find(x => x.title.trim().toLowerCase() === key);
  if (!p) throw new Error('missing project ' + key);
  const m = meta[key];
  const gallery = p.gallery.filter(exists);
  return {
    slug: m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: m.title, kind: m.kind, filters: m.filters, context: m.context, short: m.short,
    desc: String(p.desc || '').replace(/^"|"$/g, ''),
    role: (p.role || '').replace(/Programer/g, 'Programmer'),
    timeline: p.timeline, genre: p.genre,
    overview: p.overview, resp: p.resp, challenges: p.challenges, lessons: p.lessons,
    thumb: exists(p.thumb) ? p.thumb : gallery[0],
    gallery, gthumbs: gallery.map(g => { const t = g.replace(/\.webp$/, '-gthumb.webp'); return exists(t) ? t : g; }),
    tags: p.tags, video: p.video, gameLink: p.gameLink, links: p.links,
  };
});

const skills = [
  { name: 'Design', items: other.skillsData.design },
  { name: 'Unreal Engine', items: other.skillsData.engine },
  { name: 'Technical', items: other.skillsData.technical },
  { name: 'Tools', items: other.listsData.software },
  { name: 'Languages', items: other.listsData.languages },
];
const timeline = other.timelineData.map(t => ({ ...t, date: t.date.replace(/AUG/, 'Aug').replace(/—/g, '–') }));

const json = v => JSON.stringify(v).replace(/</g, '\\u003c');
let html = fs.readFileSync(path.join(outDir, 'template.html'), 'utf8')
  .replace('/*__PROJECTS__*/', json(projects))
  .replace('/*__TIMELINE__*/', json(timeline))
  .replace('/*__SKILLS__*/', json(skills));
fs.writeFileSync(path.join(outDir, 'index.html'), html);
console.log('built index.html', html.length, 'bytes;', projects.map(p => `${p.title}(${p.gallery.length})`).join(', '));
