# J-VOX AAC

**Augmentative & Alternative Communication — Version 3**

> *"Every person deserves a voice."*

J-VOX is a full-featured AAC (Augmentative and Alternative Communication) app built for non-verbal individuals and their families. It provides a fast, expressive, and deeply personal way to communicate — shaped around each user's life, words, and needs.

J-VOX was built by a father for his son. It is shared with the world because every person deserves to be heard.

---

## Features

### 📂 Category Boards
Phrase libraries organized across feelings, food, activities, social, and more. Every category and every button is fully editable in Edit Mode — change icons, text, colors, or order to fit your child's communication style.

### 🔤 Word Builder
Build sentences symbol by symbol using a core vocabulary grid and scene-based word sets. Compose longer thoughts, tap Speak, and the app reads them aloud with natural-sounding text-to-speech.

### ✨ Magic Wand — Adaptive Expression
The **Adaptive Expression** engine listens to the words you tap, then gently refines them into a clear, natural sentence before speaking — so the full complexity of your thought comes through, not just the fragments. Powered by Groq (free key, no credit card required).

### ✦ Aura Mode — Environmentally Aware Voice
The **Environmentally Aware Voice** watches your surroundings and surfaces the right phrases at the right moment, so communication keeps pace with the world around you:

- **Visual-Sense** — Point the camera at your surroundings. The Adaptive Expression engine identifies the scene and generates four context-specific communication buttons (Identity, Request, Social, Comment).
- **Ambient-Sense** — A rolling 10-second microphone buffer listens for nearby conversation and automatically populates relevant response options, so you're always ready to join in.
- **Geo-Sense** — Detects your location and prioritizes the most relevant communication board. Context (Home, School, Restaurant, Medical, etc.) is tappable and saves per-location so it remembers your preference next time.

### 🌿 Regulate
Sensory and emotional regulation tools:

- **Zen Mode** — Full-screen breathing guide with a generative soundscape (Rain, Ocean, Forest, or Solfeggio Tones — all synthesized in the browser, no audio files required). A floating particle scene and a phase-guided breathing ring help calm the nervous system.
- **Custom Audio Matrix** — Five personal audio slots. Record live from the microphone, upload a file, or play back any slot with a single tap. All buttons are locked behind Edit Mode to prevent accidental changes. Silence All clears everything instantly.

### 🧒 About Me
Fully personalized identity cards — name, age, location, family, emergency contacts, and custom phrases. Fill in the fields in Settings and the buttons update automatically. Manual edits made in Edit Mode are preserved.

### ⚙️ Settings
- **About Me editor** — Name, age, siblings (gender + name auto-constructs the phrase), emergency contact, address, and freeform extra info.
- **Voice & speech rate** — Choose from available system voices, including neural/online voices where available.
- **After Speaking** — Choose to clear the sentence bar after speaking or keep it for re-use.
- **Theme** — Dark Luxury or Bright Colorful.
- **Edit Mode** — PIN-locked editing for all categories, phrases, and symbols.
- **Backup & Restore** — Export all your data as a JSON file; restore from backup at any time.
- **Restore Factory Defaults** — Returns the app to its original state (prompts for a backup download first).
- **Groq API Key** — Powers Magic Wand (Adaptive Expression) and Aura Mode (Environmentally Aware Voice). Free tier available at [console.groq.com](https://console.groq.com) — no credit card required, takes about 60 seconds.
- **Our Story** — Read the origin of J-VOX and the family behind it.

---

## How to Use

1. **Tap a category** on the home grid to open its phrase board. Tap any phrase button to speak it immediately.
2. **Word Builder tab** — tap symbols and core words to compose a sentence, then tap **Speak**.
3. **Settings → About Me** — expand the section and fill in your child's personal details. Tap **Save Settings** and the About Me phrase buttons update instantly.
4. **Unlock Edit Mode** in Settings to add, remove, rename, or reorder any button in any category.
5. **Toggle ✦ Aura** at the top of the screen to activate the Environmentally Aware Voice. Switch back to Standard to return to the category grid.
6. **Back up your data regularly** using **💾 Backup My Data** in Settings — especially before using Restore Defaults.

---

## Technical Details

| | |
|---|---|
| **Type** | Progressive Web App (PWA) — installs to home screen |
| **Offline** | Fully functional offline after first load |
| **Audio** | Web Audio API — all Zen sounds generated in-browser, no files |
| **Adaptive Expression** | Groq API (Magic Wand, Visual-Sense, Ambient-Sense) |
| **Maps** | Nominatim / OpenStreetMap (Geo-Sense reverse geocoding — no API key needed) |
| **Storage** | localStorage — all data stays on-device |
| **Size** | Single HTML file + 4 supporting files |

---

## Files

```
index.html      — The full app (single file)
manifest.json   — PWA manifest for home screen install
sw.js           — Service worker for offline support
icon-192.png    — App icon (192×192)
icon-512.png    — App icon (512×512)
.nojekyll       — Prevents GitHub Pages from running Jekyll
```

---

## Privacy

J-VOX stores all user data locally on your device using browser localStorage. No personal information is sent to any server except:

- **Groq API** — phrase text is sent when using Magic Wand or Aura Mode features (only if you provide your own Groq API key).
- **Nominatim** — GPS coordinates are sent to OpenStreetMap's reverse geocoding service when Geo-Sense is active (no account or key required).

Camera and microphone access is requested only when actively using Visual-Sense or Ambient-Sense features and is never recorded or stored.

---

## Our Story

J-VOX didn't start in a tech lab — it started at a kitchen table. It was built by a **father** who watched his son with disabilities struggle to express the full complexity of his thoughts using standard, static communication boards.

The world moves too fast for 20 static buttons. J-VOX bridges the gap between simple requests and **true expression** — using an Adaptive Expression engine that grows with the user.

This is a **legacy project**. It was built for my son, but it is shared with the world because every person deserves to be heard.

*Built by a father, powered by adaptive technology, dedicated to the community.*

---

*J-VOX AAC — Built with love for families who communicate differently.*
