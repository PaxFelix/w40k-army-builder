# W40K Army Builder

Interactive Warhammer 40,000 army list builder. Browse datasheets, build army lists with points tracking, validate composition, and save/load lists.

## Features

- **Edition Switching** — Toggle between 10th and 11th Edition data
- **Faction Browser** — View all available factions and their unit datasheets
- **Full Datasheets** — All stats, weapons, abilities, and keywords displayed verbatim
- **Army Builder** — Add/remove units, select model counts, track points against a limit
- **Validation** — Points limit enforcement, battleline checks
- **Save/Load** — Persist army lists in browser localStorage
- **Responsive** — Works on phone, iPad, and desktop

## Hosting on GitHub Pages

1. Create a GitHub repository (e.g., `w40k-army-builder`)
2. Push this folder to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/w40k-army-builder.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo
4. Set source to **Deploy from a branch → main → / (root)**
5. Your site will be live at `https://YOUR_USERNAME.github.io/w40k-army-builder/`

## Adding Unit Data

Edit `data/factions.js`. Each unit follows this schema:

```js
{
    id: "unit-slug",
    name: "Full Unit Name",
    role: "battleline|character|infantry|mounted|vehicle|monster|fortification",
    points: [{ models: 5, cost: 90 }, { models: 10, cost: 180 }],
    stats: { m: "6\"", t: 4, sv: "3+", w: 2, ld: "6+", oc: 2 },
    weapons: {
        ranged: [{ name: "...", range: "24\"", a: 2, bs: "3+", s: 4, ap: -1, d: 1, keywords: [] }],
        melee: [{ name: "...", range: "Melee", a: 3, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] }]
    },
    abilities: {
        core: ["Ability Name"],
        faction: ["Faction Ability"],
        other: ["Full verbatim ability text — never abbreviate"]
    },
    keywords: ["Infantry", "Battleline", ...],
    factionKeywords: ["Adeptus Astartes"],
    composition: { min: 5, max: 10 }
}
```

**Important:** All ability text, weapon names, keywords, and rules descriptions must be entered exactly as written on the official datasheets. No abbreviations or summaries.

## Tech Stack

- Pure HTML / CSS / JavaScript (no build tools required)
- localStorage for persistence
- Mobile-first responsive design

## Disclaimer

This is an unofficial, fan-made tool and is **not affiliated with, endorsed, or sponsored by
Games Workshop**. Warhammer 40,000 and all associated names, races, characters, vehicles,
locations, units, illustrations and imagery are either ®, ™ and/or © Games Workshop Limited.
Used without permission. No challenge to their status is intended. All rights reserved to their
respective owners. Provided for personal, non-commercial use only.

