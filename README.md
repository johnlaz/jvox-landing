# jVox AAC

**Augmentative & Alternative Communication**

> *"Every person deserves a voice."*

jVox is a full-featured, AI-powered AAC app built for non-verbal and minimally verbal individuals — and the families, educators, and speech pathologists who support them. It runs on any device you already own, works completely offline, and is free at its core. No paywalls on the fundamentals. No insurance forms. No $250 upfront fee.

jVox was built by a father for his son. It is shared with the world because every person deserves to be heard.

---

## Why jVox

Traditional AAC systems sit behind immense financial barriers. Dedicated speech hardware can cost thousands of dollars and months of insurance bureaucracy. Standalone apps routinely charge $250 upfront or lock families into recurring subscriptions. For families already navigating the daily challenges of a disability, that is unacceptable.

jVox runs on the device in your pocket. The core is free, offline-first, and will stay that way.

---

## Features

### 📂 Category Boards — Core, Free
Phrase libraries organized across 12 categories — feelings, needs, food, social, activities, and more — with 150+ phrases out of the box. Every category, every button, every emoji is fully editable in Edit Mode. Reorder, rename, recolor, or rebuild from scratch to fit your person's exact communication style.

### 🔤 Word Builder — Core, Free
Build sentences symbol by symbol using a core vocabulary grid and scene-based word sets. Tap words into the sentence bar, hit Speak, and jVox reads the assembled sentence aloud using the device's natural text-to-speech engine. Compose longer, more complex thoughts than a single phrase button ever could.

### 🧒 About Me Profile — Core, Free
Fully personalized identity cards — name, age, location, family members, emergency contacts, and custom phrases. Fill in the fields once in Settings and every About Me button updates automatically. Invaluable for first responders, substitute teachers, and anyone meeting your person for the first time.

### ✨ Magic Wand — Aura, Premium
Three tapped words become a complete, natural sentence — in one tap. The **Adaptive Expression** engine takes whatever fragments are in the sentence bar and refines them into fluent, natural language before speaking. Intent is preserved. Expression is perfected. Powered by Groq (free tier, no credit card, 60 seconds to set up).

### ✦ Aura Mode — Environmentally Aware Voice — Aura, Premium
jVox watches your surroundings and surfaces the right phrases at the right moment, so communication keeps pace with the world:

- **Visual-Sense** — Point the camera at any scene. Aura identifies the environment and generates four context-specific communication buttons (Identity, Request, Social, Comment) — dynamically, in real time.
- **Ambient-Sense** — A rolling 10-second microphone buffer listens for nearby conversation and automatically populates relevant response options, so your person is always ready to join in.
- **Geo-Sense** — Detects location and prioritizes the most relevant communication board. Context (Home, School, Restaurant, Medical, and more) is tappable and saves per-location, so jVox remembers preferences for next time.

### 🎭 Situation Card Builder — Aura, Premium
Build a custom phrase pack for any situation in three steps — name it, describe it, and let jVox generate a tailored set of questions and responses. A coffee date, a doctor visit, a classroom presentation — every context gets its own communication script, ready instantly.

### 🌿 Regulate & Zen Mode — Aura, Premium
Communication can only flow when the body is calm. Regulate gives you the tools to get there:

- **Zen Mode** — Full-screen breathing guide with a generative ambient soundscape: Rain, Ocean, Forest, or Solfeggio Tones — all synthesized directly in the browser, no audio files required. A floating particle scene and a phase-guided breathing ring help regulate the nervous system before communication begins.
- **Custom Audio Matrix** — Five personal audio slots. Record live from the microphone, upload a file, or play back any slot with a single tap. All slots are PIN-locked in Edit Mode to prevent accidental changes.

