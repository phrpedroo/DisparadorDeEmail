const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'seuemail@oqueiraenviar',
        pass: 'sua-senha-via-app',
    }
});

transport.sendMail({
    from: '<seuemail@oqueiraenviar> ',
    to: 'emaildequem@vaireceber',
    subject: 'Enviando email com Nodemailer',
    html: '<h1>esse email foi enviado por nodeMailer</h1>',
    text: 'esse email foi enviado por nodeMailer'
})
.then((response) => console.log("Email enviado com sucesso"))
.catch((err) => console.log('erro ao enviar email: ', err))