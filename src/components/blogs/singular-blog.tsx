import React, { ReactNode } from "react";
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
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="w-auto min-h-[500px] ml-auto object-cover"
          priority
        />
      </div>

      <div className="px-5 sm:px-10 md:col-span-2 text-xl my-auto flex flex-col gap-5 h-full ">
        <div className="text-3xl font-semibold">{title}</div>
        <div
          className="text-[#6a6c6e] overflow-y-hidden"
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
