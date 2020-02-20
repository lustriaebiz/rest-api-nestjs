import { Injectable }   from '@nestjs/common';
import {nodeMailer}     from 'nodemailer';

@Injectable()
export class MailerService {

    protected   name: string  = 'SPE';
    protected   host: string  = 'mail.spesolution.com';
    protected   user: string  = 'ebis@spesolution.com';
    protected   port: number  = 587;
    protected   password : string  = 'secret!@#';

    protected async send(to:string, from:string, subject:string, template:any) {
        const transporter = nodeMailer.createTransport({
            name: this.name, 
            host: this.host,
            secureConnection: true,
            port: this.port,
            secure: false,
            auth: {
                user: this.user,
                pass: this.password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        
        const mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: ``,
            html: template
        };
        
        return await transporter.sendMail(mailOptions);
    }
}
