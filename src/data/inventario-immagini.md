# Inventario immagini — Centro Odontoiatrico BioDent

Copiate da `../biodent/img/` → `public/img/` (**47 file totali** dopo il `git pull`: +`logo-3.webp`).
Per ogni file: nome, soggetto presunto, chiave usata in `data.jsx` (`photos.*`) e dove/come è associata nel codice vecchio.

> Convenzione percorsi: nel vecchio codice erano `./img/...`; in Astro sono serviti da `/img/...`.
> Aggiornamento post-`git pull` (commit `219e9f9`): 8 ritratti staff sono stati ri-esportati (stessi nomi file, dimensione maggiore), aggiunto il logo, e gli **alt text** delle immagini editoriali sono ora descrittivi/ottimizzati per la SEO (vedi sezione finale).

---

## 0. Logo / Brand (NUOVO)

| File | Soggetto | Dove è usata |
|---|---|---|
| `logo-3.webp` | Logo BioDent | `Brand` (TopBar) e `Footer` — sostituisce il vecchio wordmark testuale "biodent."; usato anche come `logo` nel JSON-LD. Alt: "BioDent Centro Odontoiatrico" |

---

## 1. Staff (19 foto ritratto)

Associate uno-a-uno ai membri in `staff` (`data.jsx`), mostrate nella griglia staff di **Chi siamo**.

| File | Persona | Ruolo | Chiave `photos` |
|---|---|---|---|
| `Dr.ssa-Azzurra-Di-Cecilia.jpg` | Dr.ssa Azzurra Di Cecilia (titolare / Direttore Sanitario, `lead`) | Odontoiatra · Ortodontista | `staffAzzurra` |
| `maurizio-nocera-1.webp` | Dr. Maurizio Nocera | Implantologia · Protesi | `staffNocera` |
| `Dr.ssa-Felicia-De-Jesus.jpg` | Dr.ssa Felicia De Jesus | Pedodonzia | `staffFelicia` |
| `felice-di-cecilia-1.webp` | Dr. Felice Di Cecilia | Igienista | `staffFelice` |
| `biodent-francesco-spera.webp` | Dr. Francesco Spera | Conservativa | `staffSpera` |
| `roberto-stradi-ortodonzia.png` | Dr. Roberto Stradi | Ortodonzia | `staffStradi` |
| `Dr-R.B-Canciello-Igienista-dentale.jpg` | Dr.ssa R.B. Canciello | Igienista · Pediatrica | `staffCanciello` |
| `Dr-Sara-Castaldi-Ortodonzia.jpg` | Dr.ssa Sara Castaldi | Ortodonzia | `staffCastaldi` |
| `Maddalena-del-prete-Ortodonzia.jpg` | Dr.ssa Maddalena del Prete | Ortodonzia | `staffPrete` |
| `Dr.-Enrico-Formato.jpg` | Dr. Enrico Formato | Endodonzia | `staffFormato` |
| `Dr.ssa-Maria-Luisa-Di-Cicilia.jpg` | Dr.ssa Maria Luisa Di Cecilia | Medicina Estetica · Senologia | `staffMariaLuisa` |
| `Dr-Gennaro-de-Marco.jpg` | Dr. Gennaro de Marco | Chirurgia orale | `staffDeMarco` |
| `Dr-Antonio-Fusco.jpg` | Dr. Antonio Fusco | Chirurgia orale | `staffFusco` |
| `Angela-Capobianco.png` | Angela Capobianco | ASO | `staffCapobianco` |
| `Veronica-Pinto.png` | Veronica Pinto | ASO | `staffPinto` |
| `Romina-Spagnuolo.png` | Romina Spagnuolo | ASO | `staffSpagnuolo` |
| `Serena-Cappuccio-Aso.jpg` | Serena Cappuccio | ASO | `staffCappuccio` |
| `Alessia-Caporale.png` | Alessia Caporale | Segreteria | `staffCaporale` |
| `Francesco-Iadicicco.png` | Francesca Iadicicco (file nominato "Francesco") | Segreteria | `staffIadicicco` |

> ⚠️ Nota dato: il membro è "Francesca Iadicicco" ma il file è `Francesco-Iadicicco.png` (probabile refuso nel nome file originale). Il nome corretto resta quello in `staff`.

