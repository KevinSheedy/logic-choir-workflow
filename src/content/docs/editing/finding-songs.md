---
title: Finding and cutting songs
description: Splitting a 60-minute concert into individual songs in Logic.
sidebar:
  order: 1
---

## Quick navigation
- **Markers**: one per song, named. Open the *Marker List* (from the List Editors area, or the *Navigate* menu) to jump around.
- **Zoom**: `Cmd`‑arrow keys. The waveform's shape shows applause (dense blocks) vs singing (phrased shapes).
- **Cycle**: set a cycle region over a song with `Cmd`‑`U` on a selected marker, so playback loops just that song.

## Cutting with handles
1. Place the playhead about **2–5 seconds before** the first note (the breath and silence matter) and split (`Cmd`‑`T`).
2. Do the same about **5–10 seconds after** the last note or once the reverb has decayed. Don't cut the natural room tail. Applause usually starts sooner than that. Keep it, and split it into its own region at the first clap (see [Applause and gaps](/logic-choir-workflow/editing/applause-and-gaps/)).
3. Move each song to its own **track or section** so it can get its own tweaks.

## Song-to-song consistency
Songs from one concert usually share the same EQ and reverb. Keep processing on a **shared bus** (an aux) and only add per-song tweaks where needed.

## To learn
- [ ] Find the fastest marker workflow (key commands vs Marker List).
- [ ] Try *Strip Silence* for finding song boundaries.
