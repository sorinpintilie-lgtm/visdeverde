const sgMail = require("@sendgrid/mail");

function jsonResponse(statusCode, message) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  };
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, "Metodă nepermisă.");
  }

  if (!process.env.SENDGRID_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.SENDGRID_FROM_EMAIL) {
    return jsonResponse(500, "Formularul nu este configurat complet.");
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !phone || !message) {
      return jsonResponse(400, "Te rugăm să completezi toate câmpurile.");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    await sgMail.send({
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      replyTo: email,
      subject: `Mesaj nou de pe visdeverde.ro - ${name}`,
      text: [
        "Mesaj nou de pe visdeverde.ro",
        "",
        `Nume: ${name}`,
        `Email: ${email}`,
        `Telefon: ${phone}`,
        "",
        "Mesaj:",
        message,
      ].join("\n"),
      html: `
        <h2>Mesaj nou de pe visdeverde.ro</h2>
        <p><strong>Nume:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return jsonResponse(200, "Mesajul a fost trimis cu succes.");
  } catch (error) {
    console.error("SendGrid contact form error:", error);
    return jsonResponse(500, "A apărut o eroare. Te rugăm să încerci din nou.");
  }
};
