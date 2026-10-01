---
title: Gear
description: The recorder and mics, and why 32-bit float changes how you work.
sidebar:
  order: 1
---

## Zoom H5essential

- Records **32-bit float WAV** only, so there's no input gain to set and nothing to clip at the recorder.
- Two XLR/TRS combo inputs with phantom power, which the sE8s need.
- Stereo concert files arrive as one stereo (or two mono) WAV files per take on the SD card.

### What 32-bit float means in practice

A 24-bit file has a fixed ceiling at 0 dBFS. Anything louder is clipped forever. A 32-bit float file can store values far above 0 dBFS and far below the noise floor, so:

- **You can't clip the file**, though you *can* still overload the mic or the preamp's analogue stage. The H5essential's dual A/D converters cover that range.
- A recording that looks "too quiet" or "clipped" on the waveform is fine. You just **normalise or adjust gain afterwards** in Logic.
- Files are bigger: roughly 1.1 GB per stereo hour at 48 kHz.

:::caution
Float headroom only helps if Logic keeps the extra data. See [Logic project setup](/logic-choir-workflow/ingest/logic-project-setup/) for how to bring levels down *before* anything clips inside the project.
:::

## sE Electronics sE8 (pair)

- Small-diaphragm condenser, **cardioid** pickup, needs 48 V phantom power.
- Built-in **pad** (0 / −10 / −20 dB) and **high-pass filter** (off / 80 / 160 Hz).
  - For a choir a few metres away, leave the pad **off** and set the HPF to **off or 80 Hz**. The 80 Hz setting tames stage and traffic rumble while keeping basses and baritones intact. With 32-bit float you can also filter later in Logic instead.
- A matched-ish pair, which is good for stereo imaging.

## To learn
- [ ] Confirm the exact H5essential sample-rate setting used (48 kHz recommended).
- [ ] Photograph the stand setup at the next gig for the concert log.