### ⚙️ Settings & Customization — Core, Free
- **About Me Editor** — Name, age, siblings (gender + name auto-constructs the phrase), emergency contact, address, and freeform personal notes.
- **Voice & Speech Rate** — Choose from all available system voices, including neural and online voices where available.
- **After Speaking** — Choose to clear the sentence bar after speaking, or keep words loaded for re-use.
- **Themes** — Dark Luxury and Bright Colorful. Designed for every lighting condition and visual preference.
- **Edit Mode** — PIN-locked. Protects all category, phrase, and symbol editing from accidental changes.
- **Backup & Restore** — Export all data as a single JSON file. Restore from any backup instantly.
- **Restore Factory Defaults** — Returns jVox to its original state (prompts for a backup download first).
- **Groq API Key** — Powers Magic Wand and all three Aura Mode sensors. Free tier at [console.groq.com](https://console.groq.com) — no credit card required.

---

## How to Use

1. **Tap a category** on the home grid to open its phrase board. Tap any phrase to speak it immediately.
2. **Word Builder tab** — tap core words and scene vocabulary to compose a sentence, then tap **Speak**.
3. **Settings → About Me** — fill in your person's details and tap **Save Settings**. Every About Me button updates instantly.
4. **Unlock Edit Mode** in Settings to add, remove, rename, or reorder any button in any category.
5. **Toggle ✦ Aura** at the top of the screen to activate the Environmentally Aware Voice. Switch back to Standard to return to the category grid.
6. **Back up your data regularly** using **💾 Backup My Data** in Settings — especially before using Restore Defaults.

---

## Plans

| | Core | ✦ Aura Access |
|---|---|---|
| **Price** | Free, always | Free during Early Access |
| Category Boards (150+ phrases) | ✓ | ✓ |
| Word Builder | ✓ | ✓ |
| About Me Profile | ✓ | ✓ |
| Offline, installs on any device | ✓ | ✓ |
| Themes & full customization | ✓ | ✓ |
| Data backup & restore | ✓ | ✓ |
| ✨ Magic Wand AI | — | ✓ |
| 📸 Visual-Sense (camera) | — | ✓ |
| 🎙 Ambient-Sense (microphone) | — | ✓ |
| 📍 Geo-Sense (location) | — | ✓ |
| 🎭 Situation Card Builder | — | ✓ |
| 🌿 Regulate & Zen Mode | — | ✓ |
| AI usage included | — | ✓ |

Until Aura Access formally launches, all AI features are available completely free — no API key required. Just open the app and explore.

---

## Technical Details

| | |
|---|---|
| **Type** | Progressive Web App (PWA) — installs to home screen on iOS, Android, and desktop |
| **Offline** | Fully functional offline after first load — no connection required for core features |
| **Audio** | Web Audio API — all Zen soundscapes generated in-browser, no audio files |
| **Magic Wand / Aura** | Groq API — free tier, no credit card required |
| **Geo-Sense Maps** | Nominatim / OpenStreetMap — reverse geocoding, no API key needed |
| **Storage** | localStorage — all data stays on your device |
| **Architecture** | Single HTML file + 4 supporting files |

---

## File Structure

```
index.html      — The full app (single file)
manifest.json   — PWA manifest for home screen install
sw.js           — Service worker for offline support
icon-192.png    — App icon (192×192)
icon-512.png    — App icon (512×512)
.nojekyll       — Prevents GitHub Pages from processing Jekyll
```

---

## Privacy

jVox stores all user data locally on your device using browser localStorage. No personal information is ever sent to any server except:

- **Groq API** — phrase text is sent only when actively using Magic Wand or Aura Mode features, and only if you have provided a Groq API key.
- **Nominatim** — GPS coordinates are sent to OpenStreetMap's geocoding service only when Geo-Sense is active. No account or API key required.

Camera and microphone access is requested only when Visual-Sense or Ambient-Sense is actively running. Nothing is recorded, stored, or transmitted beyond the active session.

---

## Our Story

jVox didn't start in a tech lab — it started at a kitchen table.

It was built by a father who watched his son with disabilities struggle to express the full complexity of his thoughts using rigid, static communication boards. Twenty buttons are not a voice. They are a cage.

The world moves too fast for static grids. jVox bridges the gap between simple requests and genuine human expression — using an AI layer that grows with your person's thoughts instead of limiting them.

This is a legacy project. Built for one child, shared with the world — because every person deserves to be heard.

*Built by a father. Powered by adaptive AI. Dedicated to every family who has ever been told their person has nothing left to say.*

---

## Mission

**Communication is not a luxury.**

Traditional AAC systems are locked behind immense financial barriers. Dedicated speech hardware often costs thousands of dollars and months of insurance bureaucracy, while standalone apps routinely charge $250 upfront or tie families into expensive recurring subscriptions.

jVox is built to run on any device you already own. The core service is free, offline-first, and will stay that way. JVox.org is currently in pre-filing preparation for 501(c)(3) nonprofit status.

---

*jVox AAC — Built with love for families who communicate differently.*
