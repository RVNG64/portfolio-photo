import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const data = req.body;

  // Send email
  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: data.email,
    to: 'herve.nguetsop@gmail.com',
    subject: `Message de ${data.name}`,
    html: `
      <p>${data.name}</p>
      <p>${data.email}</p>
      <p>${data.subject}</p>
      <p>${data.message}</p>
    `
  };

  smtpTransport.sendMail(mailOptions,
    (error: Error | null, response: nodemailer.SentMessageInfo) => {
      if(error) {
        res.send(error)
      } else {
        res.send('Success')
      }
      smtpTransport.close();
    });
});


app.listen(5000, ()=> {
  console.log('Server is running on port 5000');
});
