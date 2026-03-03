import type { VercelRequest, VercelResponse } from '@vercel/node';

export async function proxyNewsApiRequest(
    req: VercelRequest,
    res: VercelResponse,
    endpoint: string
) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Api-Key');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

    const API_KEY = process.env.NEWS_API_KEY || process.env.VITE_NEWS_API_KEY;
    const BASE_API_URL = process.env.NEWS_API_URL || process.env.VITE_NEWS_API_URL || 'https://newsapi.org/v2/';
    
    if (!API_KEY) {
        console.error("CRITICAL: News API key is missing!");
        return res.status(500).json({ message: "Server error", error: "API Key missing" });
    }

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const url = `${BASE_API_URL}${endpoint}`;
        const response = await fetch(url, {
            headers: { 'X-Api-Key': API_KEY },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        const data = await response.json();
        return res.status(response.status).json(data);

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        console.error("Vercel Proxy Error:", errorMessage);

        return res.status(500).json({
            message: "Internal Proxy Error",
            error: errorMessage
        });
    }
}