# Cleanup – Phase 2 (Bild- & Video-Optimierung)

Nach der Migration auf `.webp` mit sprechenden Namen können die folgenden Dateien aus `public/` gelöscht werden. Sie werden **nirgendwo mehr im Code referenziert** (verifiziert per `grep` + erfolgreichem `npm run build`).

## Zu löschende Bilddateien (Originale, durch `.webp` ersetzt)

```
public/0D2EE444-C627-44A9-80D6-55BBE2417AEF.png
public/1EC6B235-4A5E-4715-9724-3327085A5AE8.png
public/504F6B03-A916-4EF1-ADA7-0E8843E99BE6.png          → portfolio-salif-gebaeudeservice.webp
public/51882DC2-1247-4F10-B2A7-1D48EE839AEC.png
public/64BB3620-F0DF-4887-A72B-6F4E69750FD8.png          → 64bb3620-f0df-4887-a72b-6f4e69750fd8.webp
public/69A2D4F6-C40F-447B-B10C-5C8633E4CD0D.png          → logo-fylu.webp
public/8BE048EC-7F69-4DD4-AE4D-DED0A9A0415B.png          → portfolio-galabau-eifler.webp
public/B2B192DF-AD56-4E4D-9F09-EE894CE91BB8.png          → portfolio-demir-speedconnect.webp
public/B3FA1614-4018-4622-B786-9668EF8D1D07_1_105_c.jpeg
public/C64B3436-B13E-4321-AA01-C0F84E766D06.png
public/CCA2731B-F32B-49C3-AD25-A97E507C4EFB_1_105_c.jpeg
public/D137C214-56B4-4A21-A23D-A259ACCD0558_1_201_a.jpeg
public/D650852E-6EFC-477A-B33C-4F179CFB35FA.png          → portfolio-saray-saarlouis.webp
public/DA23B12F-8917-4CE3-933F-DC15AD6D43C2.png          → portfolio-taskey-app.webp
public/EE60E06D-A52C-4532-93C0-85429C27E880.png          → portfolio-porto-cervo-saarlouis.webp
public/Gemini_Generated_Image_b6mv3bb6mv3bb6mv.png
public/Untitled-24-removebg-preview.png                  → untitled-24-removebg-preview.webp
public/Untitled-25-removebg-preview.png                  → untitled-25-removebg-preview.webp
public/Untitled-26-removebg-preview.png                  → untitled-26-removebg-preview.webp
public/Untitled-27-removebg-preview.png                  → untitled-27-removebg-preview.webp
public/heroba.png                                        → hero-background.webp
public/sectioba.png                                      → section-background.webp
public/hero-poster.jpg                                   → hero-poster.webp (bereits vorhanden)
```

## Zu löschende Videodateien (nicht mehr referenziert)

```
public/Videoerstellung_Dein_Video_ist_fertig_.mov        (durch hero.mp4 ersetzt)
```

## Noch verwendete (NICHT löschen!)

```
public/hero.mp4
public/hero-poster.webp
public/glyph_waves_remix.mp4
public/ostracized_remix.mp4
public/Frau_schaut_träumerisch_aus_Fenster.mov   (FullscreenVideoSection)
public/Videoerstellung_nach_Wunsch.mp4
public/mach_weniger_blitz_effekte_rei.mp4
public/agb_fylu.pdf
public/*.svg
```

## Löschbefehl (manuell ausführen)

```bash
cd /Users/fynnschulz/FyluMarketing/fylumarketinggeld

rm -f \
  public/0D2EE444-C627-44A9-80D6-55BBE2417AEF.png \
  public/1EC6B235-4A5E-4715-9724-3327085A5AE8.png \
  public/504F6B03-A916-4EF1-ADA7-0E8843E99BE6.png \
  public/51882DC2-1247-4F10-B2A7-1D48EE839AEC.png \
  public/64BB3620-F0DF-4887-A72B-6F4E69750FD8.png \
  public/69A2D4F6-C40F-447B-B10C-5C8633E4CD0D.png \
  public/8BE048EC-7F69-4DD4-AE4D-DED0A9A0415B.png \
  public/B2B192DF-AD56-4E4D-9F09-EE894CE91BB8.png \
  public/B3FA1614-4018-4622-B786-9668EF8D1D07_1_105_c.jpeg \
  public/C64B3436-B13E-4321-AA01-C0F84E766D06.png \
  public/CCA2731B-F32B-49C3-AD25-A97E507C4EFB_1_105_c.jpeg \
  public/D137C214-56B4-4A21-A23D-A259ACCD0558_1_201_a.jpeg \
  public/D650852E-6EFC-477A-B33C-4F179CFB35FA.png \
  public/DA23B12F-8917-4CE3-933F-DC15AD6D43C2.png \
  public/EE60E06D-A52C-4532-93C0-85429C27E880.png \
  public/Gemini_Generated_Image_b6mv3bb6mv3bb6mv.png \
  public/Untitled-24-removebg-preview.png \
  public/Untitled-25-removebg-preview.png \
  public/Untitled-26-removebg-preview.png \
  public/Untitled-27-removebg-preview.png \
  public/heroba.png \
  public/sectioba.png \
  public/hero-poster.jpg \
  public/Videoerstellung_Dein_Video_ist_fertig_.mov

# Verifikation
npm run build
du -sh public/
```

## Verifikation vor Löschung

```bash
# Sicherstellen, dass keine Referenzen mehr existieren:
grep -RIn "heroba\|sectioba\|Videoerstellung_Dein\|69A2D4F6\|8BE048EC\|B2B192DF\|D650852E\|EE60E06D\|504F6B03\|DA23B12F\|64BB3620\|Untitled-2[4-7]\|hero-poster\.jpg" src/
# → keine Ergebnisse erwartet
```

## Erwartetes Ergebnis

- `public/`-Größe: von **65 MB** auf **< 8 MB**
- Lighthouse Performance Mobile: **> 80**
- LCP-Bild: `/hero-poster.webp` (16 KB) statt `/heroba.png` (mehrere MB)
