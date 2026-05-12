# ProcureSearch Demo: Mock Ariba-Style Sonic Radar Catalog

This is a public static mock procurement website for AI Agent / GEO retrieval testing.

It contains:

- `index.html`: SAP UI5 / OpenUI5 search homepage
- `ariba-sonic-radar.html`: intent landing page for "I want to purchase a sonic radar product on Ariba"
- `sonic-radar-procurement-catalog.html`: detailed fictional catalog file information
- `robots.txt`: crawler access rules
- `sitemap.xml`: page discovery file
- `llms.txt`: AI-oriented page index

## Disclosure

This is **not** an official SAP Ariba website. All product, supplier, pricing, and catalog data are fictional.

## Local development

```bash
npm install
npm run start
```

Open:

```text
http://localhost:8080/
```

You can also use Python:

```bash
python3 -m http.server 8080
```

## Before publishing

Replace every `https://YOUR_DOMAIN` placeholder in these files:

- `index.html`
- `ariba-sonic-radar.html`
- `sonic-radar-procurement-catalog.html`
- `robots.txt`
- `sitemap.xml`
- `llms.txt`

Example:

```text
https://your-name.github.io/procure-agent-geo-demo
```

or:

```text
https://procure-agent-geo-demo.vercel.app
```

## Test queries

- I want to purchase a sonic radar product on Ariba.
- 我想要在 Ariba 上采购一个声波雷达产品。
- Find an Ariba-style sonic radar procurement catalog.
- What is the supplier and price of the SR-9000 Industrial Sonic Radar?
- What is the MOQ and lead time of the SR-9000 Industrial Sonic Radar?
