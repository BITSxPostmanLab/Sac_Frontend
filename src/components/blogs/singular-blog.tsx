import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { defaultImageUrl } from "../../../constants";
import DOMPurify  from "dompurify";


interface SingularBlogPostProps {
  imageUrl: string;
  content:  string;
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

  // Default image URL to use when image is invalid or fails to load

  // Determine which image URL to use
  const safeImageUrl = imgError || !isValidUrl(imageUrl) ? defaultImageUrl : imageUrl;


  return (
    <div className="grid md:grid-cols-3 w-full mb-20 min-h-[600px]">
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
        <div className="font-bold text-blue-800 text-3xl leading-tight break-words">{title}</div>
        <div
          className="prose prose-lg max-w-none overflow-y-hidden h-full"
          style={{
            maxHeight: "420px",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))",
            maskImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))",
            paddingRight: "10px",
          }}
        >
         <div
      className="w-full mr-auto"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
         />
        </div>
      </div>
    </div>
  );
};

export default SingularBlogPost;

