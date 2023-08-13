import { NextRequest, NextResponse } from "next/server";
import Skills from "../../../../../../models/skillModel";
import { connect } from "@/lib/dbConfig";

connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const skills = await Skills.find({ id: params.id });

    return NextResponse.json({
      skills,
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
    const body = await request.json();
    const { skills } = body;
    const { id } = params;

    const skillsArray = skills.split(",");

    skillsArray.forEach(async (name: string) => {
      const newSkill = await Skills.create({
        id,
        name,
      });

      await newSkill.save();
    });

    const res = await Skills.find({ id });

    return NextResponse.json({
      res,
    });
  } catch (error:any) {
    return NextResponse.json(
      {
        message: error?.message,
      },
      { status: 500 }
    );
  }
}
