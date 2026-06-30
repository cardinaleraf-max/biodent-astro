# Testi redazionali esistenti — Centro Odontoiatrico BioDent

Estratto integrale del testo redazionale presente nella vecchia React SPA (`../biodent/pages.jsx` e `../biodent/components.jsx`), organizzato per pagina e sezione. I dati strutturati ripetuti (staff, servizi, tecnologie, FAQ, recensioni, sedi) sono in `biodent-content.json`; qui si trova il testo "di pagina" (titoli, lead, paragrafi, claim).

> Nota: nei titoli originali le parole tra `<em>…</em>` sono evidenziate in corsivo/arancione; i `<br/>` sono interruzioni di riga volute nel layout.
>
> **Aggiornato dopo il `git pull` (commit `219e9f9`).** Il testo redazionale delle pagine è rimasto sostanzialmente invariato; le novità riguardano elementi globali e SEO (logo al posto del wordmark, social nel footer/menu, pulsante WhatsApp flottante, meta per-pagina, routing path-based). I dettagli SEO sono in `seo-esistente.md`.

---

## Elementi globali (presenti su tutte le pagine)

### TopBar / Header
- Brand: ora **logo immagine** (`/img/logo-3.webp`), non più il wordmark testuale "biodent."
- Telefono in evidenza: **0825 448151**
- CTA: **Prenota** → ora fa scroll al form di contatto (`gotoForm`), non naviga a una pagina
- Menu: Home · Chi siamo · Terapie (Odontoiatria Pediatrica, Ortodonzia, Odontoiatria) · Medicina estetica · Tecnologie · Contatti
- Menu mobile: in fondo riga **"Seguici"** con icone Instagram e Facebook

### Sticky CTA (banner flottante allo scroll)
- "Hai una **domanda**? Ti richiamiamo noi."
- CTA: **Prenota una visita** (ora fa scroll al form)
- Ora include un **pulsante di chiusura** (X) per nascondere il banner

### WhatsApp Float (NUOVO — pulsante flottante)
- Bottone circolare WhatsApp sempre visibile (desktop) / contestuale allo scroll (mobile)
- Link: `https://wa.me/393478885433` con messaggio precompilato "Salve, vorrei prenotare una visita al Centro Odontoiatrico BioDent."

### PageHead (intestazione pagine interne) — CTA comuni
- **Prenota una visita** (scroll al form)
- **WhatsApp** (con messaggio precompilato)
- Supporta ora una `heroImg` opzionale (non valorizzata in nessuna pagina attuale)

### Footer
- Brand: **logo immagine** (`/img/logo-3.webp`)
- Payoff: "Centro Odontoiatrico della Dr.ssa Azzurra Di Cecilia. Dentisti di famiglia a Sturno, Salerno e Napoli."
- **Riga social**: icone Instagram + Facebook (URL aggiornati — vedi `seo-esistente.md`)
- Colonna **Terapie**: Odontoiatria Pediatrica · Ortodonzia · Odontoiatria adulti · Medicina estetica · Tecnologie
- Colonna **Centro**: Chi siamo · Contatti · WhatsApp *(le voci Facebook/Instagram come link di lista sono state rimosse: ora sono le icone social in alto)*
- Colonna **Sedi**: Sturno — Via Roma, 11 · Napoli — Corso Secondigliano, 398 · Salerno — Via S. Margherita, 36/H · bcomebiodent@virgilio.it
- Riga legale: "© [anno] BioDent S.r.l. — P.IVA 02517430647 — Iscrizione albo AV n. 315"
- "Direttore Sanitario: Dr.ssa Azzurra Di Cecilia"
- Link: Privacy · Cookie · Polizza *(placeholder, non collegati)*

### Sezione "Sedi" (componente Locations, riusato su più pagine)
- Eyebrow: "Sedi"
- Titolo: "Scegli la sede più vicina a te."
- Testo: "Tre studi pensati per accogliere famiglie, con tecnologie identiche e un team coordinato dalla Dr.ssa Azzurra Di Cecilia. Stessa cura, ovunque tu sia."
- CTA per ogni sede: "Prenota a [città]"

