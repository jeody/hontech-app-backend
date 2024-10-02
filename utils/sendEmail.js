// const dotenv = require('dotenv');
// dotenv.config();
const nodemailer = require('nodemailer');

// Create Email Transporter
const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport({
    host: 'mail.supremecluster.com',
    port: 465,
    auth: {
      user: 'hontech@jeody.com',
      pass: '6LPlP7sd3)',
    },
  });

  // Options for sending email
  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
