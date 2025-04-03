import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertGoogleDriveUrl = (url: string) => {
  // Check if it's a Google Drive URL
  if (url.includes("drive.google.com/file/d/")) {
    // Extract the file ID
    const fileId = url.split("/file/d/")[1].split("/")[0];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return url;
};
