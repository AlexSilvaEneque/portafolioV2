import nodemailer from 'nodemailer'

interface ICResponse {
    msj: String
    status: Boolean
}

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    
    let res : ICResponse = {
        msj: '',
        status: true
    }

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
            text: body.msj,
            html: `<h3>Quiere Contactarte: </h3>
                <p>${body.name} - ${body.email}</p>
                <h3>Asunto:</h3>
                <p>${body.msj}</p>
                `
        })

        res.msj = 'Envio exitoso!'
        
    } catch (error) {
        res.msj = 'Hubo un error'
        res.status = false
    }

    return res
} )