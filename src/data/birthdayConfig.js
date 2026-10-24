/**
 * Personalisation Configuration for Birthday Surprise
 * Easily edit names, headings, and messages here.
 */

export const birthdayConfig = {
  // Recipient details
  name: "Bhai",
  relationship: "Brother & Best Friend",
  
  // Screen 1: The Gift
  screen1: {
    badge: "A GIFT FOR YOU",
    title: "Happy Birthday,",
    titleHighlight: "Bhai! ♡",
    subtitleLead: "for being so",
    subtitleAccent: "awesome",
    supportingText: "Someone made this little surprise just for you.",
    buttonText: "Open my gift",
  },

  // Screen 2: The Letter
  screen2: {
    title: "A letter for you",
    instruction: "Pull up to read",
    letterText: `Hey Bhai ❤️,

Happy Birthday!

Some people become more than just friends, and you're definitely one of them.

Life is better with a brother like you. Thank you for all the laughs, crazy conversations and unforgettable moments.

I hope this year brings you happiness, success, good health and everything you've been working towards.

No matter where life takes us, the bond stays the same.

Stay happy, stay crazy, and keep being the amazing person you are.

Happy Birthday once again, Bhai! ❤️`,
    signOff: "With all my love,",
    author: "Your Brother for Life ♾️",
  },

  // Screen 3: Photo Booth
  screen3: {
    topTag: "SAY CHEESE!",
    title: "Our Moments",
    instruction: "Tap the mint camera button to print our memories!",
    galleryTitle: "All Memories 📸",
  },

  // Screen 4: Candle Blowing
  screen4: {
    badge: "MAKE A WISH",
    title: "Blow out the candles",
    micButton: "Microphone",
    holdButton: "Hold",
    instruction: "Blow into your microphone or hold the button to blow out the candles.",
    successText: "Your wish is on its way! ❤️",
  },

  // Screen 5: Final Celebration
  screen5: {
    badge: "MAKE A WISH",
    title: "Happy Birthday!",
    subtitle: "With all my love",
    buttonText: "Watch Again",
  },

  // Background Audio (Optional local file path)
  audioPath: "/audio/birthday-music.mp3",
};
