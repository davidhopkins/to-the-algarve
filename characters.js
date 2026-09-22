/* ═══════════════════════════════════════════════════════════════════════════
   characters.js — every word the chart says.

   ── The important thing ───────────────────────────────────────────────────
   ONE character speaks per day, and it is a DIFFERENT one each day. Over the
   trip that is 19 days and 19 speakers, so each character gets exactly one
   turn. They are listed below in the order they speak, with the date.

   Because each has a single line, there is no shuffling to reason about:
   THE LINE YOU WRITE IS THE LINE THAT APPEARS on that day.

   Add more lines to anyone if you like — they become spares, used only if the
   dates change and that character gets a second turn.

   ── The two pools ─────────────────────────────────────────────────────────
     lines  The daily speech bubble, on the date shown above each character.
     pokes  Short reactions when you tap them on the chart. Tapping repeatedly
            cycles through them, so several is better than one. EVERY character
            is tappable, including the ones that never get a speaking day.

   ── Placeholders, usable in either pool ───────────────────────────────────
     {name}     one of the two travellers, picked per day    → "David"
     {other}    whichever one {name} isn't                   → "Freya"
     {both}     both of them                                 → "David and Freya"
     {days}     how long is left, already worded             → "12 days" / "one day"
                (matches the big number on the countdown tag exactly)
     {percent}  progress as a whole number                   → "63"
     {dest}     where you are going, from CONFIG             → "Algarve"

   ── Notes ─────────────────────────────────────────────────────────────────
   • Dates assume the current CONFIG in index.html (22 Sept → 10 Oct 2026).
     Change those and the rota reshuffles, because who speaks when is derived
     from where each character sits along the route.
   • An empty line won't break anything — that character just says so.
   ═══════════════════════════════════════════════════════════════════════════ */

