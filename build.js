// node build.js -> writes all pages with the same head (favicon = the app icon), nav and footer
const fs=require('fs');
const NAV=[['index.html','Home'],['videos.html','Videos'],['about.html','About'],['uploader.html','Uploader app'],['contact.html','Contact']];
const page=(file,title,body)=>`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="PrinceofAsia - gaming creator (SMITE 2, Project Zomboid, DayZ). Videos, streams and the PrinceofAsia Uploader app.">
<link rel="icon" href="favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="stylesheet" href="style.css">
</head>
<body>
<header><div class="bar">
 <a class="brand" href="index.html"><img src="icon.jpg" alt="PrinceofAsia logo">PrinceofAsia</a>
 <nav>${NAV.map(([f,t])=>`<a href="${f}"${f===file?' class="on"':''}>${t}</a>`).join('')}</nav>
</div></header>
<main>
${body}
</main>
<footer><div class="bar">
 <span>&copy; 2026 PrinceofAsia</span>
 <a href="terms.html">Terms of Service</a><a href="privacy.html">Privacy Policy</a><a href="contact.html">Contact</a>
</div></footer>
</body>
</html>
`;
const YT='https://www.youtube.com/channel/UCjkWuH7FgPsWin82f7kWfYQ', X='https://x.com/PrinceOfAsia14', TW='https://www.twitch.tv/xprinceofasiaxxx';
const VIDS=[['ArgU5laLils','SMITE 2 - Nike gameplay'],['zedVODnofjI','SMITE 2 - Izanami aspect explained'],['d9FudOj66UQ','Project Zomboid - did you know? (bags)'],
 ['gpBQYDCHdz0','Project Zomboid - how hard is Extinction?'],['IkZQZLqt230','DayZ - "told me to leave"']];
