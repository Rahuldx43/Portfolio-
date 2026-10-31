# How to edit your portfolio

Your new portfolio is in the **`website`** folder. Everything inside that folder is the website, and it is what you upload to Netlify.

```
website/
  index.html                 the page layout and design (you normally never touch this)
  content.js                 ALL the text, projects and links (edit this one)
  images/                    every picture on the site
  Rahul_Pranasseri_CV.pdf    the CV visitors download
  forms.html                 lets Netlify detect the contact form (leave it alone)
```

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

## Replace your CV

Put the new PDF in the `website` folder. If its name is different, change `cvFile:` near the top of `content.js` to match.

## Put the changes online (Netlify)

1. Open https://app.netlify.com and go to your site **rahulpranasseri**.
2. Open **Deploys**.
3. Drag the whole **`website`** folder onto the box that says "Drag and drop your site output folder here".

The site updates within a few seconds.

## Make the contact form deliver messages (one-time setup)

The form uses Netlify Forms, which is free for up to 100 messages a month. Netlify needs two settings switched on once:

1. In Netlify, open your site, then **Forms** in the left menu (on some layouts it is under **Project configuration → Forms**).
   If you see **Enable form detection**, click it.
2. Upload the `website` folder again (the step above), so Netlify finds the form.
3. Back in **Forms**, open **Form notifications → Add notification → Email notification**.
   Choose the form **contact** and enter your email address.

Every message now arrives in your inbox, and you can also read them all under **Forms** in Netlify. The form cannot send from your own computer (double-clicking `index.html`); it only works on the live Netlify site.

## Analytics (Cloudflare)

Cloudflare Web Analytics is already built into the page. To stop counting your own visits, open this link once on each browser and device you use:

https://rahulpranasseri.netlify.app/?notrack

To count that browser again, open the same address with `?track` at the end instead of `?notrack`.

## Dark and light mode

The site opens in dark mode. Visitors can switch with the moon/sun button in the top-right corner, and their choice is remembered.

## Other folders in this repository

- `Updated + Hospital Escape + Analytics (2026-10-31)` and the `index.html` in the main folder are the **old** site, which is what is live now. Keep them as a backup until the new site is live.
- `Recovered Old Chats` holds notes from earlier work sessions and is not part of the website.
