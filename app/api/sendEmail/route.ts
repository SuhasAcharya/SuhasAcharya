import { connectToMongo } from "@/lib/mongo.lib";
import ContactModel from "@/model/contact.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { senderEmail, message } = await request.json();
    
    // Simple validation
    if (!senderEmail || !message) {
      return NextResponse.json({ message: "Invalid input data" }, { status: 400 });
    }

    await connectToMongo();
    await ContactModel.create({ senderEmail, message });
    
    return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ message: "Failed to send message" }, { status: 400 });
  } finally {
    await mongoose.connection.close();
  }
}
