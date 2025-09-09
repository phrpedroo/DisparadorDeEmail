const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'phrpachec@gmail.com',
        pass: 'guirozedsmxmdwlu',
    }
});

transport.sendMail({
    from: '<phrpachec@gmail.com> ',
    to: 'danton.pietro@gmail.com',
    subject: 'Enviando email com Nodemailer',
    html: '<h1>esse email foi enviado por nodeMailer</h1>',
    text: 'esse email foi enviado por nodeMailer'
})
.then((response) => console.log("Email enviado com sucesso"))
.catch((err) => console.log('erro ao enviar email: ', err))