### Form di contatto (componente ContactForm, riusato su più pagine)
- Eyebrow: "Contattaci"
- Titolo: "Parliamo del *sorriso* della tua famiglia."
- Testo: "Raccontaci cosa cerchi: una prima visita per tuo figlio, un consulto ortodontico o un trattamento estetico. Ti richiamiamo entro 24 ore lavorative."
- Canali: Sturno (0825 448151 · 347 888 5433) · Napoli (339 464 6639 · 081 341 4878) · Salerno (392 664 5745) · Email (bcomebiodent@virgilio.it) · WhatsApp (+39 347 888 5433)
- Campi form: Nome e cognome · Sede · Telefono · Email · Messaggio · consenso Privacy Policy
- Messaggio di successo: "Grazie, [nome]. La tua richiesta è arrivata alla sede di [sede]. Ti contattiamo entro 24 ore lavorative."

---

## PAGINA: Home (`HomePage`)

### Hero
- Kicker: "Dr.ssa Azzurra Di Cecilia"
- H1: "Centro Odontoiatrico *Biodent*"
- Sottotitolo: "Studi Dentistici a Sturno, Salerno e Napoli."
- CTA (WhatsApp): "Scopri di più"

### Marquee (banda scorrevole)
Pedodonzia · Ortodonzia invisibile · Implantologia · Sedazione cosciente · Ozonoterapia · Scanner 3D · Tell · Show · Do · Medicina estetica

### Sezione Servizi
- Eyebrow: "Le nostre terapie"
- Titolo: "Per la salute dentale di *genitori e figli*."
- Testo: "Dalla prima visita di un bambino di tre anni all'implantologia per un adulto: protocolli specializzati, tecnologie all'avanguardia e un approccio empatico costruito in 40 anni di pratica clinica."
- *(Card servizi: vedi `services` in biodent-content.json)*

### Sezione "Odontoiatria infantile" / Dentista dei Bambini
- Eyebrow: "Odontoiatria infantile"
- Titolo: "Mamma e papà, da BioDent curiamo i denti *e il benessere* dei tuoi figli."
- Sottotitolo: "Dentisti per bambini a Sturno, Salerno e Napoli."
- Testo: "Il Centro Odontoiatrico BioDent della Dr.ssa Azzurra Di Cecilia è un punto di riferimento per l'odontoiatria infantile a Sturno, Salerno e Napoli. Siamo partner di spicco del network *Dentista Dei Bambini*, la rete nazionale che riunisce solo gli studi dentistici che eccellono nelle cure dentali pediatriche per approccio e protocolli."
- CTA: "Vai all'odontoiatria pediatrica"
- Badge immagine: "Studio Biodent"

### Sezione "BioDent + Il Dentista Dei Bambini" (la partnership)
- Eyebrow: "La partnership"
- Titolo: "BioDent + Il Dentista Dei Bambini."
- Sottotitolo: "Insieme per la salute dentale dei più piccoli."
- Testo: "La collaborazione tra BioDent e il *Dentista Dei Bambini* è nata per garantire ai genitori una doppia tranquillità riguardo al sorriso dei loro figli. Oltre alla nostra ventennale esperienza, siamo stati scelti come eccellenza nel campo dell'odontoiatria infantile. Ecco alcuni dei nostri punti di forza:"
- Elenco punti di forza:
  - **Tell-Show-Do** — "Tramite spiegazione, dimostrazione e un'esecuzione delicata del trattamento riduciamo l'ansia nei bambini."
  - **Kids Cario Test · Orto Test** — "Valutiamo la salute orale in modo rapido e approfondito, anche con il test salivare."
  - **Ozonoterapia** — "Usiamo l'ozono per disinfettare le carie, riducendo gli interventi invasivi e favorendo una guarigione rapida."
  - **Special needs** — "Curiamo i bambini con bisogni speciali grazie a protocolli testati e certificati con sedazione."
