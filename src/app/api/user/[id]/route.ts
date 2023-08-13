import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../models/userModel";
import { connect } from "@/lib/dbConfig";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const user = await User.findOne({ id: id });

    return NextResponse.json({
      user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
}
