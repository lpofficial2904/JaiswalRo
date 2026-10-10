# Backend setup

Contact, product, and service forms call the standalone API in the repository's
`backend` folder. The backend sends booking emails through SMTP and WhatsApp
messages through Meta's WhatsApp Cloud API. Credentials stay in the backend
environment and must never be placed in frontend variables or committed.

## Local development

1. In `Frontend`, run `npm install` once, then `npm run dev`.
2. Open the Vite URL (default `http://localhost:5173`). Website forms and the
   API warm-up request use the live Render backend by default.
3. To develop the API locally, run `npm install` in `backend`, copy
   `.env.example` to `.env`, configure credentials, and run `npm run dev`.
   Then set `VITE_API_BASE_URL=http://localhost:3001` in `Frontend/.env`.

The backend exposes `GET /health` and `/api/health`, `POST /api/forms/email`,
and `POST /api/forms/whatsapp`.

## Email on Render

Render Free blocks outbound SMTP ports. Use Resend's HTTPS API instead: verify
your sending domain with Resend, then set `RESEND_API_KEY`, `MAIL_FROM` (an
address on that verified domain), and `MAIL_TO` in the Render backend
environment settings. Redeploy the backend after adding the values. Never put
the Resend API key in the frontend or in a committed `.env` file.

## Meta WhatsApp configuration

1. Create/select a Meta Developer app and add the **WhatsApp** product.
2. In WhatsApp API Setup, copy the **Phone number ID** (not the visible phone
   number). In development mode, add the receiving number as a permitted
   recipient.
3. For production, create a permanent System User access token with
   `whatsapp_business_messaging` permission. Temporary tokens expire.
4. Ensure the receiving number has opted in. Free-form text messages are only
   accepted within an open 24-hour customer-service conversation; outside that
   window Meta requires an approved message template.

## Deployment

Deploy `Frontend` as the Netlify static site and `backend` as a Node.js service
(Node.js 20.6 or newer). The frontend calls
`https://api.jaiswalro.services` directly. Configure the backend
variables from `backend/.env.example` in the backend host, including
`CORS_ORIGINS` for every frontend origin. The server also allows localhost and
the Jaiswalro production domains by default. Use `VITE_API_BASE_URL` only to
override the public backend URL; it must not contain secrets.

Never commit a real `.env` file or put SMTP/Meta secrets in variables prefixed
with `VITE_`.
