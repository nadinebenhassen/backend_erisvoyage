import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // ou un autre service email
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });
  }

  async sendResetPasswordEmail(email: string, code: string) {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Reset your password',
      text: `Your password reset code is: ${code}`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
