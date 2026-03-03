import type { VercelRequest, VercelResponse } from '@vercel/node';
import { proxyNewsApiRequest } from './_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const searchParams = req.url ? req.url.split('?')[1] || '' : '';
    
    return proxyNewsApiRequest(req, res, `everything?${searchParams}`);
}