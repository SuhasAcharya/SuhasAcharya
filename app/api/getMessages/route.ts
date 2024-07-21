import { NextResponse } from 'next/server';
import { connectToMongo } from '@/lib/mongo.lib';
import ContactModel from '@/model/contact.model';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectToMongo();
    const messages = await ContactModel.find({});
    console.log({ messages });

    const response = NextResponse.json(messages,{status:200});
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to fetch messages' }, { status: 500 });
  } finally {
    await mongoose.connection.close();
  }
}