const vcard=([id,t])=>`<a class="vid" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${t}" loading="lazy"><span>${t}</span></a>`;
const P={};
P['index.html']=['PrinceofAsia - gaming videos and streams',`
<section class="hero">
 <img src="icon.jpg" alt="PrinceofAsia">
 <div><h1>PrinceofAsia</h1>
 <p>Gaming creator making SMITE 2 gameplay, Project Zomboid survival series and DayZ stories - long videos on YouTube, short clips on YouTube Shorts and TikTok, and live streams on Twitch.</p>
 <a class="btn" href="${YT}" target="_blank" rel="noopener">YouTube channel</a><a class="btn alt" href="${TW}" target="_blank" rel="noopener">Twitch</a><a class="btn alt" href="${X}" target="_blank" rel="noopener">X</a></div>
</section>
<h2>What I make</h2>
<div class="grid">
 <div class="card"><h3>SMITE 2</h3><p>Full matches, god guides, aspect explainers and montages.</p></div>
 <div class="card"><h3>Project Zomboid</h3><p>Survival series: Veteran runs, raiding every gun store, tips and "did you know" clips.</p></div>
 <div class="card"><h3>DayZ</h3><p>Story clips from encounters with other survivors.</p></div>
 <div class="card"><h3>Shorts &amp; TikTok</h3><p>Short vertical cuts of the best moments from each video.</p></div>
</div>
<h2>Latest videos</h2>
<div class="grid">${VIDS.slice(0,3).map(vcard).join('\n')}</div>
<p><a href="videos.html">See more videos &rarr;</a></p>
<h2>PrinceofAsia Uploader</h2>
<p>A small desktop app I use to send my own finished vertical videos from my PC to my own TikTok account as drafts, using TikTok's official Login Kit and Content Posting API.
I review every draft in the TikTok app before anything is posted. <a href="uploader.html">How the uploader works &rarr;</a></p>
`];
P['videos.html']=['Videos - PrinceofAsia',`
<h1>Videos</h1>
<p>A selection of recent uploads. Everything is on the <a href="${YT}" target="_blank" rel="noopener">PrinceofAsia YouTube channel</a>.</p>
<div class="grid">${VIDS.map(vcard).join('\n')}</div>
<h2>Series</h2>
<div class="grid">
 <div class="card"><h3>Every Gun Store (Project Zomboid)</h3><p>A Veteran run on Apocalypse with one goal: raid the gun stores of Knox Country and build the biggest arsenal possible.</p></div>
 <div class="card"><h3>SMITE 2 gameplay</h3><p>Full games with commentary, stats screens and builds.</p></div>
</div>
`];
P['about.html']=['About - PrinceofAsia',`
<h1>About</h1>
<div class="hero"><img src="icon.jpg" alt="PrinceofAsia"><div>
<p>PrinceofAsia is an independent gaming creator. The channel covers SMITE 2, Project Zomboid and DayZ, with long-form gameplay videos, short clips and live streams.</p></div></div>
<h2>Where to find me</h2>
<ul>
 <li>YouTube: <a href="${YT}" target="_blank" rel="noopener">PrinceofAsia</a></li>
 <li>Twitch: <a href="${TW}" target="_blank" rel="noopener">xprinceofasiaxxx</a></li>
 <li>X: <a href="${X}" target="_blank" rel="noopener">@PrinceOfAsia14</a></li>
</ul>
<h2>How the videos are made</h2>
<p>Gameplay is recorded on PC, edited into long videos and Shorts, and published on YouTube. Vertical cuts are also shared on TikTok.</p>
`];
P['uploader.html']=['PrinceofAsia Uploader - TikTok draft uploader',`
<h1>PrinceofAsia Uploader</h1>
<p>PrinceofAsia Uploader is a personal desktop app (Windows) used by the creator PrinceofAsia to send the creator's own edited gaming videos from the creator's PC
to the creator's own TikTok account as drafts. It is not offered to other users.</p>
<h2>Features</h2>
<div class="grid">
 <div class="card"><h3>Log in with TikTok</h3><p>One-time sign-in with TikTok Login Kit (OAuth with PKCE). The app asks only for the permissions it needs.</p></div>
 <div class="card"><h3>Upload as draft</h3><p>Sends a finished vertical MP4 to the owner's TikTok inbox using the Content Posting API (Upload to TikTok).</p></div>
 <div class="card"><h3>Owner stays in control</h3><p>Nothing is posted automatically. The owner opens TikTok, adds the caption and decides whether to post.</p></div>
</div>
<h2>How it works</h2>
<ol>
 <li>The account owner signs in with TikTok once and authorizes the app.</li>
 <li>The owner picks a finished video on the PC; the app uploads it to the owner's TikTok inbox as a draft.</li>
 <li>The owner reviews the draft in the TikTok app and posts it, or deletes it.</li>
</ol>
<h2>Permissions used</h2>
<ul>
 <li><b>user.info.basic</b> - to show which TikTok account is connected.</li>
 <li><b>video.upload</b> - to upload the owner's videos as drafts.</li>
</ul>
<h2>Data</h2>
<p>Login tokens are kept only in a local file on the owner's computer and are used only with TikTok's official API. See the <a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms of Service</a>.</p>
`];
P['contact.html']=['Contact - PrinceofAsia',`
<h1>Contact</h1>
<p>For questions about the channel or the PrinceofAsia Uploader app, send a message on any of these:</p>
<div class="grid">
 <div class="card"><h3>X</h3><p><a href="${X}" target="_blank" rel="noopener">@PrinceOfAsia14</a> (direct message)</p></div>
 <div class="card"><h3>YouTube</h3><p><a href="${YT}" target="_blank" rel="noopener">PrinceofAsia channel</a></p></div>
 <div class="card"><h3>Twitch</h3><p><a href="${TW}" target="_blank" rel="noopener">xprinceofasiaxxx</a></p></div>
</div>
`];
// privacy + terms: keep the existing text, wrap it in the shared layout
for(const f of ['privacy.html','terms.html']){ const src=fs.readFileSync(f,'utf8'); const m=src.match(/<main>([\s\S]*?)<\/main>/); let body=m[1].replace(/<p><a href="index.html">Back to home<\/a><\/p>/,'');
  const t=src.match(/<title>(.*?)<\/title>/)[1]; P[f]=[t,body]; }
for(const [f,[t,b]] of Object.entries(P)){ fs.writeFileSync(f,page(f,t,b)); console.log('wrote',f); }
