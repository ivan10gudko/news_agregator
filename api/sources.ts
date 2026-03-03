import type { VercelRequest, VercelResponse } from '@vercel/node';
import { proxyNewsApiRequest } from './_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    return proxyNewsApiRequest(req, res, 'top-headlines/sources');
}