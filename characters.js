/* ═══════════════════════════════════════════════════════════════════════════
   characters.js — every word the chart says.

   ── How it works now ──────────────────────────────────────────────────────
   One character appears per day, like an advent calendar, in the order below.
   On their day their curtain lifts and they say their ONE message. After that
   they stay on the map: poke them any time and they repeat what they said on
   their day (so it goes a little out of date — that is on purpose, a small trip
   back in time). Characters whose day has not arrived stay behind a curtain and
   cannot be poked.

   So: one message per character. That is the only thing to write.

   ── Placeholders you can use in a message ─────────────────────────────────
     {name}     one of the two travellers, picked per day    -> "David"
     {other}    whichever one {name} isn't                   -> "Freya"
     {both}     both of them                                 -> "David and Freya"
     {days}     days left on that character's day            -> "12 days" / "one day"
                (matches the big countdown number that day)
     {percent}  progress that day, as a whole number         -> "63"
     {dest}     where you are going, from CONFIG             -> "Algarve"

   ── Changing the calendar ─────────────────────────────────────────────────
   The ORDER and DATES are set by the ADVENT list in index.html, not here. The
   dates in the comments below assume the current trip (22 Sep -> 10 Oct 2026).
   Edit the words here; edit ADVENT (and SCENERY) in index.html to change who
   appears when, or to bring back a benched character.

   Benched for now (not on the map): A Cloud, The Other Cloud, The Crab,
   The Compass Rose, The Turtle, The Sardines, The Camel.
   ═══════════════════════════════════════════════════════════════════════════ */

window.CHARACTERS = {

  /* Day  1 · Tue 22 Sep — London, the send-off */
  "Big Ben": {
    message: "Hello {both}! Big Ben says there's {days} left until you touch down in Portugal. Whoop!"
  },

  /* Day  2 · Wed 23 Sep — grey Britain, waving you off */
  "The Rain Cloud": {
    message: "Rain clouds only exist over here!"
  },

  /* Day  3 · Thu 24 Sep — Scotland */
  "Nessie": {
    message: "If you want to see Nessie, you'll have to plan another trip..."
  },

  /* Day  4 · Fri 25 Sep — Ireland */
  "The Pint": {
    message: "AF Guinesses yeah!"
  },

  /* Day  5 · Sat 26 Sep — following you out to sea */
  "The Seagulls": {
    message: "OI. {both}. Chips?"
  },

  /* Day  6 · Sun 27 Sep — the deep Atlantic */
  "The Kraken": {
    message: "Careful! Monsters lurking over here..."
  },

  /* Day  7 · Mon 28 Sep — passing France */
  "The Eiffel Tower": {
    message: "You pass by. You do not stop. Typical. {days}, then."
  },

  /* Day  8 · Tue 29 Sep — mid Atlantic */
  "The Sea Monster": {
    message: "RAAAAR. ...Sorry. {days} left, by the way. RAAAAR."
  },

  /* Day  9 · Wed 30 Sep — mid Atlantic */
  "The Whale": {
    message: "The sea does not hurry, and yet everything arrives. {days}."
  },

  /* Day 10 · Thu  1 Oct */
  "The Dolphins": {
    message: "{both}! Race you! ...No? Fine. We'll just do laps then."
  },

  /* Day 11 · Fri  2 Oct */
  "The Pirate Ship": {
    message: "Arr. {days} till landfall. Ye've the patience of a barnacle."
  },

  /* Day 12 · Sat  3 Oct */
  "The Mermaid": {
    message: "Factor 50, {name}. I have seen what that sun does to a shoulder."
  },

  /* Day 13 · Sun  4 Oct — Spain */
  "The Bull": {
    message: "{days}. I have stood in this field for every one of them."
  },

  /* Day 14 · Mon  5 Oct — central Portugal */
  "The Windmill": {
    message: "Round and round, {both}. Round and round. {days} to go."
  },

  /* Day 15 · Tue  6 Oct — Lisbon */
  "The Tram": {
    message: "Lisbon, {both}. I'll take you up the hill when you're passing. Mind the step."
  },

  /* Day 16 · Wed  7 Oct — southern Portugal */
  "The Orange Tree": {
    message: "There'll be oranges when you get here, {name}. There are always oranges."
  },

  /* Day 17 · Thu  8 Oct — Seville */
  "The Guitar": {
    message: "{percent}% done. Shall I play something sad about it?"
  },

  /* Day 18 · Fri  9 Oct — waiting off the Algarve */
  "The Sun": {
    message: "I'm holding it at 24 degrees for you. Don't be late."
  },

  /* Day 19 · Sat 10 Oct — arrival */
  "The Stork": {
    message: "That's the {dest}! {both}, shuffle up - there's room on the wall for you."
  }
};
