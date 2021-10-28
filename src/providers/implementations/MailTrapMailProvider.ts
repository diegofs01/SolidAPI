import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer, { TransportOptions } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer'
require('dotenv').config();

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MailtrapHost,
            port: process.env.MailtrapPort,
            auth: {
                user: process.env.MailtrapUser,
                pass: process.env.MailtrapPass,
            }
        });
    }
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }
}