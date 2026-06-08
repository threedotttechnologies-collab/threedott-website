# threedott-website

Marketing site for [threedott.com](https://threedott.com).

## Contact form API

The contact page posts to cropgen-server:

`POST {VITE_API_BASE_URL}/v1/api/common/threedot/contact-us`

### Local setup

1. Copy env example and point at your local server:

```bash
cp .env.example .env
```

2. Ensure `VITE_API_BASE_URL=http://localhost:7070` (or your cropgen-server URL).

3. On cropgen-server, set ThreeDott SES variables (see `cropgen-server/src/clients/README.md`):

- `SES_FROM_EMAIL_THREEDOTT`
- `SES_FROM_NAME_THREEDOTT`
- `SES_REPLY_TO_THREEDOTT`
- `CONTACT_RECIPIENT_THREEDOTT`

4. Run the website:

```bash
npm install
npm run dev
```

### Production

Build with the production API URL:

```bash
VITE_API_BASE_URL=https://server.cropgenapp.com npm run build
```
