# SEO esistente — Centro Odontoiatrico BioDent

Estratto da `../biodent` **dopo il `git pull`** (commit `219e9f9`). La SEO è stata significativamente potenziata rispetto alla versione precedente: ora c'è JSON-LD strutturato con `@graph`, coordinate geografiche, orari, sitemap, robots.txt e **meta tag dinamici per ogni pagina** (hook `usePageMeta`).

---

## Meta tag globali (`index.html`)

| Tag | Valore |
|---|---|
| `lang` (html) | `it` |
| `<title>` (default/home) | `BioDent — Dentista a Sturno, Salerno e Napoli` |
| `meta[name=description]` | `Centro Odontoiatrico BioDent della Dr.ssa Azzurra Di Cecilia. Odontoiatria pediatrica, ortodonzia, implantologia. Sedi a Sturno, Salerno e Napoli.` |
| `og:title` | `BioDent — Dentista a Sturno, Salerno e Napoli` |
| `og:description` | (uguale a description) |
| `og:type` | `website` |
| `og:url` | `https://centrobiodent.net` |
| `link[rel=canonical]` | `https://centrobiodent.net/` |

> ⚠️ Ancora mancanti: `og:image`, `og:locale`, Twitter Card (`twitter:*`), `robots`, `theme-color`. Da aggiungere in Astro.

### Font / risorse
- Preconnect: `fonts.googleapis.com`, `fonts.gstatic.com`
- Google Fonts: **Bricolage Grotesque**, **Manrope**, **Instrument Serif**, **JetBrains Mono**
- CSS locale: `styles.css`

---

## Meta tag PER PAGINA (hook `usePageMeta` in `components.jsx`)

Ogni pagina imposta dinamicamente `title`, `description`, `og:*` e `canonical`. In Astro vanno resi statici per pagina.

| Pagina | `<title>` | `meta description` | canonical |
|---|---|---|---|
| Home (`/`) | BioDent — Dentista a Sturno, Salerno e Napoli | Centro Odontoiatrico BioDent della Dr.ssa Azzurra Di Cecilia. Odontoiatria pediatrica, ortodonzia, implantologia. Sedi a Sturno, Salerno e Napoli. | `/` |
| Chi siamo (`/chi-siamo`) | Chi Siamo — Centro Odontoiatrico BioDent | Scopri il team di BioDent: oltre 40 anni di esperienza in odontoiatria, un approccio empatico e tecnologie all'avanguardia per tutta la famiglia. | `/chi-siamo` |
| Pediatrica (`/odontoiatria-pediatrica`) | Dentista Pediatrico a Sturno, Salerno, Napoli — BioDent | BioDent è partner del network Dentista dei Bambini. Odontoiatria infantile con sedazione cosciente, ozonoterapia e metodo Tell·Show·Do. | `/odontoiatria-pediatrica` |
| Ortodonzia (`/ortodonzia`) | Ortodonzia e Allineatori Trasparenti — BioDent | Ortodonzia intercettiva, fissa e allineatori trasparenti a Sturno, Salerno e Napoli. Sorriso dritto a ogni età con i nostri specialisti. | `/ortodonzia` |
| Odontoiatria (`/odontoiatria`) | Odontoiatria e Implantologia — BioDent | Cure dentali complete per adulti: implantologia, faccette dentali, otturazioni e igiene orale. Tre sedi in Campania. | `/odontoiatria` |
| Medicina estetica (`/medicina-estetica`) | Medicina Estetica Filler — BioDent | Filler labbra, biorivitalizzazione e trattamenti antiage a Sturno, Salerno e Napoli. Valorizza la tua bellezza naturale con BioDent. | `/medicina-estetica` |
| Tecnologie (`/tecnologie`) | Tecnologie Dentali Avanzate — BioDent | Scanner intraorale 3D, TC Cone Beam, laser a diodo, sedazione cosciente e chirurgia guidata. Tecnologie di punta nei nostri studi dentistici. | `/tecnologie` |
| Contatti (`/contatti`) | Contatti — BioDent Sturno, Salerno, Napoli | Prenota una visita al Centro Odontoiatrico BioDent. Tre sedi: Sturno (AV), Salerno e Napoli. Contatti, orari e come raggiungerci. | `/contatti` |

---

## JSON-LD (`application/ld+json`) — NUOVA versione `@graph`

