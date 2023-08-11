import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/dbConfig";
import { LoginFormSchemaValidator, SignUpFormSchemaValidator } from "@/lib/validators/FormSchema";
import User from "../../../../../models/userModel";
import { v4 as uuidv4 } from "uuid";
import brcyptjs from "bcryptjs";
connect();
export async function POST(req: NextRequest) {
  try {
    const body: LoginFormSchemaValidator = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Please fill all the fields",
        },
        { status: 400 }
      );
    }

    const user= await User.findOne({email});

    const passwordVerify = await brcyptjs.compare(password, user.password);

    if (!passwordVerify) {
      return NextResponse.json(
        {
          message: "Invalid Credentials",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "User  Logged In Successfully",
        data: user,
      }
    )
    
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      { status: 500 }
    );
  }
}
