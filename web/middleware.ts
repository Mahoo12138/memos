// middleware.ts
import { RequestContext, rewrite } from '@vercel/edge';

export const config = {
    matcher: '/(memos.api.v1.*)',
};

export default async function middleware(request: Request, context: RequestContext) {
    const apiHost = process.env.API_HOST || '100.121.38.1:5230';

    if (!apiHost) {
        return Response.error();
    }

    // Construct target URL
    const url = new URL(request.url);
    url.host = apiHost;
    url.protocol = 'http';
    console.log('url:', url.toJSON());
    return rewrite(url);
}