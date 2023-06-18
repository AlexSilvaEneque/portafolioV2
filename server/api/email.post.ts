import nodemailer from 'nodemailer'

interface ICResponse {
    msj: String
    status: Boolean
}

interface IBody {
    name: string
    asunto: string
    email: string
    msj: string
}

export default defineEventHandler( async (event) => {

    const body : IBody= await readBody(event)
    
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
        to: runtime.email,
        subject: body.asunto
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            text: body.msj,
            html: `<h3>Quiere Contactarte: </h3>
                <p>${body.name} - ${body.email}</p>
                <h3>Mensaje:</h3>
                <p>${body.msj}</p>
                `
        })

        res.msj = 'Mensaje enviado, pronto me pondré en contacto con usted(es)!'
        
    } catch (error) {
        res.msj = 'Ocurrió un error'
        res.status = false
    }

    return res
} )