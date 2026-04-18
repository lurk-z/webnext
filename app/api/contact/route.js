import { appendSubmission, isValidEmail } from "@/lib/submissions";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const topic = String(body.topic || "").trim();
    const message = String(body.message || "").trim();

    if (name.length < 2) {
      return Response.json({ ok: false, message: "Please add your name." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length < 10) {
      return Response.json({ ok: false, message: "Please write a little more detail." }, { status: 400 });
    }

    await appendSubmission("contact-messages.json", {
      name,
      email,
      topic: topic || "General note",
      message,
      createdAt: new Date().toISOString()
    });

    return Response.json({
      ok: true,
      message: "Your message was saved. Thanks for writing in."
    });
  } catch (error) {
    return Response.json(
      { ok: false, message: "The message could not be saved right now." },
      { status: 500 }
    );
  }
}
