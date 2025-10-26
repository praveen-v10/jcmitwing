import { connectToDatabase } from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req) {
  await connectToDatabase();

  const { fullName, whatsapp, email, gender, constituency, voterId } = await req.json();

  try {
    // Check duplicate voterId
    const existing = await User.findOne({ voterId });
    if (existing) {
      return new Response(JSON.stringify({ success: false, message: "You are already enrolled." }), { status: 400 });
    }

    const user = await User.create({ fullName, whatsapp, email, gender, constituency, voterId });
    return new Response(JSON.stringify({ success: true, user }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