- CTA: "BioDent è il dentista dei bambini"
- Badge immagine: "Dentista dei Bambini"

### Sezione "Perché scegliere BioDent"
- Eyebrow: "Il nostro approccio"
- Titolo: "Perché scegliere BioDent per i tuoi figli."
- Sottotitolo: "Approccio delicato e rassicurante per i piccoli pazienti."
- Testo: "Le cure dentali per i bambini richiedono attenzione al benessere psicologico e al comfort dei più piccoli, oltre che competenze specifiche. La Dr.ssa Azzurra Di Cecilia adotta un approccio psicologico che aiuta i piccoli pazienti a sentirsi a loro agio e a non temere le visite dentistiche, combinato a protocolli di *Sedazione Cosciente* sicuri ed efficaci, con cui i bambini si rilassano e avvertono limitatamente il dolore."
- Claim: "Scegli i professionisti dell'odontoiatria pediatrica per i tuoi bambini."
- Badge immagine: "Sedazione cosciente"

### Sezione "Ortodonzia"
- Eyebrow: "Ortodonzia"
- Titolo: "Ortodonzia intercettiva, fissa e *invisibile*."
- Sottotitolo: "Interveniamo a ogni età per garantire denti dritti e un sorriso sano."
- Testo: "Con l'ortodonzia intercettiva preveniamo e correggiamo precocemente le problematiche dentali nei più piccoli, evitando trattamenti futuri più invasivi. Per adolescenti e adulti impieghiamo apparecchi fissi o allineatori trasparenti, che garantiscono discrezione e comfort, per una terapia serena e un sorriso perfetto."
- CTA: "Ortodonzia"
- Badge immagine: "Allineatori trasparenti"

### Sezione "Odontoiatria dell'adulto"
- Eyebrow: "Odontoiatria"
- Titolo: "Odontoiatria dell'adulto."
- Sottotitolo: "Cure dentali avanzate, dagli impianti alle faccette dentali."
- Testo: "Con le nostre tecniche di implantologia e chirurgia orale ripristiniamo la funzionalità e l'estetica del tuo sorriso in modo sicuro e duraturo. Non solo salute, ma anche bellezza: con i trattamenti di estetica dentale come le faccette dentali, il tuo sorriso sarà luminoso e in perfetta armonia."
- CTA: "Odontoiatria generale"
- Badge immagine: "Implantologia"

### Sezione "Medicina estetica"
- Eyebrow: "Medicina estetica"
- Titolo: "Medicina estetica ad Avellino, Salerno e Napoli."
- Sottotitolo: "Valorizziamo la tua naturale bellezza con trattamenti antiage."
- Testo: "I nostri filler e trattamenti di medicina estetica riducono le rughe e ridefiniscono i contorni del viso per un aspetto fresco e naturale. Con la biorivitalizzazione restituiamo alla tua pelle tonicità e idratazione profonda, per un risultato giovane e luminoso."
- CTA: "Medicina estetica"
- Badge immagine: "Medicina estetica"

### Chiusura Home
- Sezione Sedi (Locations) + Form di contatto (ContactForm)

---

## PAGINA: Chi siamo (`ChiSiamoPage`)

### PageHead
- Breadcrumb: Home › Chi siamo
- Kicker: "Storia · Staff · Valori"
- Titolo: "Quattro *decenni* di sorrisi, una famiglia di professionisti."
- Lead: "Da oltre 40 anni BioDent è il punto di riferimento per la cura dentale delle famiglie. Guidato oggi dalla Dr.ssa Azzurra Di Cecilia, lo studio continua la tradizione familiare introducendo tecnologie all'avanguardia e servizi su misura per grandi e piccoli."

