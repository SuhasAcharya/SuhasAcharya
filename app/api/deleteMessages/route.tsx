import { NextResponse } from 'next/server';
import { connectToMongo } from '@/lib/mongo.lib';
import ContactModel from '@/model/contact.model';
import mongoose from 'mongoose';

export async function DELETE(request: Request) {
  try {
    await connectToMongo();

    const { id } = await request.json();

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
    }

    const result = await ContactModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: 'Message deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Message not found' }, { status: 404 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to delete message' }, { status: 500 });
  } finally {
    await mongoose.connection.close();
  }
}
