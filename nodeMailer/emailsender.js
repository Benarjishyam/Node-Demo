var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myEmail@gmail.com',
    pass: '*********' // this GoogleAcct ->Security ->2Step -> App pass -> Add new
  }
});

var mailOptions = {
  from: 'myEmail@gmail.com',
  to: 'toEmail@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});