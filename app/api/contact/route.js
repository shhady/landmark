import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

function badRequest(message) {
  return Response.json({ ok: false, error: message }, { status: 400 })
}

function serverError(message) {
  return Response.json({ ok: false, error: message }, { status: 500 })
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false
  // Simple sanity check (avoid over-strict validation)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export async function POST(req) {
  const MY_EMAIL = process.env.MY_EMAIL
  const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD

  if (!MY_EMAIL || !EMAIL_APP_PASSWORD) {
    return serverError('Missing email configuration')
  }

  let body
  try {
    body = await req.json()
  } catch {
    return badRequest('Invalid JSON')
  }

  const name = String(body?.name ?? '').trim()
  const email = String(body?.email ?? '').trim()
  const phone = String(body?.phone ?? '').trim()
  const subject = String(body?.subject ?? '').trim()
  const message = String(body?.message ?? '').trim()

  if (!name) return badRequest('Name is required')
  if (!isValidEmail(email)) return badRequest('Valid email is required')
  if (!phone) return badRequest('Phone is required')

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: MY_EMAIL,
        pass: EMAIL_APP_PASSWORD,
      },
    })

    const cleanSubject = subject || 'פנייה חדשה מהאתר'
    const to = 'office@landmap-ltd.com'

    const text = [
      `שם: ${name}`,
      `אימייל: ${email}`,
      `טלפון: ${phone}`,
      `נושא: ${cleanSubject}`,
      '',
      'הודעה:',
      message || '(ללא הודעה)',
    ].join('\n')

    await transporter.sendMail({
      from: `Landmap Website <${MY_EMAIL}>`,
      to,
      replyTo: email,
      subject: `Landmap: ${cleanSubject}`,
      text,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="margin: 0 0 12px;">פנייה חדשה מהאתר</h2>
          <p style="margin: 0;"><b>שם:</b> ${escapeHtml(name)}</p>
          <p style="margin: 0;"><b>אימייל:</b> ${escapeHtml(email)}</p>
          <p style="margin: 0;"><b>טלפון:</b> ${escapeHtml(phone)}</p>
          <p style="margin: 0 0 12px;"><b>נושא:</b> ${escapeHtml(cleanSubject)}</p>
          <div style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 10px;">${escapeHtml(
            message || '(ללא הודעה)'
          )}</div>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (e) {
    return serverError('Failed to send email')
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