### Sezione "La storia"
- Eyebrow: "La storia"
- Titolo: "Dove tradizione e innovazione si incontrano."
- Testo 1: "Da oltre **40 anni**, BioDent è il punto di riferimento per la cura dentale delle famiglie. La Dott.ssa Di Cecilia ha saputo rinnovare l'approccio, mettendo al centro l'*empatia* e un'attenzione speciale per i bambini."
- Testo 2: "Per questo impegno costante BioDent è partner del *Dentista dei Bambini* su Sturno, Salerno e Napoli — la rete nazionale che riunisce solo gli studi dentistici che eccellono nelle cure pediatriche per approccio e protocolli."
- Badge immagine: "Studio Biodent"

### Sezione "Spazi" (studio a misura di bambino)
- Eyebrow: "Spazi"
- Titolo: "Uno studio a misura di *bambino*… e di genitore."
- Testo 1: "La nostra specializzazione nell'odontoiatria infantile è arricchita da uno spazio esclusivo: una grande area dedicata ai bambini, con **due postazioni colorate (una a forma di drago!)**, una sala d'attesa accogliente per tutte le età e un parco giochi esterno attrezzato."
- Testo 2: "I piccoli pazienti possono rilassarsi e distrarsi, trasformando la visita dentistica in un'esperienza serena."
- Badge immagine: "Area pediatrica"

### Sezione "I nostri valori"
- Eyebrow: "I nostri valori"
- Titolo: "Professionalità, competenza ed *empatia*."
- Testo 1: "Da Biodent, ogni sorriso è speciale. Empatia, competenza e professionalità sono i valori che ci guidano ogni giorno per creare un ambiente sicuro e accogliente."
- Testo 2: "Vieni a trovarci e scopri uno studio pensato per la tua famiglia, dove la salute dentale è alla portata di tutti, con un servizio di qualità che rispetta i tuoi bisogni e quelli dei tuoi cari."
- *(Valori dettagliati V.01–V.04: vedi `values` in biodent-content.json)*

### Sezione "Lo staff"
- Eyebrow: "Lo staff"
- Titolo: "Le persone che si prenderanno cura del tuo sorriso."
- Testo: "Un team multidisciplinare di odontoiatri, ortodontisti, igienisti e specialisti, coordinati dalla Dr.ssa Azzurra Di Cecilia, Direttore Sanitario di BioDent."
- *(Griglia 19 membri: vedi `staff` in biodent-content.json)*

### Chiusura
- Sezione Sedi (Locations, tight) + Form di contatto

---

## PAGINA: Odontoiatria Pediatrica (`PediatricaPage`)

### PageHead
- Breadcrumb: Home › Terapie › Odontoiatria Pediatrica
- Kicker: "Per i più piccoli — età 0–14"
- Titolo: "Il *dentista* dei bambini. Senza lacrime."
- Lead: "Al Centro Odontoiatrico BioDent siamo specializzati nell'odontoiatria infantile. Sappiamo quanto sia importante creare un'esperienza positiva e rassicurante dal dentista per i più piccoli. Partner del network nazionale Dentista dei Bambini."

### Sezione "La prima visita" (mascotte)
- Eyebrow: "La prima visita"
- Titolo: "La prima visita è una *scoperta*, non un controllo."
- Testo: "Al Centro Biodent accogliamo i piccoli pazienti con un sorriso e li guidiamo in un percorso su misura, fatto di parole rassicuranti e gesti attenti. La Dr.ssa Azzurra Di Cecilia utilizza tecniche psicologiche come il *Tell-Show-Do* per spiegare al bambino ogni passaggio della visita, aiutandolo a sentirsi a proprio agio e sicuro."
- CTA (accent): "Prenota la prima visita"

### Sezione "Il metodo Tell-Show-Do"
- Eyebrow: "Il metodo Tell-Show-Do"
- Titolo: "Spieghiamo, mostriamo e facciamo insieme."
- Testo: "Una strategia pedagogica pensata per ridurre l'ansia del bambino. È il primo passo per fargli vivere un'esperienza serena e positiva dal dentista."
- *(Step 01–03: vedi `tellShowDo` in biodent-content.json)*

