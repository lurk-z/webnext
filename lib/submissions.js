import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data");

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function appendSubmission(fileName, entry) {
  await mkdir(dataDirectory, { recursive: true });

  const filePath = path.join(dataDirectory, fileName);
  let existing = [];

  try {
    const file = await readFile(filePath, "utf8");
    existing = JSON.parse(file);
    if (!Array.isArray(existing)) {
      existing = [];
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  existing.push(entry);
  await writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
}
