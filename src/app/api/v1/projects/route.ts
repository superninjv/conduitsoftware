import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/config/projects";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const category = searchParams.get("category");
  const status = searchParams.get("status");

  // Single project lookup
  if (id) {
    const project = projects.find((p) => p.id === id);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project);
  }

  // Filtered list
  let result = [...projects];

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (status) {
    result = result.filter((p) => p.status === status);
  }

  return NextResponse.json({ projects: result, total: result.length });
}