### Sezione "Spazi colorati e divertenti"
- Eyebrow: "Spazi colorati e divertenti"
- Titolo: "Un ambiente a misura di *bambino*."
- Testo intro: "I nostri studi dentistici a Sturno, Salerno e Napoli sono pensati per far sentire i bambini a proprio agio:"
- Elenco:
  - Riuniti colorati con immagini di personaggi dei cartoni animati
  - Mascotte amichevoli che accolgono i piccoli pazienti
  - Proiezioni di film e cartoni durante le cure
  - Giochi e pupazzi in sala d'attesa per un tempo spensierato
- Badge immagine: "Riuniti a forma di drago"

### Sezione "Sedazione cosciente inalatoria"
- Eyebrow: "Sedazione cosciente inalatoria"
- Titolo: "Relax per i piccoli pazienti durante le cure."
- Testo 1: "Con una mascherina colorata, il bambino inala una miscela di protossido di azoto e ossigeno, che induce una sensazione di benessere e rilassamento. Il piccolo rimane sveglio, ma si sente tranquillo e sereno, permettendo di svolgere le cure senza stress o paura."
- Testo 2: "La sedazione è **sicura, non invasiva** e particolarmente indicata per bambini ansiosi o che devono affrontare trattamenti più lunghi e delicati."
- Badge immagine: "N₂O · Sedazione cosciente"

### Sezione "Un approccio multidisciplinare" (sfondo scuro)
- Eyebrow: "Un approccio multidisciplinare"
- Titolo: "Non solo denti: lo *sviluppo* del bambino."
- Testo: "Collaboriamo con logopedisti, otorini, ortopedici e, soprattutto, con i pediatri per offrire un supporto integrato. Questo approccio multidisciplinare ci permette di intervenire tempestivamente e di ottenere risultati migliori, favorendo uno sviluppo armonioso e completo del bambino."
- Tag: Pediatri · Logopedisti · Otorini · Ortopedici
- Badge immagine: "Dentista dei bambini"

### Sezione "Cosa offriamo" (trattamenti pediatrici)
- Eyebrow: "Cosa offriamo"
- Titolo: "I trattamenti pediatrici di BioDent."
- Testo: "Una gamma completa di terapie pensate per bambini, dalla prevenzione alla chirurgia, in un unico centro coordinato."
- *(Trattamenti 01–06: vedi `treatments.odontoiatriaPediatrica` in biodent-content.json)*

### Chiusura
- Sezione Sedi (tight) + Form di contatto

---

## PAGINA: Ortodonzia (`OrtodonziaPage`)

### PageHead
- Breadcrumb: Home › Terapie › Ortodonzia
- Kicker: "Specialisti in Ortodonzia"
- Titolo: "Denti dritti, sorriso sano. A *ogni età*."
- Lead: "Al Centro Odontoiatrico Biodent della Dr.ssa Azzurra Di Cecilia, eseguiamo trattamenti ortodontici su misura per ogni fase di crescita, aiutando bambini, adolescenti e adulti ad ottenere denti dritti e un sorriso sano e armonioso."

### Sezione "Prevenzione precoce"
- Eyebrow: "Prevenzione precoce per un sorriso in crescita"
- Titolo: "Intervenire *presto*, per non doverlo fare dopo."
- Testo 1: "L'ortodonzia intercettiva si occupa della correzione precoce delle anomalie dentali e scheletriche nei bambini. Raccomandiamo di considerare l'ortodonzia intercettiva per i bambini tra i 5 e gli 11 anni, con una prima visita intorno ai 6 anni — e interventi precoci già a 4–5 anni se necessario."
- Testo 2: "Obiettivi: correzione della crescita ossea, trattamento delle malocclusioni, prevenzione di complicazioni future, miglioramento estetico e funzionale."
- Badge immagine: "Ortodonzia intercettiva"

