export interface FaqItem {
  q: string;
  a: string;
  conferma?: boolean;
}

/** FAQPage JSON-LD. Esclude le voci marcate [DA CONFERMARE] (conferma: true). */
export function faqPageJsonLd(items: FaqItem[], url: string) {
  const valid = items.filter((i) => !i.conferma);
  if (!valid.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: valid.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

/** MedicalWebPage + MedicalProcedure per una pagina trattamento. */
export function trattamentoJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: opts.title,
    description: opts.description,
    url: opts.url,
    ...(opts.image ? { primaryImageOfPage: opts.image } : {}),
    about: {
      '@type': 'MedicalProcedure',
      name: opts.title,
      procedureType: 'https://schema.org/TherapeuticProcedure',
    },
    provider: { '@id': 'https://centrobiodent.net/#organization' },
  };
}
