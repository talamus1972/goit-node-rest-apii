import sgMail from "@sendgrid/mail"
import "dotenv/config";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY)

export const sendEmail = async (data) => {
    const email = { ...data, from: "talamus1972@gmail.com" }
    await sgMail.send(email)
    return true
}