### Sezione "Allineatori trasparenti"
- Eyebrow: "Denti ben allineati con una terapia discreta ed efficace"
- Titolo: "Allineatori trasparenti. Discrezione e *comfort*."
- Testo 1: "Gli allineatori trasparenti rappresentano la soluzione ideale per tutti i pazienti che hanno sempre desiderato avere denti dritti, senza i compromessi estetici degli apparecchi fissi. Rimovibili, leggeri, confortevoli e impercettibili nella vita quotidiana."
- Testo 2: "La Dr.ssa Azzurra Di Cecilia è specializzata in ortodonzia e certificata come provider Invisalign. Il piano di trattamento viene pianificato con scansione digitale 3D della bocca, mostrandoti l'evoluzione del sorriso prima ancora di iniziare."
- Badge immagine: "Biodent — Provider Invisalign"

### Sezione "I nostri trattamenti"
- Eyebrow: "I nostri trattamenti"
- Titolo: "Per ogni occlusione, la sua terapia."
- Testo: "Un percorso ortodontico completo dalla prima visita al fine terapia, con tecnologie d'avanguardia e specialisti dedicati."
- *(Trattamenti 01–06: vedi `treatments.ortodonzia` in biodent-content.json)*

### Chiusura
- Sezione Sedi (tight) + Form di contatto

---

## PAGINA: Odontoiatria adulti (`OdontoiatriaPage`)

### PageHead
- Breadcrumb: Home › Terapie › Odontoiatria
- Kicker: "Odontoiatria dell'Adulto"
- Titolo: "Cure dentali avanzate, per *tutta* la famiglia."
- Lead: "Il Centro Odontoiatrico Biodent della Dr.ssa Azzurra Di Cecilia nasce per offrire un'esperienza positiva di cure dentali, aiutando pazienti di tutte le età a superare ansie e timori con un approccio orientato al comfort."

### Sezione "Implantologia e chirurgia"
- Eyebrow: "Implantologia e chirurgia"
- Titolo: "Ricostruire la *funzione*, restituire il sorriso."
- Testo 1: "Sostituiamo i denti mancanti con impianti dentali duraturi. Utilizziamo tecniche di implantologia avanzata con scansioni digitali, TAC Cone Beam e software 3D per pianificare con precisione gli impianti, garantendo interventi mirati e mini-invasivi."
- Testo 2: "Per la chirurgia orale utilizziamo laser odontoiatrico e manipolo per piezo surgery per interventi meno invasivi e più delicati. Interveniamo su: rimozione denti del giudizio, disinclusione canini, rimozione cisti, apicectomie, frenulectomie."
- Badge immagine: "Implantologia"

### Sezione "Igiene e prevenzione"
- Eyebrow: "Igiene e prevenzione"
- Titolo: "Igiene professionale con tecnica *GBT*."
- Testo: "Utilizziamo la tecnica GBT (Guided Biofilm Therapy) con air polisher che rimuove biofilm, macchie e tartaro in modo rapido ed efficace, sia sopra che sotto la gengiva. Un rilevatore di placca colora le aree da trattare per una pulizia mirata e completa."
- Badge immagine: "Igiene GBT"

### Sezione "I nostri trattamenti"
- Eyebrow: "I nostri trattamenti"
- Titolo: "Una cura completa per ogni esigenza."
- Testo: "Dall'implantologia alla parodontologia, dall'estetica dentale alla gnatologia: tutto in un unico centro coordinato dalla Dr.ssa Azzurra Di Cecilia."
- *(Trattamenti 01–10: vedi `treatments.odontoiatria` in biodent-content.json)*

### Chiusura
- Sezione Sedi (tight) + Form di contatto

---

## PAGINA: Medicina estetica (`EsteticaPage`)

### PageHead
- Breadcrumb: Home › Medicina estetica
- Kicker: "Medicina estetica e trattamenti anti-età"
- Titolo: "Valorizziamo la tua naturale *bellezza*."
- Lead: "Da Biodent, la dottoressa unisce cure odontoiatriche e medicina estetica per trattamenti avanzati che esaltano la bellezza naturale. Filler, biorivitalizzazione e trattamenti anti-età per un viso fresco e armonioso."

