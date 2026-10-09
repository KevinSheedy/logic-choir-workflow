---
title: Workflow changelog
description: Dated record of workflow decisions and why they were made.
sidebar:
  order: 1
---

Newest first. Record **what changed and why**, not just what you did.

## 2026-10-09
- Bought **LiquidSonics Seventh Heaven** (Bricasti M7 recreation) as the main reverb. Next: run the [evaluation protocol](/logic-choir-workflow/reverb/evaluation-protocol/) against ChromaVerb and Space Designer to pick a hall preset. See [Current choice](/logic-choir-workflow/reverb/third-party-options/#-current-choice).
- Levels and applause: our applause is always louder than the singing, so *Normalize Region Gain* was setting levels from claps. The new workflow:
  - **One hand-set gain for the whole concert**, based on the loudest singing.
  - **Split each song's applause into its own region and turn it down** with region gain (start at −10 dB), before any processing.
  - **Measure loudness on the song without the applause.**
  See [Applause and gaps](/logic-choir-workflow/editing/applause-and-gaps/).
- Mic technique: moving from **XY at about 90°**, which bunched the row into the centre, to **ORTF (17 cm, 110°)** on the planned boom. Its recording angle (about 95°) is a bit wider than the angle the row spans from the boom (about 68–78°), so the row fills most of the stereo width. NOS (30 cm, 90°) is the fallback. See [Mic placement](/logic-choir-workflow/recording/mic-placement/).
- All three iPhones shoot **4K at 30 fps**, as at past concerts. Switching to 25 fps (to avoid light flicker where mains power is 50 Hz) is noted as an option to discuss.
- Planned: a **K&M 21021** boom stand, with the centre iPhone on the upright and the sE8 pair on the boom, so the mics sit higher and closer while staying out of shot. See [Shared boom stand](/logic-choir-workflow/recording/mic-placement/#planned-shared-boom-stand-km-21021).
- Added [Camera placement](/logic-choir-workflow/recording/camera-placement/) for the centre iPhone: distance, height and settings to fit the row of 8 singers on the 1x lens, plus the two side iPhones used for extra angles. Cameras now go in place before the mics. At the last concert the mics shared the camera stand to keep them out of the shot, which put them too low.

## 2026-10-03
- Switched from volume automation to **dynamic EQ (TDR Nova)** for taming loud high-voice peaks. It turns down only the offending frequencies when they get loud, rather than the whole track. See [Taming loud high notes](/logic-choir-workflow/tone/dynamic-eq/).

## 2026-10-02
- Three piano-accompanied songs were sung from beside the piano (far right) without moving the mics. Added [Off-centre performers](/logic-choir-workflow/tone/off-centre-performers/) with a fix plan, and a checklist item to re-aim the mics when the group moves.

## 2026-10-01
- Started this site (Astro + Starlight, GitHub Pages).
- Two concerts recorded (H5essential, 32-bit float, sE8 pair at about 90°). Editing 3–5 songs from each.
- Reverb: evaluating third-party options. See the [shortlist](/logic-choir-workflow/reverb/third-party-options/).
