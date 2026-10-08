# Research Consultancy-S — website

Static one-page site for Research Consultancy-S, Dr. Sobia Ali Khan's paid remote research
collaboration and consulting practice. Plain HTML, CSS and JavaScript — no build step,
no dependencies.

```
index.html     all page content and text
styles.css     all styling, including dark mode
script.js      mobile menu and FAQ behaviour
```

## Preview it locally

Double-click `index.html`. That's it.

To preview the way a real server will serve it:

```powershell
cd C:\Users\USER-K\sobia-research-consulting
python -m http.server 8080
```

Then open <http://localhost:8080>. Press `Ctrl+C` in the terminal to stop.

## Publish on your own domain

Everything below is done in a browser. No Git, no command line.

### Step 1 — Buy the domain

Use **Cloudflare Registrar** (<https://dash.cloudflare.com>). It sells domains at cost with
no markup and no renewal price jump, and because it also hosts the site, there are no DNS
records to copy by hand. Namecheap and Porkbun work too, but add a manual DNS step.

Expect about **$10–15 per year** for a `.com`.

Check the name is free in the registrar's search box — that is the only definitive check.

### Step 2 — Put the site online

In the same Cloudflare dashboard:

1. **Compute (Workers & Pages) → Create → Pages → Upload assets**
2. Project name: `research-consultancy-s`
3. Drag **this whole folder** onto the upload box, then **Deploy site**

The site is live within a minute at `research-consultancy-s.pages.dev`. That link already
works and can be shared while the domain is being set up.

### Step 3 — Attach the domain

1. Open the Pages project → **Custom domains** → **Set up a custom domain**
2. Type the domain you bought and confirm

Because the domain is registered with Cloudflare, DNS is filled in automatically and HTTPS
is issued for you. Allow a few minutes, occasionally up to a day.

### Updating the site later

Edit the files here, then go back to the Pages project → **Create new deployment** and drag
the folder in again. The live site updates in under a minute.

### If you registered the domain somewhere else

Add these records at your registrar, replacing `research-consultancy-s` with your project name:

| Type  | Name | Value |
|-------|------|-------|
| CNAME | @    | `research-consultancy-s.pages.dev` |
| CNAME | www  | `research-consultancy-s.pages.dev` |

## Where to edit the common things

| What you want to change | Where |
|---|---|
| Any price | `index.html`, in the `<!-- PRICING -->` section |
| Your title or affiliation | `index.html`, hero section and About section |
| Business name | `index.html` — search for `Research Consultancy-S` (appears 4 times) |
| Email address | `index.html` — search for `sobiaali2338@gmail.com` (appears 4 times) |
| Publication list | `index.html`, the `<ol class="pub-list">` block |
| Accent colour | `styles.css`, the `--accent` variable near the top |
| Page title shown in Google | `index.html`, the `<title>` and `<meta name="description">` tags |

## Still to do

- [ ] Add a professional photo. Drop it in this folder as `portrait.jpg` and tell
      Claude to place it in the hero — it noticeably increases enquiries.
- [ ] Confirm the publication count. The site says **25 peer-reviewed, 4 under review**,
      counted from `Sobia CV 2026.pdf`. Your draft post said 30.
- [ ] Decide whether to keep naming Gachon University, and check your contract
      permits outside paid consulting.
- [ ] Add a Google Scholar or ORCID link so visitors can verify the publication record.
- [ ] Optionally add a booking calendar (Cal.com has a free tier) instead of email only.
