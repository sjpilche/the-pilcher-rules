import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db, isDbConfigured } from "@/lib/db";

const VALID_STATUSES = ["new", "contacted", "demo_scheduled", "closed"] as const;

const schema = z.object({
  id: z.number().int().positive(),
  status: z.enum(VALID_STATUSES),
});

export async function PATCH(req: NextRequest) {
  // Verify admin session
  const cookie = req.cookies.get("admin_session");
  if (cookie?.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isDbConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  try {
    const body = await req.json();
    const { id, status } = schema.parse(body);

    await db.query(
      `UPDATE demo_requests SET status = $1 WHERE id = $2`,
      [status, id]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    console.error("[Admin] demo-status update error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
