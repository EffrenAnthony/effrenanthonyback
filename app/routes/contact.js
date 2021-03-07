const { Router } = require('express');
// importamos node mailer de nodemailer
const nodemailer = require('nodemailer');
const router = Router();

router.post('/api/contact', async (req, res) => {
    let enviado = false;

    // await nodemailer.createTestAccount( async (err,res) => { 

        const {name,email, subject, message} = req.body;
    
        const contentHTML = `
            <h1>Portafolio Contacto</h1>
            <ul>
                <li>Nombre: ${name}</li> 
                <li>Email: ${email}</li> 
                <li>Asunto: ${subject}</li> 
            </ul>
            <p>Mensaje: ${message}</p> 
            
        `;
    
    
        let usuario = "hola@poopaye.com"
        let contraseña = "Poopaye123$"

        let transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 587,
            secure: false,
            auth:{
                user: usuario,
                pass: contraseña
            },
    
            tls:{
                rejectUnauthorized: false
            }
    
        })
        console.log(contentHTML);
        
        
        const info = await transporter.sendMail({
            from: `<${usuario}>`,
            to: 'effrenanthony2704@gmail.com',
            subject: subject,
            html: contentHTML
        })
    
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        
        enviado = true
        // para escribir en la pantalla
        res.send(enviado);
        // res.redirect('/success.html');     

    
})

module.exports = router;