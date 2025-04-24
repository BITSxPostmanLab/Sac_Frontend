// app/api/events/postform/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const { formData } = await req.json();

  try {
    const response = await axios.post(
      "https://discoverwithsac-bitspilani.in/2025/main/api/contact/",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ success: true, message: "Form submitted!" });
  } catch (error) {
    console.error("Error sending form data:", error);
    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    );
  }
}
