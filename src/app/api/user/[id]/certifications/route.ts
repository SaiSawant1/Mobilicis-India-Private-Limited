import { NextRequest, NextResponse } from "next/server";
import Certifications from "../../../../../../models/certificationModel";
import { AddCertificationFormSchemaValidator } from "@/lib/validators/FormSchema";
import { connect } from "@/lib/dbConfig";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const certifications = await Certifications.find({ userId: id });

    return NextResponse.json({
      certifications,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const body: AddCertificationFormSchemaValidator = await request.json();

    const { name, grantedBy } = body;

    const certifications = await Certifications.create({
      userId: id,
      name,
      grantedBy,
    });

    await certifications.save();

    return NextResponse.json({
      certifications,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, grantedBy, _id } = body;

    const certifications = await Certifications.findByIdAndUpdate(_id, {
      name,
      grantedBy,
    });

    await certifications.save();

    return NextResponse.json({
      certifications,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}
