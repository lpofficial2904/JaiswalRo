# WhatsApp form setup

The Contact, Product and Service forms submit to the Netlify function at
`/.netlify/functions/send-whatsapp`. The function sends a separately labelled,
complete message through Meta's WhatsApp Cloud API. API credentials remain on
the server and are never included in the browser bundle.

## Meta configuration

1. Create/select a Meta Developer app and add the **WhatsApp** product.
2. In WhatsApp API Setup, copy the **Phone number ID** (not the visible phone
   number). Add the WhatsApp number that should receive enquiries as a permitted
   recipient while the app is in development mode.
3. For production, create a permanent System User access token with
   `whatsapp_business_messaging` permission. Temporary tokens expire.
4. Ensure the receiving number has opted in. A free-form text message is only
   accepted by WhatsApp inside an open 24-hour customer-service conversation;
   outside that window Meta requires an approved message template.

## Netlify environment variables

In **Site configuration > Environment variables**, add:

| Variable | Value |
| --- | --- |
| `WHATSAPP_ACCESS_TOKEN` | Permanent Meta access token |
| `WHATSAPP_PHONE_NUMBER_ID` | Sender phone-number ID from Meta |
| `WHATSAPP_TO_NUMBER` | Receiving number with country code, digits only, for example `919694727871` |
| `WHATSAPP_API_VERSION` | Optional Graph version; defaults to `v23.0` |

Redeploy the site after saving variables. Never add real tokens to `.env`,
`.env.example`, Git, or frontend variables prefixed with `VITE_`.

## Local test

Install Netlify CLI, copy `.env.example` to an ignored local `.env`, insert test
credentials, then run `netlify dev`. Plain `npm run dev` does not emulate the
serverless endpoint.

Submit one Contact, one Product, and one Service form. Confirm WhatsApp shows
the three headings `NEW CONTACT FORM`, `NEW PRODUCT BOOKING`, and
`NEW SERVICE BOOKING`, and verify every submitted field is present.
