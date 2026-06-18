import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "info@meeramtech.com",
      pass: "Permi$$ion@786",
    },
  });

  try {
    await transporter.sendMail({
      from: `"MeeramTech Website" <info@meeramtech.com>`,
      to: "info@meeramtech.com",
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nPhone: ${phone || "-"}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
<p><strong>Phone:</strong> ${phone || "-"}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br />")}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return Response.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
