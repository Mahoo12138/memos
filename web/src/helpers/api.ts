// Base URL for backend endpoints (Connect RPC, file server, SSE).
//
// - Default (empty): uses `window.location.origin`. Works for the bundled
//   release build (server serves the SPA) and `pnpm dev` (Vite proxies
//   /api, /memos.api.v1, /file, /api/v1/sse to the backend).
// - Standalone frontend deployment calling a cross-origin backend: set
//   `VITE_API_BASE_URL` at build time (e.g. https://api.example.com). The
//   backend must allow the frontend origin via CORS and credentials.
const rawApiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "").trim();
export const apiBaseUrl: string = rawApiBaseUrl ? rawApiBaseUrl.replace(/\/+$/, "") : window.location.origin;

export const isCrossOriginApi: boolean = apiBaseUrl !== window.location.origin;