> ⚠️ Nota dato: il file è `Dr.ssa-Maria-Luisa-Di-Cicilia.jpg` (Di **Cicilia**) mentre il nome staff è "Di **Cecilia**". Mantenuto il filename originale, nome staff come da dato.

---

## 2. Servizi (card Home → sezione Servizi)

Associate alle 4 card in `services` (`data.jsx`).

| File | Soggetto presunto | Servizio | Chiave `photos` |
|---|---|---|---|
| `biodent-home-17.webp` | Studio / cure odontoiatriche generali | Odontoiatria Generale (`/odontoiatria`) | `serviceOdo` |
| `biodent-home-5.webp` | Cure pediatriche / bambino | Odontoiatria Pediatrica (`/odontoiatria-pediatrica`) | `servicePedo` |
| `biodent-home-23.webp` | Ortodonzia | Specialisti in Ortodonzia (`/ortodonzia`) | `serviceOrto` |
| `biodent-home-24.webp` | Trattamento estetico / viso | Medicina Estetica (`/medicina-estetica`) | `serviceEst` |

---

## 3. Home — sezioni editoriali (split / badge)

| File | Soggetto presunto | Dove è usata | Chiave `photos` |
|---|---|---|---|
| `biodent-home-8.webp` | Interno studio Biodent | Home, sezione "Odontoiatria infantile" (badge "Studio Biodent") + poster del video hero | `studio1` |
| `biodent-home-9.webp` | Interno studio Biodent | Home, sezione "BioDent + Dentista dei Bambini" (badge "Dentista dei Bambini"); riusata in Odontoiatria adulti (badge "Igiene GBT") | `studio2` |
| `biodent-home-10.webp` | Interno studio Biodent | Home, sezione "Perché scegliere BioDent" (badge "Sedazione cosciente") | `studio3` |
| `biodent-home-25.webp` | Allineatori trasparenti | Home, sezione "Ortodonzia"; riusata in Ortodonzia (badge "Provider Invisalign") | `ortoTrasparenti` |
| `odontoiatria-12.webp` | Odontoiatria adulti / implantologia | Home, sezione "Odontoiatria dell'adulto"; riusata in Odontoiatria adulti (badge "Implantologia") | `odontoiatria` |
| `biodent-home-19.webp` | Medicina estetica / viso | Home, sezione "Medicina estetica"; riusata in Estetica | `estetica` |

---

## 4. Chi siamo

| File | Soggetto presunto | Dove è usata | Chiave `photos` |
|---|---|---|---|
| `biodent-home-22.webp` | Studio Biodent | Chi siamo, sezione "La storia" (badge "Studio Biodent") | `chiSiamoHero` |
| `chi-siamo-5.webp` | Area/spazio bambini | Chi siamo, sezione "Spazi" (badge "Area pediatrica") | `chiSiamo5` |
| `chi-siamo-4.webp` | Studio / spazi (presunto) | **Definita ma non usata** nelle pagine attuali | `chiSiamo4` |
| `chi-siamo-6.webp` | Studio / spazi (presunto) | **Definita ma non usata** nelle pagine attuali | `chiSiamo6` |

---

## 5. Odontoiatria Pediatrica

| File | Soggetto presunto | Dove è usata | Chiave `photos` |
|---|---|---|---|
| `biodent-home-16.webp` | Dentista con bambini | Definita come `dentistaBambini` — **non usata** direttamente nelle pagine attuali | `dentistaBambini` |
| `pedodonzia-2.webp` | Studio pediatrico | Pediatrica, blocco mascotte ("La prima visita") | `pedo2` |
| `pedodonzia-4.webp` | Studio pediatrico / riuniti colorati | Pediatrica, sezione "Spazi colorati" (badge "Riuniti a forma di drago") | `pedo4` |
| `luigino-full.png` | Mascotte "Luigino" | Definita come `mascot` — **non usata** direttamente (le forme mascotte sono CSS); asset disponibile | `mascot` |

---

## 6. Ortodonzia / Sedazione

| File | Soggetto presunto | Dove è usata | Chiave `photos` |
|---|---|---|---|
| `ortodonzia-6.webp` | Sedazione cosciente / mascherina | Pediatrica, sezione "Sedazione" (badge "N₂O"); Tecnologie T.01 "Sedazione cosciente" | `sedazione` |

---

## 7. Tecnologie (T.02–T.08)

