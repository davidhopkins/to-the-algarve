/* ═══════════════════════════════════════════════════════════════════════════
   characters.js — every word the chart says.

   ── How it works ──────────────────────────────────────────────────────────
   An advent calendar. The send-off cluster (day 0) is on the map from the start.
   After that ONE new character appears per day, heading south down the route, in
   the order below. On their day their curtain lifts and they say their one
   message. Afterwards they stay put: poke them any time to hear it again (frozen
   as it read on their day). Characters whose day hasn't come sit behind a curtain
   and can't be poked.

   One message per character — that's all there is to write.

   ── Placeholders ──────────────────────────────────────────────────────────
     {name} {other} {both}   the travellers
     {days}                  days left on that character's day (matches the tag)
     {percent}               progress that day, whole number
     {dest}                  the destination from CONFIG (currently "Algarve")

   ── Changing the calendar ─────────────────────────────────────────────────
   ORDER and DATES come from the ADVENT list in index.html, and positions from
   SCENERY there. Edit words here. Dates below assume the 22 Sep → 10 Oct 2026
   trip. Benched (not on the map): A Cloud, The Other Cloud.
   ═══════════════════════════════════════════════════════════════════════════ */

window.CHARACTERS = {

  /* ── Day 0 · Tue 22 Sept · the send-off, all on screen at launch ── */
  "Big Ben": { message: "Hello {both}! Big Ben says there's {days} left until you touch down in Portugal. Whoop!" },
  "The Rain Cloud": { message: "Rain clouds only exist over here!" },
  "Nessie": { message: "If you want to see Nessie, you'll have to plan another trip..." },
  "The Pint": { message: "AF Guinesses yeah!" },
  "The Kraken": { message: "Careful! Monsters lurking over here..." },
  "The Seagulls": { message: "OI. {both}. Chips?" },

  /* ── one per day, heading south ── */

  /* Day 1 · Wed 23 Sept */
  "The Sea Monster": { message: "I am a big scary monster!" },

  /* Day 2 · Thu 24 Sept */
  "The Eiffel Tower": { message: "Bonjour! Why you no visit le me instead? 😭" },

  /* Day 3 · Fri 25 Sept */
  "The Whale": { message: "I used to be a cow 🐮" },

  /* Day 4 · Sat 26 Sept */
  "The Dolphins": { message: "{both}! We reckon we can get there in less than {days}. Race?" },

  /* Day 5 · Sun 27 Sept */
  "The Pirate Ship": { message: "Arrrrrh! {days} till landfall" },

  /* Day 6 · Mon 28 Sept */
  "The Compass Rose": { message: "North is up, Algarve is down. {other} is pretty, and {name} will be brown!" },

  /* Day 7 · Tue 29 Sept */
  "The Mermaid": { message: "Remember your SPF factor 50 {name}!." },

  /* Day 8 · Wed 30 Sept */
  "The Bull": { message: "¡Arriba, arriba! ¡Ándale, ándale! It's {days} to go. No bull..." },

  /* Day 9 · Thu 1 Oct */
  "The Turtle": { message: "Wassup my duuudes! Be sure to catch some waves 🌊" },

  /* Day 10 · Fri 2 Oct */
  "The Sun": { message: "I'm holding it at 24 degrees for you. Don't be late." },

  /* Day 11 · Sat 3 Oct */
  "The Sardines": { message: "Psst. {both}. When you get here - maybe order the chicken?" },

  /* Day 12 · Sun 4 Oct */
  "The Tram": { message: "Lisbon, {both}. I'll take you up the hill when you're passing. Mind the step." },

  /* Day 13 · Mon 5 Oct */
  "The Swimming Pool": { message: "Cannonball! Come take a dip, {both}. The water's lovely." },

  /* Day 14 · Tue 6 Oct */
  "The Portuguese Custard Tart": { message: "{percent}% done. Almost as flaky as me." },

  /* Day 15 · Wed 7 Oct */
  "The Crab": { message: "{days}. Sideways. That's how I'd be doing it. Sideways." },

  /* Day 16 · Thu 8 Oct */
  "The Camel": { message: "OI. {both}. You're nearly there. I can see it from where I'm standing." },

  /* Day 17 · Fri 9 Oct */
  "The Surfer": { message: "Catch you on the waves, {both}! {days} until paradise." },

  /* Day 18 · Sat 10 Oct · arrival */
  "The Stork": { message: "That's the {dest}! {both}, shuffle up - there's room on the wall for you." }
};
