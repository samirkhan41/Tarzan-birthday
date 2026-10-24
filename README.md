# 🎂 Pastel 3D Animated Birthday Surprise for Bhai

A production-ready, fully animated, mobile-first birthday surprise greeting experience built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Canvas Confetti**. Recreated to match the pastel cream, blush pink, lavender, and raspberry birthday card aesthetic.

---

## ✨ The 5 Interactive Screens

1. **🎁 Screen 1: The Gift**
   - Continuously rotating 3D birthday cake with two tiers, dripping strawberry icing, macarons, strawberries, and five lit candles with flickering warm flames.
   - Elegant dark plum serif heading: *"Happy Birthday, Bhai! ♡"*.
   - Handwritten subtitle: *"for being so awesome"*.
   - Gently falling pastel confetti, floating doodle hearts, and twinkling sparkles.
   - Large raspberry-pink *"Open my gift"* button with breathing glow that triggers confetti and transitions to Screen 2.

2. **💌 Screen 2: The Letter**
   - Physical 3D-folding pink envelope with heart wax seal.
   - Tap or swipe up to open: wax seal pops, flap folds backward in 3D, and the cream paper card slides upward into full view.
   - Heartfelt, brotherly birthday message with sign-off and close/fold-back interaction.

3. **📸 Screen 3: Our Moments (Retro Photo Booth)**
   - Retro lavender photo booth machine with pink marquee and blinking warm yellow bulbs.
   - Mint camera with lens animation and flash.
   - Machine shakes as each photo physically emerges from the dispenser slot.
   - Prints 6 personal photos sequentially (`photo1.jpg` to `photo6.jpg`).
   - Tap any printed photo to view full-screen lightbox.
   - *"See All Memories"* reveals all 6 photos in an animated Polaroid gallery on the same screen.

4. **🎂 Screen 4: The Candles (Make a Wish)**
   - Large cake with five lit candles.
   - **Microphone Option**: Web Audio API local audio analysis detecting breath noise to blow out candles.
   - **Hold Option**: Press & hold for 2 seconds with animated progress indicator; flames bend under wind and extinguish sequentially one by one!
   - Smoke curls upward, confetti bursts, and *"Your wish is on its way! ❤️"* appears.

5. **🎉 Screen 5: The Wish (Celebration & Replay)**
   - Celebratory rotating cake with *"Happy Birthday!"* and *"With all my love"*.
   - Multi-color confetti shower and floating party tokens.
   - *"Watch Again"* button resets all 5 screens, relights the candles, and restarts from Screen 1 without reloading the browser.

---

## 📸 How to Replace the 6 Photos

Drop your 6 photos into the `public/images/` folder with these exact names:

```
public/images/photo1.jpg
public/images/photo2.jpg
public/images/photo3.jpg
public/images/photo4.jpg
public/images/photo5.jpg
public/images/photo6.jpg
```

To edit photo captions and dates, open `src/data/photos.js`.

---

## ✏️ How to Customise Text

Open `src/data/birthdayConfig.js` to customise:
- Recipient name (`Bhai` or any name)
- Headings and subtitles
- Letter content and sign-off
- Button labels

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
