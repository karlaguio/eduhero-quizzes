# EduHero Quizzes 🎓🌟

An interactive, mobile-friendly web platform designed to make STEM and English learning fun and accessible for children in rural communities. Built with React and Tailwind CSS, this app features topic-based quizzes with immediate feedback, gamified scoring, and a focus on simplicity.

---

## 🚀 Features

- 🌐 **Multi-topic Quiz Platform** – Choose from Math, Science, or English
- 🎯 **Instant Feedback** – Answer and see your progress in real time
- 📊 **Score Summary** – View results at the end of each quiz
- 🎨 **Responsive UI** – Built with Tailwind CSS for a clean, mobile-friendly experience
- 🧠 **Data-Driven** – Quiz questions loaded from easy-to-edit JSON

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router DOM
- **Styling:** Tailwind CSS
- **Data Handling:** JSON-based question bank

---

## 📁 Project Structure

```
src/
├── App.jsx
├── data/
│   └── questions.json       # Quiz content by topic
├── pages/
│   ├── Home.jsx             # Topic selector
│   ├── Quiz.jsx             # Quiz logic and interface
│   └── Result.jsx           # Score summary and restart link
```

---

## 🧪 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/eduhero-quizzes.git
   cd eduhero-quizzes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

> This project was bootstrapped with [Vite](https://vitejs.dev/) for fast performance.

---

## 💡 Future Improvements

- 🌍 Add multi-language support (Spanish/English)
- 📦 Connect to Firebase for storing high scores
- ✏️ Admin mode to upload custom questions
- 🎖️ Add achievements and levels for users

---

## 🧑‍🏫 About the Author

Karla Guio is a passionate educator and developer working at the intersection of computational science and education equity. She founded *Edu-Heroes* to bring quality STEM and English education to rural students in Colombia and beyond.

---

## 📜 License

MIT License. Feel free to use and adapt for educational purposes!
