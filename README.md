# AI Marketing Intelligence Core — Public Landing Page

This repository contains the public-facing landing page for the
**AI Marketing Intelligence Core** project.

## What this repository is

A static, public GitHub Pages website that presents the AI Marketing Intelligence Core
service to potential early users and directs them to a diagnostic intake form.

## What it contains

| File / Folder | Purpose |
|---------------|---------|
| `index.html` | Main landing page (all sections, SEO, CTAs) |
| `assets/css/style.css` | Styling — dark premium SaaS design, no external frameworks |
| `assets/js/main.js` | Minimal vanilla JS — scroll effects, fade-in, no tracking |
| `assets/images/` | Image assets placeholder (currently empty) |
| `README.md` | This file |
| `.gitignore` | Excludes secrets, private files, and local state |

## What this repository must NEVER contain

- API keys, tokens, or credentials of any kind
- `.env` files or environment variable files
- Backend server code or scripts
- Private prompts or internal methodology
- Client data or case records
- AI model configurations
- Private repository content
- n8n workflows or automation logic
- Database schemas or connection strings

The private AI core, methodology, and case learning system are stored separately
in a private repository and are never added here.

## How the form works

The landing page CTAs link directly to an external Tally form:

**https://tally.so/r/D4Xa25**

No form processing happens in this repository. All submissions are handled by Tally.

## Deployment via GitHub Pages

1. Go to repository **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `(root)`
4. Click **Save**
5. The site will be available at:
   `https://ruslanovcharenko24-debug.github.io/ai-marketing-landing-public/`

## Security note

The private AI core, internal methodology, prompts, case learning system,
and client data are stored in a **separate private repository**.
This public repository contains only the static frontend landing page.
No sensitive business logic is exposed here.

## Status

Early-stage product. Free initial diagnosis. Static MVP. No backend.
