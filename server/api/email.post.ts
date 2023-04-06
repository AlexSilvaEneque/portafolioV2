import nodemailer from 'nodemailer'

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    console.log(body);
    
    let message = ''

    const runtime = useRuntimeConfig()

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: runtime.email,
            pass: runtime.email_pass
        }
    })

    let mailOptions = {
        from: body.email,
        to: runtime.email
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            // subject: body.name,
            text: body.msj,
            html: `<h1>${body.msj}</h1>`
        })

        message = 'Envio exitoso'
        
    } catch (error) {
        message = 'Hubo un error'
        console.log(error)
    }

    return message
} )