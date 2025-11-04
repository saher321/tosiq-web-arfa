import nodemailer from 'nodemailer'

export const sendEmail = async (to, subject, content) => {
    // Create a test account or replace with real credentials.
    try {
            const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            });

            const info = await transporter.sendMail({
                from: `"Notify" <${EMAIL_USER}>`,
                to: to,
                subject: subject,
                html: content, // HTML body
            });

            console.log("Message sent:", info.messageId);
    } catch (error) {
        console.log("User email is not valid in Gmail server")
    }
}