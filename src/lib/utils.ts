import { defaultImageUrl } from "./../../constants";
import { EventType, Resources } from "@/types";
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

export const getResourceArray = (event: EventType) => {
  const resources: Resources[] = [];
  const resourcesArray = event.url2 ? event.url2.split(",") : [];
  resourcesArray.map((ele) => {
    if (ele.includes("youtube")) {
      resources.push({
        name: "Youtube",
        link: ele,
      });
    } else if (ele.includes("drive")) {
      resources.push({
        name: "Drive",
        link: ele,
      });
    }
  });
  return resources;
};

export const isValidUrl = (urlString: string): boolean => {
  try {
    return Boolean(new URL(urlString));
  } catch {
    return false;
  }
};

export const getSafeImageUrl = (url: string, hasError = false): string => {
  return !isValidUrl(url) || hasError ? defaultImageUrl : url;
};
