# Two Flamingos, One Lilo — to the Algarve

An illustrated sea chart that counts down to a holiday. Two flamingos paddle an
inflatable lilo from London to Faro, and how far along the route they are *is*
how much of the wait is done: **0% is 22 September 2026, 100% is the moment the
holiday starts on 10 October 2026.**

Each day one creature on the chart has something to say about it, and you can poke
any of them for a reaction.

No build step, no framework, no third-party requests. `index.html` is the app and
`characters.js` is all the writing; the only other files are a self-hosted font and
this README.

## Running it

Open `index.html` in a browser.

To use the demo/test URL parameters below, serve it over `http://` rather than
opening the file directly — browsers drop the query string in some local-file cases:

```bash
python3 -m http.server 8181
```

Then visit <http://localhost:8181/index.html>.

## Where things live

| File | What's in it |
|---|---|
| `characters.js` | **All the dialogue.** Edit this to rewrite what anyone says. |
| `index.html` | The app: the chart, the countdown, the unlock logic, the drawings. |
| `assets/fonts/` | The self-hosted font and its licence. |

If `characters.js` is missing or a character has no lines yet, the chart still works —
they just say so in their own speech bubble.

## Changing the details

Everything lives in the `CONFIG` object at the top of the `<script>` block.

| Field | What it does |
|---|---|
| `anchor` | The 0% date. Progress is measured from here, so it only ever rises. |
| `departure` | The 100% moment. Currently midnight at the start of 10 Oct — change to `2026-10-10T06:20:00` to land it on the actual flight time. |
| `origin` / `dest` | Name, latitude and longitude of the two ends. |
| `travellers` | The two names, and which flamingo gets the sunglasses and which the sunhat. |
| `waypoints` | The sea route. Add or move `[lon, lat]` points to change the paddle path. |
| `map` | The visible window of the chart, in degrees. |

Change `departure` and the countdown, the flamingos' position, the progress bar and
every line of dialogue that mentions how long is left all follow from it.

## The cast

The chart is populated from two lists near the top of the script:

- **`VOICES`** — the speaking characters. Each has `lines` (the daily dialogue) and
  `pokes` (short reactions when tapped). Add a line to any character and it joins the
  rotation automatically.
- **`SCENERY`** — where everything sits, as `lon`/`lat` plus a drawing name and scale.
  An entry with a `voice` becomes tappable; one without is pure decoration.

The drawings themselves are in `DRAW`, one small function of inline SVG each. They're
positioned through the same `project()` function as the coastlines, the route and the
flamingos, which is what keeps everything in register.

**Two things to know if you move a character:**

1. Scenery is spaced on a loose two-column grid down the Atlantic so nothing collides.
   The Iberian corner is deliberately busier.
2. Avoid the top-left corner and the very bottom edge — the countdown tag and the
   voyage bar sit there on wide screens and will cover anything underneath.

A voice with no matching scenery entry is skipped rather than breaking, so removing a
creature from the chart also removes it from the rotation.

## How the journey works — an advent calendar

Characters appear over the course of the trip, following the flamingos south.

- **Day 0 — the send-off.** A cluster around the UK & home waters (Big Ben, the Rain
  Cloud, Nessie, the Guinness, the Kraken, the Seagulls) is on the map from the start.
- **One new character per day after that**, in order, heading south down the route to
  the Algarve. On their day their curtain lifts and they say their one message.
- Once revealed a character stays put; poke them any time to hear their line again
  (frozen as it read on their day). Characters whose day hasn't come sit behind a
  curtain and can't be poked — poking one just tells you, anonymously, the date it lifts.

Because the reveal order runs strictly north→south along the route, every curtain is
always *ahead* of the flamingos — you never see an unopened character behind you.

Three files drive it:

- **`index.html` → `ADVENT`** — the ordered calendar. Element 0 is the day-0 cluster (a
  list of names); each later element is one day's single character; the last is arrival.
  This is the one source of truth for *when*.
- **`index.html` → `SCENERY` / `places`** — *where* each character sits. Positions run
  north→south with the calendar, sea characters west of the route and land landmarks
  east of it, so nothing collides and nothing sits on the path.
- **`characters.js`** — *what* each says, one `message` each.

