# Quizzical 🧠

**Quizzical** is a dynamic trivia application built with **React**. It challenges users with a variety of questions fetched from the Open Trivia Database API, testing their knowledge across multiple categories.

## Features

- Dynamic Data: Questions are fetched in real-time from the Open Trivia Database (OTDB).

- Score Tracking: Automatically calculates and displays the user's score upon completion.

- Interactive UI: Visual feedback for selected, correct, and incorrect answers.

- Replayability: Ability to start a new game and fetch fresh questions without refreshing the page.

- Responsive Design: Fully functional on mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Frontend**: React (Hooks: `useState`, `useEffect`, `nanoid`)

- **Styling**: CSS3 (Flexbox)

- **API**: [Open Trivia Database](https://opentdb.com/api_config.php)

- **Bundler**: Vite (or Create React App)

### 📦 Installation & Setup

To run Quizzical locally, follow these steps:

1. **Clone the repository:**

```Bash
git clone https://github.com/your-username/quizzical.git
```

2. **Navigate into the directory:**

```Bash
cd quizzical
```

3. Install dependencies:

```Bash
npm install
```

4. Start the development server:

```Bash
npm run dev
```

### 💡 Lessons Learned

Building this project helped me solidify my understanding of:

- **Asynchronous JavaScript:** Managing fetch requests and handling the delay between API calls and component rendering.

- **State Lifting:** Managing state across parent and child components to ensure the UI reflects the current game phase.

- **Conditional Rendering:** Using logical operators and ternary expressions to toggle between the "Start" screen and the "Quiz" screen.

- **Array Manipulation:** Mapping through nested data structures to render choices and check for correctness.

### 🖼️ Screenshots

Tip: Add a screenshot or a GIF of your app here to make the README pop! ![App Preview](./src/assets/preview.png)

### 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.
