// app/api/events/postform/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  console.log("Route /api/events/postform hit");

  const { formData } = await req.json();
  console.log("Received Form Data:", formData);

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

    console.log("API Response:", response.data);
    return NextResponse.json({ success: true, message: "Form submitted!" });
  } catch (error) {
    console.error("Error sending form data:", error);
    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    );
  }
}
