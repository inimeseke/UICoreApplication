/// <reference path="./webclient/scripts/CBCore/CBDataInterfaces.ts" />

import { RoutesController } from './controllers/RoutesController';

import * as nodemailer from 'nodemailer';
import Utils from './Utils';

import * as ejs from 'ejs';
import Mail = require('nodemailer/lib/mailer');



export class EmailHelper extends RoutesController {

    
    
    
    
    
    static async sendEmail(userProfileObject: CBUserProfile, parameters: any, filename: string, text: string, attachments: Mail.Attachment[], title: string, respondWithMessage: CBSocketMessageSendResponseFunction = Utils.nil) {
        
        
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.mail.eu-west-1.awsapps.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "infoexample@gmail.com",
                pass: "Infopassword123"
            }
        });
        
        
        try {
            
            
            var emailHTML;
            
           
           try {
               
                emailHTML = await ejs.renderFile(filename, parameters);
               
           } catch (exception) {
               
               // Nothing here
               //console.log(exception);
               
           }
           
            
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: '"Asdasd" <infoexample@gmail.ee>', // sender address
                to: userProfileObject.contactInformation.email, //"bar@example.com, baz@example.com", // list of receivers
                subject: title, // Subject line
                text: text, // plain text body
                html: emailHTML,
                attachments: attachments
            })
            
            console.log(info)
            
        } catch (exception) {
            
            if (Utils.IS(respondWithMessage)) {
                
                respondWithMessage.sendErrorResponse(exception);
                
                return;
                
            }
            
            console.log(exception);
            
        }
        
        
    }
    
    
    
    
    
    

}