window.CHARACTERS = {


  /* Day 1  · Tue 22 Sept — London. Opens the show. */
  "Big Ben": {
    lines: [
      "Hello {both}! Big Ben says there's {days} left until you touch down in Portugal. Whoop!"
    ],
    pokes: ["Ding Dong!"]
  },

  /* Day 2  · Wed 23 Sept — the North Sea, and bitter about being the other one */
  "The Other Cloud": {
    lines: [
      "Cloudy says you're officially {percent} percent nearly there!"
    ],
    pokes: ["Typical.", "Don't mind me.", "*sulks*"]
  },

  /* Day 3  · Thu 24 Sept — the open Atlantic */
  "The Sea Monster": {
    lines: [
      "RAAAAR. ...Sorry. {days} left, by the way. RAAAAR."
    ],
    pokes: ["RAAAR!", "Careful, I bruise.", "Nobody ever scratches behind the fin."]
  },

  /* Day 4  · Fri 25 Sept — over northern England, watching you leave */
  "The Rain Cloud": {
    lines: [
      ""                       /* <-- still to write */
    ],
    pokes: ["Rain clouds only exist over here!"]
  },

  /* Day 5  · Sat 26 Sept — Loch Ness */
  "Nessie": {
    lines: [
      ""                       /* <-- still to write */
    ],
    pokes: ["If you want to see Nessie, you'll have to plan another trip..."]
  },

  /* Day 6  · Sun 27 Sept — Paris */
  "The Eiffel Tower": {
    lines: [
      "You pass by. You do not stop. Typical. {days}, then."
    ],
    pokes: ["Non.", "*creaks elegantly*", "Please. I am iron."]
  },

  /* Day 7  · Mon 28 Sept — mid Atlantic */
  "The Whale": {
    lines: [
      "The sea does not hurry, and yet everything arrives. {days}."
    ],
    pokes: ["*enormous sigh*", "Mind the blowhole.", "Thbbbt."]
  },

  /* Day 8  · Tue 29 Sept — the North Sea */
  "A Cloud": {
    lines: [
      "Lovely day. {days} to go. Lovely day."
    ],
    pokes: ["*drifts*", "Mm.", "Puff."]
  },

  /* Day 9  · Wed 30 Sept — off to the west */
  "The Dolphins": {
    lines: [
      "{both}! Race you! ...No? Fine. We'll just do laps then."
    ],
    pokes: ["Eee!", "Again! Again!", "*backflip*"]
  },

  /* Day 10 · Thu 1 Oct — the north-western Atlantic */
  "The Kraken": {
    lines: [
      ""                       /* <-- still to write */
    ],
    pokes: ["Careful! Monsters lurking over here..."]
  },

  /* Day 11 · Fri 2 Oct — mid Atlantic */
  "The Pirate Ship": {
    lines: [
      "Arr. {days} till landfall. Ye've the patience of a barnacle."
    ],
    pokes: ["Arr.", "Avast, that tickles.", "Ye'll wake the crew."]
  },

  /* Day 12 · Sat 3 Oct — Ireland */
  "The Pint": {
    lines: [
      ""                       /* <-- still to write */
    ],
    pokes: ["AF Guinesses yeah!"]
  },

  /* Day 13 · Sun 4 Oct — the western Atlantic */
  "The Mermaid": {
    lines: [
      "Factor 50, {name}. I have seen what that sun does to a shoulder."
    ],
    pokes: ["Watch the hair.", "Rude.", "I was mid-song."]
  },

  /* Day 14 · Mon 5 Oct — the North Sea */
  "The Seagulls": {
    lines: [
      "OI. {both}. Chips?"
    ],
    pokes: ["MINE!", "Chips?", "*shrieks*"]
  },

  /* Day 15 · Tue 6 Oct — central Portugal */
  "The Windmill": {
    lines: [
      "Round and round, {both}. Round and round. {days} to go."
    ],
    pokes: ["Wheee.", "*creaks*", "Mind the sails."]
  },

  /* Day 16 · Wed 7 Oct — waiting off the Algarve */
  "The Sun": {
    lines: [
      "I'm holding it at 24 degrees for you. Don't be late."
    ],
    pokes: ["Ow. Bright, isn't it.", "Factor 50, please.", "I'm doing my best up here."]
  },

  /* Day 17 · Thu 8 Oct — the western Atlantic */
  "The Crab": {
    lines: [
      "{days}. Sideways. That's how I'd be doing it. Sideways."
    ],
    pokes: ["Snip!", "Oi.", "*scuttles*"]
  },

  /* Day 18 · Fri 9 Oct — Seville */
  "The Guitar": {
    lines: [
      "{percent}% done. Shall I play something sad about it?"
    ],
    pokes: ["*strums*", "Olé.", "Careful, I'm tuned."]
  },

  /* Day 19 · Sat 10 Oct — Faro. Arrival day. */
  "The Stork": {
    /* replaces the daily line the moment you land */
    arrival: "That's the {dest}! {both}, shuffle up - there's room on the wall for you.",
    lines: [
      "I nest on the old walls at Faro. {days} and I'll shuffle up for you."
    ],
    pokes: ["*clatters beak*", "This is my wall.", "Mind the nest."]
  },

  /* ─────────────────────────────────────────────────────────────────────
     These seven sit at the far end of the journey and are only reached on
     or after arrival day, so they never get a speaking turn on the current
     dates. Their `lines` are spares. Their `pokes` are NOT — every one of
     them is still tappable on the chart.
     ───────────────────────────────────────────────────────────────────── */

  /* Never reached on the current dates — the south-western Atlantic */
  "The Compass Rose": {
    lines: [
      "North is up. Faro is down. You are doing this correctly. {days} left."
    ],
    pokes: ["North!", "*spins*", "That way. Always that way."]
  },

  /* Never reached on the current dates — the southern Atlantic */
  "The Turtle": {
    lines: [
      "I'll get there eventually. So will you. {days}."
    ],
    pokes: ["...", "Give me a moment.", "*retracts*"]
  },

  /* Never reached on the current dates — the Alboran Sea */
  "The Sardines": {
    lines: [
      "Psst. {both}. When you get here - maybe order the chicken?"
    ],
    pokes: ["Swim! Swim!", "We saw nothing.", "Not the grill!"]
  },

  /* Never reached on the current dates — central Spain */
  "The Bull": {
    lines: [
      "{days}. I have stood in this field for every one of them."
    ],
    pokes: ["Snort.", "*paws the ground*", "Don't."]
  },

  /* Never reached on the current dates — Lisbon */
  "The Tram": {
    lines: [
      "Lisbon, {both}. I'll take you up the hill when you're passing. Mind the step."
    ],
    pokes: ["*ding ding*", "Full up!", "Hold tight."]
  },

  /* Never reached on the current dates — southern Portugal */
  "The Orange Tree": {
    lines: [
      "There'll be oranges when you get here, {name}. There are always oranges."
    ],
    pokes: ["*drops an orange*", "Have one.", "Shhh. Growing."]
  },

  /* Never reached on the current dates — Morocco */
  "The Camel": {
    lines: [
      "OI. {both}. You're nearly there. I can see it from where I'm standing."
    ],
    pokes: ["Hmph.", "Don't.", "I spit, you know."]
  }
};
