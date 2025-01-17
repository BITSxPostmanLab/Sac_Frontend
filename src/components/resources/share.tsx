"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Heart } from "lucide-react";

export default function SocialShare() {
  const handleShare = (platform: "twitter" | "facebook") => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check this out!");

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  return (
    <div className=" mr-auto space-y-4 p-4 pl-20 mb-20">
      <div className="text-sm text-muted-foreground uppercase tracking-wide">
        Share this:
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("twitter")}
          className="flex items-center gap-2"
        >
          <Twitter className="h-4 w-4" />
          Twitter
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("facebook")}
          className="flex items-center gap-2"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </Button>
      </div>

      <div className="pt-4 flex items-center gap-2 ">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 border-[1px] shadow-sm `}
        >
          <Heart className={`h-4 w-4`} /> Like
        </Button>
        Be the first one to like this
      </div>
    </div>
  );
}