24 characters are placed (a 6-strong send-off + 17 down the route + arrival); A Cloud
and The Other Cloud are benched. A message renders as it read at noon on that
character's day, so `{days}` matches the countdown that day.

## Test and demo parameters## Test and demo parameters## Test and demo parameters
## Test and demo parameters

A countdown is almost impossible to inspect — it shows one moment and changes
imperceptibly. These jump anywhere in the journey:

| Parameter | Effect |
|---|---|
| `?now=2026-10-05T12:00` | Pretend it is this moment. The clock still ticks on from there. |
| `?p=0.5` | Force progress to a raw fraction, ignoring the dates. |
| `?arrived=1` | Jump straight to the arrival state, confetti and all. |

A note appears under the chart whenever the clock is simulated, so a faked view can't be
mistaken for the real countdown.

## Layout and accessibility

The chart is the page. Everything else is either pinned to it or tucked underneath.

- **Wide screens** — the countdown sits on the chart as a cartouche, the voyage bar is
  pinned across its bottom edge, and the day's character speaks in a speech bubble with a
  tail pointing at whoever said it.
- **Narrow screens** — a bubble wide enough to read would blanket the map, so below a
  measured chart width of 620px it becomes a caption card under the chart instead. The
  speaker keeps gently bobbing on the map so you can still see who is talking.
- The chart's size comes from measuring the space actually left over, so the whole scene
  fits without scrolling at any window size.
- Every character is a real focusable button — tab to one and press Enter to poke it.
- `prefers-reduced-motion` stops all movement; the countdown keeps running.

### The camera (touch screens)

On a phone the whole chart is about 355px wide, which renders the smallest characters at
15px and gives 32px tap targets — under the 44px minimum for reliable touch. There is no
way to fix that by adjusting sizes: it is 2,000km of ocean with 26 things on it.

So small touch screens get a **movable window** onto the chart instead of the whole
thing. It opens framed on the flamingos, drag to pan, pinch to zoom, and a button toggles
between "Whole chart" and "Follow the flamingos". That brings the median character to
around 60px and tap targets to around 57px — both better than the desktop figures.

Three things worth knowing if you touch this:

- **Zooming happens inside the SVG viewBox, never on the page.** Pinch-zooming the page
  would push the caption off-screen, because fixed positioning does not track the visual
  viewport. Zooming the viewBox leaves the caption exactly where it is.
- **The viewBox aspect ratio is held constant** as the camera moves, so the element's
  height never changes and the layout cannot reflow underneath you.
- **The camera is gated on pointer type as well as size.** A laptop with a short window
  can end up with a 500px chart, which reads fine with a mouse; zooming it there would be
  a regression, so the camera needs a coarse pointer (or a genuinely tiny window) to
  switch on.

Following the journey frames the flamingos *and* whoever is speaking. If today's voice is
far away — the kraken while the lilo is off Portugal — it pulls back just enough to keep
both on screen, rather than naming someone you cannot see.

A drag is not a poke: if the pointer travels more than 10px the click is swallowed before
it reaches a character.

### Placing the speech bubble

Worth knowing if you touch this. The bubble scans candidate positions around the speaker
and picks the cheapest, where cost combines four things: how much it would cover (weighted
— scenery barely matters, the flamingos matter a lot, the speaker matters most), how far it
drifts from sitting directly above or below its speaker, and **how far the tail tip would
land from the character it is supposed to be coming out of.**

That last term is load-bearing. Without it the bubble finds beautifully clear water and
puts its tail 156px from the sun — which is exactly the bug that shipped in the previous
version. Equally, weighting scenery too heavily makes the bubble flee so far from its
speaker that the tail points at nothing.

Characters are anchored to a box measured **once**, at build time, and capped to a square
around their own point. Measuring it live picked up the idle animations mid-frame, so the
sun's bubble drifted as its rays rotated; and without the cap, wide art like those rays
shoves the bubble out past the tail's reach.

Verified across every character at several screen sizes: every tail lands within 14px of
its speaker's centre, and the flamingos are never covered.

## Font

`assets/fonts/shantell-sans.woff2` — Shantell Sans, latin subset, weights 400–700,
under the SIL Open Font License 1.1 (full text and credits in `assets/fonts/`).
Self-hosted on purpose: no third-party requests, and it works offline.
