# ResearchMentor website

Static one-page site for ResearchMentor, Dr. Sobia Ali Khan's paid remote research
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
cd C:\Users\USER-K\research-consultancy-s
python -m http.server 8080
```

Then open <http://localhost:8080>. Press `Ctrl+C` in the terminal to stop.

## Publish on GitHub Pages

The repository is already created and the first commit is already made. What is left is
publishing it, which is all done with buttons in GitHub Desktop.

### Step 1 — Publish the repository

1. Open **GitHub Desktop** → **File → Add local repository**
2. Choose `C:\Users\USER-K\research-consultancy-s` and click **Add repository**
3. Click **Publish repository** (top bar)
4. Leave the name as **`research-consultancy-s`** — this name becomes part of your web
   address, so changing it changes the link
5. **Untick "Keep this code private."** GitHub Pages will not serve a private repository
   on the free plan
6. Click **Publish repository**

### Step 2 — Turn on Pages

1. On github.com, open the `research-consultancy-s` repository
2. **Settings → Pages**
3. Under *Build and deployment*: **Source** = `Deploy from a branch`,
   **Branch** = `main`, folder = `/ (root)`
4. Click **Save**

Wait two or three minutes, then reload the Settings → Pages screen. Your address appears
at the top:

```
https://YOUR-USERNAME.github.io/research-consultancy-s/
```

That link is public — anyone can open it, no account needed. HTTPS is automatic.

### Updating the site later

Edit the files here, then in GitHub Desktop: write a short summary, **Commit to main**,
then **Push origin**. The live page updates within a minute or two.

### Adding your own domain later

If you buy a domain (about $10–15/year — Cloudflare, Namecheap and Porkbun are all fine):

1. **Settings → Pages → Custom domain**, enter the domain, **Save**
2. At your registrar, add these DNS records:

   | Type  | Name | Value |
   |-------|------|-------|
   | A     | @    | `185.199.108.153` |
   | A     | @    | `185.199.109.153` |
   | A     | @    | `185.199.110.153` |
   | A     | @    | `185.199.111.153` |
   | CNAME | www  | `YOUR-USERNAME.github.io` |

3. Back in Settings → Pages, tick **Enforce HTTPS** once it becomes available.

## Where to edit the common things

| What you want to change | Where |
|---|---|
| Any price | `index.html`, in the `<!-- PRICING -->` section |
| Your title or affiliation | `index.html`, hero section and About section |
| Business name | `index.html` search for `ResearchMentor` (appears 4 times) |
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
