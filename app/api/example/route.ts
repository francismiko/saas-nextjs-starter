import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const exampleSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
});

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "Hello from API",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = exampleSchema.parse(body);

    return NextResponse.json({
      success: true,
      data: validated,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
