import React from 'react'
import './Footer.css'

//const nodemailer = require("nodemailer");

// async function doSendEmail() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: 'yasinsium420@gmail.com', // sender address
//     to: "yasinbuet1996@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// const sendmail = require('sendmail')();

// const doSendMail = () => {
//   sendmail({
//     from: 'yasinsium420@gmail.com',
//     to: 'yasinbuet1996@gmail.com',
//     subject: 'Hello World',
//     html: 'Mail of test sendmail '
//   }, function (err, reply) {
//     console.log(err && err.stack)
//     console.dir(reply)
//   })
// };

const Footer = () => {
  return (
    <section className='Footer' id='contact'>
        <div className='ContactPart'>
          <div className='Title1'>What's Next?</div>
          <div className='Title2'>Get in touch</div>
          <div className='ContactText'>
            I am always interested to meet new people and share knowledge about new technologies. 
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </div>
          <a className='SayHelloButton' href='https://www.linkedin.com/in/mohammad-yasin'>
            Say Hello
          </a>
        </div>
        <div className='FooterPart'> 
          Design and Developed by Md.Yasin
        </div>
    </section>
  )
}

export default Footer