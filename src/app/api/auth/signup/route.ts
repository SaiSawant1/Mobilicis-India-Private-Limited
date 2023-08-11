import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/dbConfig";
import { SignUpFormSchemaValidator } from "@/lib/validators/FormSchema";
import User from "../../../../../models/userModel";
import { v4 as uuidv4 } from "uuid";
import brcyptjs from "bcryptjs";
connect();
export async function POST(req: NextRequest) {
  try {
    const body: SignUpFormSchemaValidator = await req.json();
    const { email, name, password } = body;
    if (!email || !name || !password) {
      return NextResponse.json(
        {
          message: "Please fill all the fields",
        },
        { status: 400 }
      );
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await brcyptjs.hash(password, 10);

    const user = await User.create({
      email,
      id: uuidv4(),
      name,
      password: hashedPassword,
    });
    await user.save();

    return NextResponse.json(
      {
        message: "User Created Successfully",
        data: user,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      { status: 500 }
    );
  }
}
