---
title: Loudness
description: LUFS, true peak, and target levels for each destination.
sidebar:
  order: 1
---

## The two numbers
- **Integrated loudness (LUFS)**: the average perceived loudness of the whole song.
- **True peak (dBTP)**: the highest peak, including peaks *between* samples that appear after MP3/AAC conversion.

## Targets

| Destination | Integrated | True peak |
|---|---|---|
| Spotify / YouTube / Apple Music | −14 LUFS (they turn louder tracks down) | −1 dBTP |
| Choral / classical natural sound | **−16 to −20 LUFS** is fine and keeps dynamics | −1 dBTP |
| Private share (WhatsApp/Drive) | about −16 LUFS | −1 dBTP |

A cappella doesn't need to hit −14. Streaming services turn loud songs *down* but don't usually turn quiet ones up much, so a natural −16 to −18 is a good compromise.

**Across a concert, keep songs consistent.** Quiet ballads should sound quieter than up-tempo songs. Don't normalise every song to the same LUFS. Set them by ear relative to each other.

## In Logic
1. Put the **Loudness Meter** (Metering) on the Stereo Out and play the whole song, then read *Integrated*.
2. Add **Adaptive Limiter** last on the Stereo Out: *Out Ceiling* **−1.0 dB**, with *True Peak Detection* on. Raise the *Gain* until the target is reached, keeping the limiting light (≤ 2–3 dB).
3. Recheck the integrated level.
