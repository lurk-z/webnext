import { appendSubmission, isValidEmail } from "@/lib/submissions";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();

    if (!isValidEmail(email)) {
      return Response.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    await appendSubmission("subscribers.json", {
      email,
      source: "newsletter",
      createdAt: new Date().toISOString()
    });

    return Response.json({
      ok: true,
      message: "You are subscribed. Fresh recipes are on the way."
    });
  } catch (error) {
    return Response.json(
      { ok: false, message: "The subscription could not be saved right now." },
      { status: 500 }
    );
  }
}
