import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const API_KEY = process.env.VITE_NEWS_API_KEY || process.env.NEWS_API_KEY;

    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`);
        const data = await response.json();

        res.status(response.status).json(data);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

        res.status(500).json({
            message: "Proxy error",
            error: errorMessage
        });
    }
}