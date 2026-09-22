/* ═══════════════════════════════════════════════════════════════════════════
   characters.js — every word the chart says.

   This is the only file you need to touch to rewrite the dialogue. Everything
   below is a first draft: overwrite it freely.

   ── How it works ──────────────────────────────────────────────────────────
   Each character has two separate pools:

     lines  The daily speech bubble. When it is a character's turn, one line is
            taken from here. Their lines are shuffled once and then worked
            through in order, so they never repeat until they run out. Add as
            many as you like; three or four is plenty.

     pokes  Short reactions shown when you tap that character on the chart.
            Keep these to a few words. They are a SEPARATE pool on purpose —
            tapping around the map must never reveal tomorrow's line.

   ── Placeholders you can use in either pool ───────────────────────────────
     {name}     one of the two travellers, picked per day    → "David"
     {other}    whichever one {name} isn't                   → "Freya"
     {both}     both of them                                 → "David and Freya"
     {days}     how long is left, already worded             → "12 days" / "one day"
                (matches the big number on the countdown tag exactly)
     {percent}  progress as a whole number                   → "63"

   ── Notes ─────────────────────────────────────────────────────────────────
   • Characters are listed in the order the flamingos meet them, with the date
     they are met. Writing to that date helps: the camel is greeting you almost
     on arrival, the rain cloud is watching you leave.
   • Dates assume the current CONFIG in index.html (22 Sept → 10 Oct 2026).
     Change those dates and these shift, but the order stays the same.
   • A character with no lines won't break anything — they'll just say so.
   • Straight apostrophes are fine. If you want a curly one, type it directly.
   ═══════════════════════════════════════════════════════════════════════════ */

