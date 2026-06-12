
//create a message
//send a mail using sendmail()
const dotenv=require('dotenv').config();
const nodemailer= require('nodemailer')
//s1:create a transport
async function mail(email,username){
    const transporter= await nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.GMAILUSER,
        pass:process.env.GMAILPASS
    }
})
//2.create message
const message={
    from: process.env.GMAILUSER, // sender address
    to: email,
    subject: "Account creation", // subject line
    text: `Hi,${username} your account is created successfully`, // plain text body
    html: "<b>registration</b>", // HTML body
}

//3.send mail
    await transporter.sendMail(message)
    console.log("email send")

}
module.exports=mail;
