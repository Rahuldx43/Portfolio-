# How to edit your portfolio

Your new portfolio is in the **`website`** folder. Everything inside that folder is the website, and it is what you upload to Netlify.

```
website/
  index.html                 the page layout and design (you normally never touch this)
  content.js                 ALL the text, projects and links (edit this one)
  images/                    every picture on the site
  Rahul_Pranasseri_CV.pdf    the CV visitors download
  showreel.mp4               the showreel played by the "Watch showreel" button
  og-image.jpg               the picture shown when your link is shared on LinkedIn or WhatsApp
  favicon.svg, apple-touch-icon.png   the small RP icon in browser tabs and on phones
  image-sizes.js             list of image widths so phones get smaller copies (made automatically)
```

In `images/`, files ending in `-w480.webp` and `-w960.webp` are smaller copies of your screenshots that phones download instead of the full size. You can ignore them. A new image you add works without them; it just always loads at full size.

## Change any text

1. Open `website/content.js` in a text editor. Notepad works; VS Code is nicer.
2. Find the text you want to change and edit what is between the quotes `"..."`.
   Keep the quotes and the comma at the end of the line.
3. Save, then double-click `website/index.html` to see the change in your browser.
   If it was already open, refresh the page.

If the page goes blank after an edit, you probably deleted a quote mark or a comma. Undo the last change (Ctrl + Z), save and refresh.

## Change your three strongest projects

In `content.js`, find `featured:` and change the three names in the list. Each name is the `slug` of a project further down the file, for example:

```js
featured: ["the-broken-camp", "knight-fight", "gauntlet-mania"],
```

These three appear as the rooms on the level map at the top and as the big projects under "Featured work". Every other project appears under "More projects".

## Add a new project

1. Put its screenshots in `website/images` (`.webp`, `.jpg` and `.png` all work).
2. In `content.js`, scroll down to `projects:`. Copy one whole project, from its `{` to its `},`,
   and paste it as a new entry in the list.
3. Change the fields. Give it a new, unique `slug`, made of lowercase words joined by dashes.
4. Put the screenshot file names in `cover` and `gallery`, for example `"images/my-new-shot.webp"`.
5. To show the greybox-to-final strip, fill in `process`. Otherwise leave it as `[]`.

## The top of the page

- `availability:` is the small green "open to work" line. Set it to `""` to hide it.
- `reel:` is the list of slides in the picture reel next to your name. Each slide has an image, a label and the project it opens.
- `reelVideo:` is the gameplay link under the reel.
- `showreel:` is the video behind the "Watch showreel" button (see below).

## Design notes on featured projects

Each featured project can have a `designNote` with a `problem`, the `change` you made and the `result`. Keep each one to one sentence and only write what really happened. If a project has no `designNote`, its first three "What I did" points are shown instead.

## Level breakdown (The Broken Camp)

The Broken Camp case study has an interactive level breakdown built on your paper map. It lives in `content.js` under `breakdown` inside that project:

- `phases` are the three mission phases. Each `beat` has a `mark` (the number or ★ on the map), a `title`, a short `text`, and `x` / `y`, which place the highlight ring as a percentage across and down the map.
- `notes` are the notes from the map.

To add a breakdown to another project, copy the whole `breakdown` block into that project and change the image, beats and positions.

## Replace the showreel

The current showreel (53 seconds) is made from your screenshots. When you cut a showreel from real gameplay footage:

1. Export it as an `.mp4` (H.264), ideally 1280×720 and under about 15 MB so it loads quickly.
2. Put it in the `website` folder and name it `showreel.mp4`, replacing the old one. Or give it a new name and change `file:` in `showreel:` in `content.js`.
3. Optionally replace `images/showreel-poster.jpg` with a frame from the new video.

A full HD copy of the current showreel is in the `showreel` folder of this repository, ready to upload to LinkedIn or attach to applications.

## Replace your CV

Put the new PDF in the `website` folder. If its name is different, change `cvFile:` near the top of `content.js` to match.

## Put the changes online (Netlify)

1. Open https://app.netlify.com and go to your site **rahulpranasseri**.
2. Open **Deploys**.
3. Drag the whole **`website`** folder onto the box that says "Drag and drop your site output folder here".

The site updates within a few seconds.

## Contact form (Web3Forms)

The contact form sends every message to the email address you signed up to Web3Forms with. Nothing needs setting up in Netlify.

- The form key is `formKey:` in the `contact` part of `content.js`. If you create a new key on web3forms.com, paste it there.
- The email subject reads "Portfolio: " followed by the subject the visitor typed.
- Web3Forms' free plan has a monthly message limit; your Web3Forms dashboard shows it and your past messages.
- Send yourself one test message after the site goes live to check it arrives (look in spam the first time).

## Analytics (Cloudflare)

Cloudflare Web Analytics is already built into the page. To stop counting your own visits, open this link once on each browser and device you use:

https://rahulpranasseri.netlify.app/?notrack

To count that browser again, open the same address with `?track` at the end instead of `?notrack`.

## Dark and light mode

The site opens in dark mode. Visitors can switch with the moon/sun button in the top-right corner, and their choice is remembered.

## Other folders in this repository

- `showreel` holds the full HD showreel for LinkedIn and job applications. It is not part of the website.

- `Updated + Hospital Escape + Analytics (2026-10-31)` and the `index.html` in the main folder are the **old** site, which is what is live now. Keep them as a backup until the new site is live.
- `Recovered Old Chats` holds notes from earlier work sessions and is not part of the website.
