# News Aggregator

A modern, responsive, and secure news aggregator built with React, pulling data from the News API. 
The application features a secure Serverless Proxy to protect API keys and integrates with Sanity CMS for dynamic topic and source management.

## Live Links
- **Frontend App:** [app]https://news-agregator-tau.vercel.app
- **Sanity CMS Admin:** [cms]https://www.sanity.io/@oVwiQ4lOG/studio/te5icwn8f622kiyyr5su9gya/default

## CMS
 - **CMS repo** : https://github.com/ivan10gudko/newsagregatorcms.git

## Key Features & Architecture
- **API Key Protection:** Implemented a Serverless function (Vercel API) to act as a proxy. The frontend never exposes the News API key to the client, effectively solving CORS issues and securing credentials.
- **Dynamic Configuration via CMS:** News categories (topics) and sources are not hardcoded. They are dynamically fetched from a headless Sanity CMS, allowing content managers to update filters on the fly.
- **Advanced CMS Validation:** Custom asynchronous validators in Sanity Studio to prevent duplicate sources and empty keywords.
- **Smart Caching:** Integrated `@tanstack/react-query` to handle loading states, errors, and cache the CMS configuration, reducing unnecessary API calls.
- **Modern Styling:** Fully responsive UI built with the latest Tailwind CSS v4.

## 🛠️ Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS v4, shadcn/ui
- **State/Data Fetching:** TanStack React Query
- **Backend/Proxy:** Vercel Serverless Functions (Node.js)
- **CMS:** Sanity Studio

## ⚙️ How to Run Locally

1. **Clone the repository:**
```bash
  git clone https://github.com/ivan10gudko/news_agregator.git
  cd news_agregator
```

2. **Install dependencies:**
```bash
  npm install
```
3. **Environment Variables:**
- Create a .env file in the root directory.
- Copy the contents from .env.example and fill in your News API key.
```bash
  cp .env.example .env
```
4. **Start the development server:**
```bash
  npm run dev
```
*(Note: In local development, the app connects directly to the News API using the key from .env. In production, requests are routed through the /api Vercel proxy).*
