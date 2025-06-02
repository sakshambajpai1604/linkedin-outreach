# LinkedIn Outreach Campaign App

This full-stack project allows users to manage LinkedIn outreach campaigns and generate personalized messages using AI.

## 🌟 Features

- **Frontend:** React + TypeScript + Tailwind CSS (via Vite)
- **Backend:** Node.js + Express + TypeScript + MongoDB
- **AI Integration:** Uses OpenAI API for generating LinkedIn outreach messages
- **Optional Scraper:** Puppeteer-based tool to extract LinkedIn profiles (for educational/testing purposes)

---

## 📁 Project Structure

```
linkedin-outreach/
├── backend/         # Express.js backend with MongoDB
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── index.ts
│   └── package.json
│
├── frontend/        # React + TypeScript + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   └── package.json
│
└── scraper/ (optional) # Puppeteer-based LinkedIn scraper
    └── linkedinScraper.ts
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sakshambajpai1604/linkedin-outreach.git
cd linkedin-outreach
```

### 2. Backend Setup (Node.js + Express)

```bash
cd backend
npm install
cp .env.example .env   # Add your MongoDB URI and OpenAI API key
```

Edit your `.env` file:

```
MONGODB_URI=mongodb://localhost:27017/linkedin-outreach
OPENAI_API_KEY=your-api-key
PORT=5000
```

Start the server:

```bash
npm run dev
```

### 3. Frontend Setup (React + TS + Tailwind)

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run at [http://localhost:5173](http://localhost:5173) and connect to backend on port 5000.

---

## 🧠 Features

### ✅ Campaign Management

- List, create, update, and soft-delete outreach campaigns
- Toggle ACTIVE/INACTIVE status
- Store leads (LinkedIn profile URLs) and account IDs

### ✨ AI Message Generation

- Input: Name, Job Title, Company, Location, Summary
- Output: Personalized message using OpenAI API

### 🧪 Optional: LinkedIn Profile Scraper (For Testing Only)

> ⚠️ Use responsibly. Scraping LinkedIn violates their TOS.

Run the scraper:

```bash
cd scraper
npm install
npx ts-node linkedinScraper.ts
```

---

## 🔧 Deployment

- **Frontend:** Vercel / Netlify
- **Backend:** Render / Railway / Cyclic

Ensure correct CORS settings and environment variables for production.

---

## 📄 API Endpoints

### Campaign Routes

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | /campaigns       | List all non-deleted campaigns |
| GET    | /campaigns/:id   | Get campaign by ID         |
| POST   | /campaigns       | Create a campaign          |
| PUT    | /campaigns/:id   | Update campaign details    |
| DELETE | /campaigns/:id   | Soft-delete a campaign     |

### Message Generator

| Method | Endpoint                | Description                  |
|--------|-------------------------|------------------------------|
| POST   | /personalized-message   | Generate outreach message    |

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, TypeScript
- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **AI API:** OpenAI
- **Scraping (optional):** Puppeteer

---

## 🙏 Acknowledgements

- OpenAI for GPT API
- Vite + Tailwind for fast frontend dev
- OutFlo for the original idea and prompt

---

## 📜 License

This project is licensed for educational and personal use only. Redistribution or scraping real user data without permission may violate legal terms.
