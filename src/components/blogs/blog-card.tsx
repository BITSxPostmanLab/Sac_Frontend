import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostType } from "@/types";
import { getSafeImageUrl } from "@/lib/utils";

interface BlogCardProps {
    post: BlogPostType;
}

const BlogCard = ({ post }: BlogCardProps) => {
    const [imgError, setImgError] = useState(false);

    const safeImageUrl = getSafeImageUrl(post.image, imgError);

    // Prioritize 'categories' array, fallback to single 'category'
    const displayCategories = post.categories && post.categories.length > 0
        ? post.categories
        : post.category ? [post.category] : [];

    return (
        <Link href={`/blogs/${post.id}`} className="group block h-full">
            <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                    <Image
                        src={safeImageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => setImgError(true)}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {displayCategories.slice(0, 2).map((cat, idx) => (
                            <span
                                key={idx}
                                className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                            >
                                {cat}
                            </span>
                        ))}
                        {displayCategories.length > 2 && (
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                                +{displayCategories.length - 2}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-1">
                        {post.title}
                    </h3>

                    {/* Excerpt (Strip HTML) */}
                    <div className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow relative">
                        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/<[^>]+>/g, ' ').substring(0, 150) + '...' }} />
                    </div>

                    {/* Footer / Meta */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-medium">
                        <span>{post.display_author_name || 'BITS Chronicles'}</span>
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
