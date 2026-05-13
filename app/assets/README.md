# J-VOX Assets Directory

## Splash Video

Place your splash screen video here to replace the default icon animation on the intro screen.

**Filename:** `splash.mp4` (or `splash.webm` or `splash.mov`)

**Specs:**
- Format: MP4, WebM, or MOV
- Resolution: 1080×1920 (portrait, vertical video)
- Max size: ~2MB (for mobile performance)
- Duration: 2–4 seconds recommended
- Must be silent (video only, no audio)

### How it works:

The app automatically detects and loads the splash video on app launch. If the video file is present, it will:
- Display in the splash overlay at startup
- Replace the animated icon
- Loop continuously during the splash phase
- Fallback to the icon animation if video is missing or fails to load

### Supported formats (in order of priority):
1. `splash.mp4` (best compatibility)
2. `splash.webm` (smaller file size)
3. `splash.mov` (fallback)

If none are found, the app displays the default icon animation.

---

**Date added:** May 13, 2026  
**App:** J-VOX AAC v4
