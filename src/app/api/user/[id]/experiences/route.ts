import { NextRequest, NextResponse } from "next/server";
import Experiences from "../../../../../../models/experienceModel";
import { connect } from "@/lib/dbConfig";

connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const experiences = await Experiences.find({ id: params.id });

    return NextResponse.json({
        experiences,
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