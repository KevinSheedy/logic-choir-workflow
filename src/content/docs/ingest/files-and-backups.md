---
title: Files and backups
description: Folder structure, naming and backup for raw concert recordings.
sidebar:
  order: 1
---

Raw recordings can't be replaced. Treat them as **read-only originals**.

## Folder structure

```
~/Music/Ascolta/
  2026-09-20_St-Marys/
    00_raw/          ← untouched copies from the SD card (never edit)
    01_logic/        ← the Logic project
    02_bounces/      ← masters (WAV) and share copies (MP3/AAC)
    notes.md         ← rough notes, timestamps, setlist
```

**Naming**: `YYYY-MM-DD_Venue`. Dates sort correctly and the venue jogs your memory.

## Backup (3-2-1)
- **3** copies: the working copy, a local backup (external drive or Time Machine), and an off-site copy (cloud).
- **2** different media.
- **1** off-site.

Raw 32-bit files are about 1.1 GB per hour, which is fine for iCloud, Google Drive or Backblaze.

:::caution
Never commit audio to this site's git repo. `.gitignore` already blocks `*.wav` and `*.logicx`.
:::
