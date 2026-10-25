# 🎂 Pastel 3D Animated Birthday Surprise for Bhai

A beautiful, interactive, and mobile-first birthday surprise website built with **React, Vite, Tailwind CSS, Framer Motion, and Canvas Confetti**. Featuring a rotating 3D birthday cake, an animated gift letter, a retro photo booth, interactive candle blowing, and a heartwarming final celebration.

🌐 **Live Demo:** [tarzan-birthday.vercel.app](https://tarzan-birthday.vercel.app/)

---

## ✨ Features

### 🎁 Screen 1 — The Gift

- Continuously rotating 3D birthday cake with two tiers.
- Strawberry icing, decorative macarons, strawberries, and five lit candles.
- Flickering candle flames and floating decorative hearts.
- Pastel confetti and sparkling visual effects.
- Animated **Open My Gift** button to start the birthday experience.

### 💌 Screen 2 — The Letter

- Animated pink envelope with a heart-shaped wax seal.
- 3D envelope opening and folding interactions.
- Heartfelt birthday letter dedicated to Bhai.
- Interactive letter presentation with smooth transitions.

### 📸 Screen 3 — Our Moments

- Retro-inspired lavender photo booth with decorative lights.
- Animated mint-colored camera with flash effects.
- Six personal photos displayed as printed photo memories.
- Full-screen photo viewing experience.
- Animated Polaroid gallery to explore all six memories.

### 🎂 Screen 4 — Make a Wish

- Birthday cake with five glowing candles.
- Optional microphone interaction using the Web Audio API.
- Hold-to-blow interaction with a two-second progress indicator.
- Animated candle flames that bend and extinguish.
- Rising smoke effects and a celebratory confetti burst.

### 🎉 Screen 5 — The Final Celebration

- Animated birthday cake and celebratory messages.
- Colorful confetti shower and floating party decorations.
- Heartwarming final birthday greeting.
- **Watch Again** button to replay the complete experience without reloading the page.

---

## 🎨 Design Highlights

- Pastel cream, blush pink, lavender, and raspberry color palette.
- Elegant typography and soft visual details.
- Smooth animations and interactive transitions.
- Mobile-first, responsive layout.
- A personalized digital birthday-card experience.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI development |
| Vite | Development server and build tooling |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and transitions |
| Canvas Confetti | Celebration and confetti effects |
| Web Audio API | Microphone audio analysis |
| JavaScript | Interactive functionality |
| Vercel | Website deployment |

---

## 📂 Project Structure

```text
Tarzan-Birthday/
├── public/
│   └── images/
│       ├── photo1.jpg
│       ├── photo2.jpg
│       ├── photo3.jpg
│       ├── photo4.jpg
│       ├── photo5.jpg
│       └── photo6.jpg
├── src/
│   ├── data/
│   │   ├── birthdayConfig.js
│   │   └── photos.js
│   ├── components/
│   └── ...
├── package.json
├── index.html
└── README.md
```

*The structure above highlights the main customization files and photo assets. Other folders and components may vary depending on the implementation.*

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed.
- Git installed.
- A code editor such as VS Code.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/tarzan-birthday.git
```

### 2. Navigate to the project directory

```bash
cd tarzan-birthday
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 📸 Personalize the Birthday Experience

### Replace the Photos

Add six personal photos to the following directory using the expected filenames:

```text
public/images/photo1.jpg
public/images/photo2.jpg
public/images/photo3.jpg
public/images/photo4.jpg
public/images/photo5.jpg
public/images/photo6.jpg
```

Keep the filenames and extensions consistent with the image paths used by the application.

### Customize Birthday Text

Edit:

```text
src/data/birthdayConfig.js
```

Use this configuration file to update the recipient's name, headings, subtitles, birthday letter, sign-off, and button labels, according to the available configuration fields.

### Customize Photo Captions

Edit:

```text
src/data/photos.js
```

Update photo captions, dates, and other supported photo metadata.

---

## 🎤 Microphone Interaction

The candle-blowing experience can use the browser's Web Audio API to analyze microphone input.

- Microphone access requires user permission.
- Browser and device compatibility may vary.
- Secure contexts such as HTTPS are generally required for microphone access.
- The hold-to-blow interaction provides an alternative when microphone access is unavailable or not preferred.

---

## 🌍 Live Deployment

The project is deployed on Vercel.

**Visit the website:** https://tarzan-birthday.vercel.app/

To deploy your own version, import the GitHub repository into Vercel and configure the appropriate framework preset, build command, and output directory.

---

## 🎯 Project Goals

This project explores how frontend technologies can be used to create an engaging and personalized digital celebration.

### Skills Demonstrated

- React component-based development.
- Responsive and mobile-first UI design.
- Interactive animations and transitions.
- Event handling and multi-screen experiences.
- Browser audio APIs.
- Photo gallery interactions.
- Confetti effects and visual feedback.
- Git, GitHub, and Vercel deployment.

---

## 👨‍💻 Developer

**Samir Khan**

B.Tech — Computer Science & Engineering

- **GitHub:** [samirkhan41](https://github.com/samirkhan41)
- **Portfolio:** [samirk.site](https://samirk.site)
- **Live Project:** [Tarzan Birthday](https://tarzan-birthday.vercel.app/)

---

## 📄 License

This project is a personal birthday surprise website. Add a `LICENSE` file if you intend to distribute the source code under a specific open-source license.

---

Made with ❤️, animations, and birthday magic.