### Sezione "Filler e contorni"
- Eyebrow: "Filler e contorni"
- Titolo: "Linee armoniche, volumi *naturali*."
- Testo 1: "I trattamenti di medicina estetica da Biodent sono pensati per esaltare la bellezza naturale del viso, mai per stravolgerla. La Dr.ssa Azzurra Di Cecilia lavora su filler labbra, contorni e biorivitalizzazione cutanea con un approccio sobrio e personalizzato."
- Testo 2: "Il filler labbra utilizza soluzioni specifiche per donare volume, migliorare la definizione e ripristinare l'idratazione, con risultati immediati e duraturi dall'aspetto naturale e proporzionato al viso."
- Badge immagine: "Medicina estetica"

### Sezione trattamenti estetici
- *(Trattamenti 01–03: vedi `treatments.medicinaEstetica` in biodent-content.json)*

### Chiusura
- Sezione Sedi (tight) + Form di contatto

---

## PAGINA: Tecnologie (`TecnologiePage`)

### PageHead
- Breadcrumb: Home › Tecnologie
- Kicker: "Strumenti per diagnosi precise e cure mirate"
- Titolo: "Le *tecnologie* che cambiano l'esperienza dal dentista."
- Lead: "Al Centro Odontoiatrico BioDent forniamo trattamenti odontoiatrici all'avanguardia, avvalendoci delle tecnologie più avanzate per eseguire diagnosi più precise e pianificare cure ancora più mirate ed efficaci."

### Elenco tecnologie
- *(8 tecnologie T.01–T.08 con titolo, descrizione e immagine: vedi `technologies` in biodent-content.json)*

### Chiusura
- Sezione Sedi (tight) + Form di contatto

---

## PAGINA: Contatti (`ContattiPage`)

### PageHead
- Breadcrumb: Home › Contatti
- Kicker: "Tre sedi, un unico team"
- Titolo: "*Parliamo* del tuo sorriso."
- Lead: "Compila il modulo, chiamaci o scrivici su WhatsApp. Ti rispondiamo entro 24 ore lavorative. Per le urgenze chiama direttamente la sede a te più vicina."

### Contenuto
- Sezione Sedi (Locations completa) + Form di contatto

---

## PAGINA: 404 (in `app.jsx`)
- Eyebrow: "404"
- Titolo: "Pagina non trovata."
- Testo: "Il link che hai seguito non esiste. Torna alla home e ricominciamo."
- CTA: "Torna alla home"

---

## Componenti definiti ma NON usati nelle pagine attuali

I seguenti componenti esistono in `components.jsx` ma non risultano montati in nessuna pagina del routing attuale (`app.jsx`/`pages.jsx`). I loro testi sono comunque disponibili come materiale redazionale pronto:

### StatsStrip (mai montato)
- 40+ — Anni di attività — "Una tradizione familiare di cura dentale dal 1985."
- 3 — Sedi — "Sturno, Salerno e Napoli — sempre vicini alle famiglie."
- 1° — Network in Italia — "Partner del Dentista Dei Bambini."
- 8 — Tecnologie avanzate — "Dalla TC Cone Beam allo scanner intraorale."

### Reviews (mai montato)
- Eyebrow: "Le voci dei pazienti"
- Titolo: "Quattro generazioni di famiglie."
- Testo: "Da oltre 40 anni accompagniamo i pazienti — bambini diventati genitori, e ora nonni — nella cura del loro sorriso. Ecco cosa raccontano."
- *(3 recensioni: vedi `reviews` in biodent-content.json)*

### FAQ (mai montato)
- Eyebrow: "FAQ"
- Titolo: "Domande frequenti."
- Testo: "Le risposte alle domande che ci fanno più spesso i genitori al telefono e in studio. Per tutto il resto, scrivici."
- *(6 FAQ: vedi `faqs` in biodent-content.json)*
