"use strict";
const nodemailer = require("nodemailer");


async function main() {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        //or
        auth: {
            user: 'YOUR MAIL',
            pass: 'YOUR PASS'
        }
    });



    let info = await transporter.sendMail({
        from: '"<your name " <your spoof email>',
        to: "your target",
        subject: "hacked ",
        text: "hacked",
        html: "<b> </b>",
    });

    console.log("Message sent: %s", info.messageId);


    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);
main().catch(console.error);
