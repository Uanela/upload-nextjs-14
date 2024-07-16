import fsPromises from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const POST = async (request) => {
  const body = await request.formData();

  const title = body.get("title");
  const description = body.get("description");
  const file = body.get("file");

  const chunks = [];
  const reader = file.stream().getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  const buffer = Buffer.concat(chunks);
  const filename = `${Date.now()}_${file.name}`;
  const filepath = `public/${filename}`;

  await fsPromises.writeFile(path.join(process.cwd(), filepath), buffer);

  return NextResponse.json({ message: "Upload success" });
};
