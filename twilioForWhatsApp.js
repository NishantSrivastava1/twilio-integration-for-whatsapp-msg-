require("dotenv").config()
const twilio = require("twilio")(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

/********************************************************************************************************/

async function sendWhatsappMessage() {

    twilio.messages
        .create({
            body: "Hello !!!  This is Nishant's twilio integration for github.",
            from: `whatsapp:${process.env.FROM_NUMBER}`,
            to: `whatsapp:+918888888888`
        })
        .then(message => console.log(message.sid))
        .done();

}


sendWhatsappMessage()