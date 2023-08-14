import { NextRequest, NextResponse } from "next/server";
import Education from "../../../../../../models/educationModel";
import { connect } from "@/lib/dbConfig";
import { AddEducationFormSchemaValidator } from "@/lib/validators/FormSchema";

connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const education = await Education.find({ userId: id });

    return NextResponse.json({
      education,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body: AddEducationFormSchemaValidator = await request.json();

    const { college, degree, startYear, endYear, description } = body;

    const { id } = params;

    const education = await Education.create({
      userId: id,
      college,
      degree,
      startYear,
      endYear,
      description,
    });

    await education.save();

    return NextResponse.json({
      education,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();

    const { college, degree, startYear, endYear, description, _id } = body;

    const education = await Education.findByIdAndUpdate(_id, {
      college,
      degree,
      startYear,
      endYear,
      description,
    });

    await education.save();

    return NextResponse.json({
      education,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
