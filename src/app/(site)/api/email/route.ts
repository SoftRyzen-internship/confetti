import { type NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { ContactFormReq } from '@/types/ContactFormReq';

export async function POST(request: NextRequest) {
  const { name, email, message } = (await request.json()) as ContactFormReq;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // todo: Message template
  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Wiadomość ze strony internetowej CONFETTI od ${email}`,
    html: `<p><strong>Imię:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <br/>
          ${message ? `<p><strong>Wiadomość:</strong> ${message}</p>` : ''}
         `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
