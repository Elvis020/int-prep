import { isAbsolute, relative, resolve } from "node:path";

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET(request: NextRequest) {
  const requestedPath = request.nextUrl.searchParams.get("path");

  if (!requestedPath || isAbsolute(requestedPath)) {
    return new NextResponse("A relative exercise path is required.", { status: 400 });
  }

  const workspaceRoot = process.cwd();
  const resolvedPath = resolve(workspaceRoot, requestedPath);
  const pathFromWorkspace = relative(workspaceRoot, resolvedPath);

  if (pathFromWorkspace.startsWith("..") || isAbsolute(pathFromWorkspace)) {
    return new NextResponse("The exercise path must stay inside this workspace.", {
      status: 400,
    });
  }

  const vsCodeUrl = `vscode://file${encodeURI(resolvedPath)}`;

  return NextResponse.redirect(vsCodeUrl);
}
