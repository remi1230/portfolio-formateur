// app/api/contact/route.js

import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ success: false, error: 'Champs requis manquants' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `my1prod.com - Nouveau message de ${name}`,
      // UTILISER 'html' AU LIEU DE 'text' POUR INCLURE LE FORMATAGE DU WYSIWYG
      html: message,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Erreur email :', err);
    return Response.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}