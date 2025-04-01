import React, { ReactNode, useState } from "react";
import Image from "next/image";

interface SingularBlogPostProps {
  imageUrl: string;
  content: ReactNode | string;
  title: string;
}

const SingularBlogPost: React.FC<SingularBlogPostProps> = ({
  imageUrl,
  content,
  title,
}) => {
  const [imgError, setImgError] = useState(false);

  // Validate URL to ensure it's properly formatted
  const isValidUrl = (urlString: string): boolean => {
    try {
      return Boolean(new URL(urlString));
    } catch (error) {
      console.log("Invalid URL:", error);
      return false;
    }
  };

  console.log("Checking for valid url")
  console.log(isValidUrl(imageUrl))
  console.log(imageUrl)
  // Default image URL to use when image is invalid or fails to load
  const defaultImageUrl = "https://images.unsplash.com/photo-1669352311123-085520652a65?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Determine which image URL to use
  const safeImageUrl = imgError || !isValidUrl(imageUrl) ? defaultImageUrl : imageUrl;

  const formatContent = (content: ReactNode | string) => {
    if (typeof content === "string") {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const parts = content.split(urlRegex);

      return parts.map((part, index) => {
        if (part.match(urlRegex)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
              onClick={(e) => e.stopPropagation()}
            >
              {part}
            </a>
          );
        }
        return part;
      });
    }
    return content;
  };

  return (
    <div className="grid md:grid-cols-3 w-full mb-20 max-h-[600px] overflow-y-hidden">
      <div className="w-fit md:ml-auto mx-auto md:mx-0 mb-10 mt-5">
        <Image
          src={safeImageUrl}
          alt={title}
          width={1000}
          height={1000}
          className="w-auto min-h-[500px] ml-auto object-cover"
          priority
          onError={() => setImgError(true)}
        />
      </div>

      <div className="px-5 sm:px-10 md:col-span-2 text-xl my-auto flex flex-col gap-5 h-full ">
        <div className="text-3xl font-semibold">{title}</div>
        <div
          className="text-[#6a6c6e] overflow-y-hidden h-full"
          style={{
            maxHeight: "500px",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))",
            maskImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))",
            paddingRight: "10px",
          }}
        >
          {formatContent(content)}
        </div>
      </div>
    </div>
  );
};

export default SingularBlogPost;

