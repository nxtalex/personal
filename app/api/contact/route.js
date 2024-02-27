import connect from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connect();
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorObject = {};
      for (let field in error.errors) {
        errorObject[field] = error.errors[field].message;
      }
      return NextResponse.json({ msg: errorObject });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