window.CHARACTERS = {

  /* ───────── Visible from day one ───────── */

  "Big Ben": {                      /* London. Speaks on day one. */
    lines: [
      "Hello {both}! Big Ben says there's {days} left until you touch down in Portugal. Whoop!"
    ],
    pokes: ["Ding Dong!"]
  },

  "The Rain Cloud": {               /* over northern England */
    lines: [],
    pokes: ["Rain clouds only exist over here!"]
  },

  "Nessie": {                       /* Loch Ness */
    lines: [],
    pokes: ["If you want to see Nessie, you'll have to plan another trip..."]
  },

  "The Pint": {                     /* Ireland */
    lines: [],
    pokes: ["AF Guinesses yeah!"]
  },

  "The Kraken": {                   /* the north-western Atlantic */
    lines: [],
    pokes: ["Careful! Monsters lurking over here..."]
  },

  "The Seagulls": {                 /* the North Sea */
    lines: [
      "OI. {both}. Chips?",
      "{days} to go. Do they have chips in Faro? They have chips in Faro.",
      "We have seen your sandwich, {name}. We will find your sandwich."
    ],
    pokes: ["MINE!", "Chips?", "*shrieks*"]
  },

  "A Cloud": {                      /* the North Sea */
    lines: [
      "Lovely day. {days} to go. Lovely day.",
      "I might rain later. I might not. I genuinely do not know.",
      "I drifted all the way from Iceland for this. Worth it."
    ],
    pokes: ["*drifts*", "Mm.", "Puff."]
  },

  "The Other Cloud": {              /* also the North Sea, and bitter about it */
    lines: [
      "I'm the other one. Nobody ever asks the other one. {days}, since you ask.",
      "That cloud over there gets all the attention. I am right here.",
      "{name}. Look at me. Not at that cloud. At me."
    ],
    pokes: ["Typical.", "Don't mind me.", "*sulks*"]
  },

  /* ───────── Met along the way ───────── */

  "The Sea Monster": {              /* met Wed 23 Sept — the open Atlantic */
    lines: [
      "RAAAAR. ...Sorry. {days} days left, by the way. RAAAAR.",
      "I was going to eat you, but you look like you've had a long September.",
      "Everyone draws me on their maps and nobody ever stops for a chat.",
      "{percent}% of the way. I'm keeping count. I have literally nothing else on."
    ],
    pokes: ["RAAAR!", "Careful, I bruise.", "Nobody ever scratches behind the fin."]
  },

  "The Eiffel Tower": {             /* met Sat 26 Sept — Paris */
    lines: [
      "You pass by. You do not stop. Typical. {days}, then.",
      "Two thousand kilometres on an inflatable, and they call *me* a folly.",
      "{percent}%. In France we would call this 'a beginning'."
    ],
    pokes: ["Non.", "*creaks elegantly*", "Please. I am iron."]
  },

  "The Whale": {                    /* met Sun 27 Sept — mid Atlantic */
    lines: [
      "The sea does not hurry, and yet everything arrives. {days}.",
      "I migrate 16,000 km a year. You're doing 2,000 on an inflatable. Respect.",
      "Deep breath, {name}. The date will not come any faster for your worrying.",
      "I've been to the Algarve. Water's lovely. I'd steer clear of the restaurants."
    ],
    pokes: ["*enormous sigh*", "Mind the blowhole.", "Thbbbt."]
  },

  "The Dolphins": {                 /* met Tue 29 Sept */
    lines: [
      "{both}! Race you! ...No? Fine. We'll just do laps then.",
      "{days} left! We don't even know what days are! Isn't that brilliant!",
      "We've been following you for an hour and nobody has noticed. We're fine. We're great."
    ],
    pokes: ["Eee!", "Again! Again!", "*backflip*"]
  },

  "The Pirate Ship": {              /* met Thu 1 Oct */
    lines: [
      "Arr. {days} till landfall. Ye've the patience of a barnacle.",
      "In my day we'd have taken a galleon. Ye've taken a pool toy.",
      "There be no treasure in the Algarve, {name}. Only chicken. Which be better.",
      "Ye're {percent}% there. I'd have run aground twice by now."
    ],
    pokes: ["Arr.", "Avast, that tickles.", "Ye'll wake the crew."]
  },

  "The Mermaid": {                  /* met Sat 3 Oct */
    lines: [
      "Factor 50, {name}. I have seen what that sun does to a shoulder.",
      "{days}. Use them. Nobody ever regretted conditioning their hair.",
      "You could simply live in the sea. It's free. I've done it for years.",
      "{other} has the better sunglasses. I'm not starting anything. I'm just saying."
    ],
    pokes: ["Watch the hair.", "Rude.", "I was mid-song."]
  },

  /* ───────── The home straight ───────── */

  "The Windmill": {                 /* met Mon 5 Oct — central Portugal */
    lines: [
      "Round and round, {both}. Round and round. {days} to go.",
      "Four million turns up this hill and I've never once been to the beach.",
      "Wind's from the north today. That one's for you, that is."
    ],
    pokes: ["Wheee.", "*creaks*", "Mind the sails."]
  },

  "The Bull": {                     /* met Mon 5 Oct — central Spain */
    lines: [
      "{days}. I have stood in this field for every one of them.",
      "I move for nobody. I am moving for you. Slightly.",
      "Do not wave anything red at {name} when you arrive. I ask as a friend."
    ],
    pokes: ["Snort.", "*paws the ground*", "Don't."]
  },

  "The Sun": {                      /* met Tue 6 Oct — waiting off the Algarve */
    lines: [
      "I'm holding it at 24 degrees for you. Don't be late.",
      "{days} to go. I've started warming the sea already. You're welcome.",
      "{name}, I saw you checking the forecast. Bold, considering I'm right here.",
      "The Algarve gets around 300 days of me a year. October is usually one of them."
    ],
    pokes: ["Ow. Bright, isn't it.", "Factor 50, please.", "I'm doing my best up here."]
  },

  "The Orange Tree": {              /* met Tue 6 Oct */
    lines: [
      "There'll be oranges when you get here, {name}. There are always oranges.",
      "{days}. I'll hold back the good ones for you.",
      "Everything is slower in the sun. You'll understand when you arrive."
    ],
    pokes: ["*drops an orange*", "Have one.", "Shhh. Growing."]
  },

  "The Tram": {                     /* met Tue 6 Oct — Lisbon */
    lines: [
      "Lisbon, {both}. I'll take you up the hill when you're passing. Mind the step.",
      "{days}. I do this hill eighty times a day. You'll manage.",
      "Say obrigado when you get off. It costs nothing and it buys everything.",
      "{name} will want the window seat. {other} will get the window seat."
    ],
    pokes: ["*ding ding*", "Full up!", "Hold tight."]
  },

  "The Crab": {                     /* met Wed 7 Oct */
    lines: [
      "{days}. Sideways. That's how I'd be doing it. Sideways.",
      "Don't mind me. Nobody minds me. Just a crab, out here, in the Atlantic.",
      "{name}. If you tread on me in the Algarve, I will remember it.",
      "Everything's fine. I'm fine. {percent}% is fine. It's all fine."
    ],
    pokes: ["Snip!", "Oi.", "*scuttles*"]
  },

  "The Guitar": {                   /* met Thu 8 Oct — Seville */
    lines: [
      "{percent}% done. Shall I play something sad about it?",
      "In {days} there'll be a warm evening and someone will ask me to play. Let it be you.",
      "{both}: I only know the one song. It is very good."
    ],
    pokes: ["*strums*", "Olé.", "Careful, I'm tuned."]
  },

  /* ───────── Arrival day ───────── */

  "The Compass Rose": {             /* met Sat 10 Oct */
    lines: [
      "North is up. Faro is down. You are doing this correctly. {days} left.",
      "I have pointed the same way for four hundred years. Consistency is underrated.",
      "Bearing two-one-zero, {both}. Or simply keep going until it gets warm."
    ],
    pokes: ["North!", "*spins*", "That way. Always that way."]
  },

  "The Turtle": {                   /* met Sat 10 Oct */
    lines: [
      "I'll get there eventually. So will you. {days}.",
      "I once took four years to cross this. You're doing fine.",
      "No rush. There has never been a rush. There will never be a rush."
    ],
    pokes: ["...", "Give me a moment.", "*retracts*"]
  },

  "The Sardines": {                 /* met Sat 10 Oct — off the Algarve */
    lines: [
      "Psst. {both}. When you get here - maybe order the chicken?",
      "{days}. That is {days} for us to reflect on our life choices.",
      "We've heard you're coming. We've heard what you people do with a grill.",
      "There are four hundred of us and we would all like a word about lunch."
    ],
    pokes: ["Swim! Swim!", "We saw nothing.", "Not the grill!"]
  },

  "The Camel": {                    /* met Sat 10 Oct — shouting from Morocco */
    lines: [
      "OI. {both}. You're nearly there. I can see it from where I'm standing.",
      "{days}? I once went nine without water. Perspective, friend.",
      "Africa says hello. Africa also says the sun is better over here.",
      "You've a lilo, I've a hump. We are each, in our way, prepared."
    ],
    pokes: ["Hmph.", "Don't.", "I spit, you know."]
  },

  "The Stork": {                    /* Faro. Only speaks once you have landed. */
    lines: [
      "I nest on the old walls at Faro. {days} and I'll shuffle up for you.",
      "Algarve comes from al-Gharb - Arabic for 'the west'. You're off to Over There.",
      "I fly this route twice a year. Honestly? The lilo looks more fun.",
      "{percent}% done. From up here it looks like almost nothing. Keep going.",
      "Cabo da Roca, up the coast, is the westernmost point of mainland Europe. I've nested there too."
    ],
    pokes: ["*clatters beak*", "This is my wall.", "Mind the nest."]
  }
};
