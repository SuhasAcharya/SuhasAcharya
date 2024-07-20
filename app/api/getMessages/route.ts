import { NextResponse } from 'next/server';
import { connectToMongo } from '@/lib/mongo.lib';
import ContactModel from '@/model/contact.model';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectToMongo();
    const messages = await ContactModel.find({});
    return NextResponse.json(messages, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate', 
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to fetch messages' }, { status: 500 });
  } finally {
    await mongoose.connection.close();
  }
}
