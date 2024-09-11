import  jwt  from "jsonwebtoken";
import nodemailer from "nodemailer";
import { emailVrifyTemplet } from "./emailVrifyTemplet.js";


export const sendEmail= async(email)=>{
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: "abdokh1142003@gmail.com",
          pass: "dgvbswzsyabjeyxc",
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
    
        // send mail with defined transport object
        let token=jwt.sign({email},process.env.SECRET_KEY)
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch 👻" <assignment77777777777@ethereal.email>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          html: emailVrifyTemplet(token), // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      
}

