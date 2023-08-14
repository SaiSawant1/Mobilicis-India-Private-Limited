import { NextRequest, NextResponse } from "next/server";
import Experiences from "../../../../../../models/experienceModel";
import { connect } from "@/lib/dbConfig";
import { AddExperienceFormSchemaValidator } from "@/lib/validators/FormSchema";

connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const experiences = await Experiences.find({ userId: params.id });

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
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body: AddExperienceFormSchemaValidator = await request.json();
    const { designation, duration, employer, role, startDateEndDate } = body;
    const { id } = params;

    const experience = await Experiences.create({
      userId: id,
      designation,
      duration,
      employer,
      role,
      startDateEndDate,
    });

    await experience.save();
    return NextResponse.json({
      experience,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message,
      },
      { status: 500 }
    );
  }
}
export async function PATCH(
  request: NextRequest 
) {
  try {
    const body = await request.json();
    const { designation, duration, employer, role, startDateEndDate,_id } = body

    const experience = await Experiences.findByIdAndUpdate(_id,{
      designation,
      duration,
      employer,
      role,
      startDateEndDate
    })

    await experience.save();
    return NextResponse.json({
      experience,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message,
      },
      { status: 500 }
    );
  }
}