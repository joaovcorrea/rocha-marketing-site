export const AGENCY_EMAIL = "comercial@rochamarketing.com.br";

// Número da agência para landing page (formato sem máscara).
export const AGENCY_PHONE_RAW = "41999166939";

// Formato E.164 para links (WhatsApp/telefone).
export const AGENCY_PHONE_E164 = `55${AGENCY_PHONE_RAW}`;

export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${AGENCY_PHONE_E164}`;

type MailtoParams = {
  to?: string;
  subject: string;
  body: string;
};

export function buildMailto({ to = AGENCY_EMAIL, subject, body }: MailtoParams) {
  const qs = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${to}?${qs.toString()}`;
}

export function formDataToBody(fd: FormData, extra?: string) {
  const lines: string[] = [];
  for (const [k, v] of fd.entries()) {
    const value = String(v ?? "").trim();
    if (!value) continue;
    lines.push(`${k}: ${value}`);
  }
  if (extra) lines.push("", extra);
  return lines.join("\n");
}