Ora una `MedicalOrganization` con tre nodi `Dentist` (uno per sede) collegati via `parentOrganization`. **Include coordinate, CAP e orari** (prima assenti). Riprodotto integralmente:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://centrobiodent.net/#organization",
      "name": "Centro Odontoiatrico BioDent",
      "url": "https://centrobiodent.net",
      "logo": "https://centrobiodent.net/img/logo-3.webp",
      "email": "bcomebiodent@virgilio.it",
      "medicalSpecialty": ["Dentist", "Orthodontics", "Pediatric Dentistry"],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100031641229924",
        "https://www.instagram.com/biodentcentroodontoiatrico"
      ]
    },
    {
      "@type": "Dentist",
      "@id": "https://centrobiodent.net/#sturno",
      "name": "BioDent — Studio Dentistico Sturno",
      "parentOrganization": { "@id": "https://centrobiodent.net/#organization" },
      "url": "https://centrobiodent.net/contatti",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Roma, 11",
        "addressLocality": "Sturno",
        "addressRegion": "AV",
        "postalCode": "83055",
        "addressCountry": "IT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 41.0103, "longitude": 15.1074 },
      "telephone": "+390825448151",
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "13:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "15:00", "closes": "19:00" }
      ]
    },
    {
      "@type": "Dentist",
      "@id": "https://centrobiodent.net/#napoli",
      "name": "BioDent — Studio Dentistico Napoli",
      "parentOrganization": { "@id": "https://centrobiodent.net/#organization" },
      "url": "https://centrobiodent.net/contatti",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Corso Secondigliano, 398",
        "addressLocality": "Napoli",
        "postalCode": "80144",
        "addressCountry": "IT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 40.9044, "longitude": 14.2497 },
      "telephone": "+393394646639"
    },
    {
      "@type": "Dentist",
      "@id": "https://centrobiodent.net/#salerno",
      "name": "BioDent — Studio Dentistico Salerno",
      "parentOrganization": { "@id": "https://centrobiodent.net/#organization" },
      "url": "https://centrobiodent.net/contatti",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Santa Margherita, 36/H",
        "addressLocality": "Salerno",
        "postalCode": "84121",
        "addressCountry": "IT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 40.6824, "longitude": 14.7681 },
      "telephone": "+393926645745"
    }
  ]
}
```

### Dati nuovi ora disponibili (prima mancanti)
- **Coordinate GPS** di tutte e tre le sedi (vedi tabella sotto) — ora anche in `biodent-content.json`.
- **CAP completi**: Sturno **83055**, Napoli **80144**, Salerno **84121** — ora anche in `biodent-content.json`.
- **Orari** Sturno modellati come `openingHoursSpecification` (09:00–13:00 / 15:00–19:00, lun–ven).
- **Logo** ufficiale: `/img/logo-3.webp`.
- `medicalSpecialty` ora `["Dentist", "Orthodontics", "Pediatric Dentistry"]`.

| Sede | Lat | Lng | CAP | Telefono (E.164) |
|---|---|---|---|---|
| Sturno | 41.0103 | 15.1074 | 83055 | +390825448151 |
| Napoli | 40.9044 | 14.2497 | 80144 | +393394646639 |
| Salerno | 40.6824 | 14.7681 | 84121 | +393926645745 |

### ⚠️ Discrepanze / lacune ancora aperte nel JSON-LD
- **Orari Napoli e Salerno** NON hanno `openingHoursSpecification` (solo Sturno). Da completare con i dati già in `data.jsx`.
- **`sameAs` social DISALLINEATI**: il JSON-LD usa ancora gli URL *vecchi* (`facebook.com/profile.php?id=100031641229924`, `instagram.com/biodentcentroodontoiatrico`), mentre la UI (TopBar/Footer in `components.jsx`) usa URL *nuovi*:
  - Instagram → `https://www.instagram.com/biodent.centro.odontoiatrico/`
  - Facebook → `https://www.facebook.com/centroodontoiatricobiodent/`
  - **Da decidere quali sono quelli corretti e uniformare.** Entrambe le varianti sono salvate in `biodent-content.json > social`.
- Manca `image`, `priceRange`, `aggregateRating`/`review` (le 3 recensioni esistono in `data.jsx` ma non sono in JSON-LD).
- Orario Sturno nel JSON-LD (15:00–19:00) differisce leggermente dalla stringa in `data.jsx` (14:30–18:30) — **da verificare quale è corretto**.

---

## File infrastruttura SEO / hosting (nuovi, da `git pull`)

### `robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://centrobiodent.net/sitemap.xml
```

### `sitemap.xml`
8 URL con priorità: `/` (1.0), `/odontoiatria-pediatrica` (0.9), `/ortodonzia` (0.9), `/odontoiatria` (0.8), `/medicina-estetica` (0.8), `/tecnologie` (0.7), `/chi-siamo` (0.7), `/contatti` (0.8). `changefreq: monthly`.
> In Astro: generabile automaticamente con `@astrojs/sitemap`.

### Rewrite SPA (non più necessari con Astro multi-pagina)
- `_redirects` (Netlify): `/* /index.html 200`
- `.htaccess` (Apache): rewrite a `index.html` per file inesistenti
- `serve.json`: rewrite `**` → `/index.html`
- `404.html`: trucco redirect SPA per GitHub Pages (salva path in `sessionStorage`)
> Questi servivano perché il vecchio sito è una SPA con routing client-side (ora path-based via History API). Con Astro che genera pagine statiche reali, **diventano superflui** (Astro produce una vera `404.html` e ogni rotta è un file).

---

## Dati di contatto consolidati (per schema/footer)

- **Telefono principale:** 0825 448151 (Sturno) — E.164 `+390825448151`
- **Email:** bcomebiodent@virgilio.it
- **WhatsApp:** +39 347 888 5433 → `https://wa.me/393478885433` (in alcuni punti con messaggio precompilato: "Salve, vorrei prenotare una visita al Centro Odontoiatrico BioDent.")
- **Sito:** https://centrobiodent.net
- **Logo:** /img/logo-3.webp
- **Social (UI attuale):** IG `instagram.com/biodent.centro.odontoiatrico/` · FB `facebook.com/centroodontoiatricobiodent/`
- **Dati legali (footer):** BioDent S.r.l. — P.IVA 02517430647 — Iscrizione albo AV n. 315 — Direttore Sanitario: Dr.ssa Azzurra Di Cecilia
