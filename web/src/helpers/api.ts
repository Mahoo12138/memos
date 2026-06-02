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

// Backend-served path prefixes that must be rewritten to apiBaseUrl when the
// frontend is deployed cross-origin. Static SPA assets like /logo.webp are
// intentionally excluded — those are bundled with the frontend.
const BACKEND_PATH_PREFIXES = ["/file/", "/api/"];

// Rewrites a backend-relative URL to absolute against apiBaseUrl when needed.
// No-ops for absolute URLs, data:/blob: URIs, and frontend-bundled paths.
export const withApiBase = (url: string | undefined | null): string => {
  if (!url) return url ?? "";
  if (!isCrossOriginApi) return url;
  if (!BACKEND_PATH_PREFIXES.some((prefix) => url.startsWith(prefix))) return url;
  return `${apiBaseUrl}${url}`;
};
