import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

interface RevalidationBody {
  type?: string;
  projectId?: string;
  slug?: string;
}

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { success: false, message: "Invalid secret" },
      { status: 401 }
    );
  }

  let body: RevalidationBody = {};
  try {
    body = (await request.json()) as RevalidationBody;
  } catch {
    body = {};
  }

  revalidateTag("projects", "max");
  revalidateTag("skills", "max");
  revalidatePath("/");
  revalidatePath("/projects");

  if (body.slug) {
    revalidatePath(`/projects/${body.slug}`, "page");
  }

  return NextResponse.json({ success: true, revalidated: true });
}
