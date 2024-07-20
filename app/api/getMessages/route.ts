import { NextResponse } from 'next/server';
import { connectToMongo } from '@/lib/mongo.lib';
import ContactModel from '@/model/contact.model';
import mongoose from 'mongoose';

export async function GET() {
  console.log('GET /api/getMessages - Starting');
  try {
    await connectToMongo();
    console.log('Connected to MongoDB');
    
    const messages = await ContactModel.find({});
    console.log('Fetched messages:', messages);

    return NextResponse.json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    return NextResponse.json({ message: 'Failed to fetch messages' }, { status: 500 });
  } finally {
    await mongoose.connection.close();
    console.log('Closed MongoDB connection');
  }
}