Associate uno-a-uno alle voci `technologies` in `data.jsx` (T.01 usa `ortodonzia-6.webp` / `sedazione`).

| File | Tecnologia associata | Chiave `photos` |
|---|---|---|
| `tecnologie-2.webp` | T.02 — Laser odontoiatrico a diodo | `tec2` |
| `tecnologie-3.webp` | T.03 — Ozonoterapia | `tec3` |
| `tecnologie-4.webp` | T.04 — Scanner intraorale | `tec4` |
| `tecnologie-5.webp` | T.05 — Chirurgia guidata | `tec5` |
| `tecnologie-6.webp` | T.06 — TC Cone Beam 3D | `tec6` |
| `tecnologie-7.webp` | T.07 — Ortopantomografia digitale | `tec7` |
| `tecnologie-8.webp` | T.08 — Sbiancamento LED professionale | `tec8` |

---

## 8. Video

| File | Soggetto presunto | Dove è usata | Chiave `photos` |
|---|---|---|---|
| `Biodent-Video-Home.mp4` | Video di presentazione studio (≈8,6 MB) | Home, video di sfondo dell'hero (autoplay, muted, loop; poster = `studio1`) | `videoHome` |

---

## Alt text SEO (post-`git pull`)

Le immagini editoriali ora hanno alt descrittivi (prima erano generici tipo "Studio Biodent"). Da riusare in Astro:

| File / chiave | Alt text attuale |
|---|---|
| `biodent-home-8.webp` (`studio1`) | Studio dentistico BioDent — odontoiatria pediatrica Sturno Salerno Napoli |
| `biodent-home-9.webp` (`studio2`) | Collaborazione BioDent e Dentista dei Bambini — network nazionale pedodonzia / *(in Odontoiatria adulti)* Tecnica di igiene GBT Guided Biofilm Therapy — BioDent |
| `biodent-home-10.webp` (`studio3`) | Sala operatoria Studio BioDent — sedazione cosciente per bambini |
| `biodent-home-25.webp` (`ortoTrasparenti`) | Allineatori trasparenti ortodonzia — BioDent Napoli Salerno Sturno / *(in Ortodonzia)* Allineatori trasparenti Invisalign — BioDent provider certificato |
| `odontoiatria-12.webp` (`odontoiatria`) | Odontoiatria implantologia adulti — Studio BioDent / *(in Odontoiatria)* Implantologia e chirurgia orale avanzata — Studio BioDent |
| `biodent-home-19.webp` (`estetica`) | Filler labbra e medicina estetica — BioDent / *(in Estetica)* Trattamenti di medicina estetica filler labbra — BioDent |
| `biodent-home-22.webp` (`chiSiamoHero`) | Storico studio dentistico BioDent — tradizione familiare e innovazione |
| `chi-siamo-5.webp` (`chiSiamo5`) | Area pediatrica colorata Studio BioDent — spazio a misura di bambino |
| `pedodonzia-2.webp` (`pedo2`) | Bambino sorridente durante visita dentistica pediatrica BioDent |
| `pedodonzia-4.webp` (`pedo4`) | Riunito a forma di drago per bambini — Studio BioDent |
| `ortodonzia-6.webp` (`sedazione`) | Sedazione cosciente inalatoria per bambini — Studio BioDent |
| `biodent-home-5.webp` (`servicePedo`) | Odontoiatria pediatrica e cure per bambini — BioDent Napoli Salerno Sturno |
| `biodent-home-23.webp` (`serviceOrto`) | Ortodonzia intercettiva per bambini — BioDent |

> Le card servizi (Home) e le immagini tecnologie usano ancora `alt={s.title}` / `alt={t.t}` (= titolo del servizio/tecnologia). I ritratti staff usano `alt={s.name}`.

---

## Riepilogo associazioni

- **47 file** totali in `public/img/` (46 immagini + 1 video) — include `logo-3.webp`.
- **19** ritratti staff → tutti associati a un membro.
- **4** immagini servizi (card Home).
- **8** immagini tecnologie (T.01 condivide `ortodonzia-6.webp`).
- **Immagini definite in `photos` ma NON renderizzate** nelle pagine attuali: `chiSiamo4`, `chiSiamo6`, `dentistaBambini`, `mascot` (luigino) — asset disponibili per riuso.
- Nessuna immagine extra presente nella cartella oltre a quelle referenziate in `data.jsx`.
