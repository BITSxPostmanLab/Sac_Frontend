import React from "react";
import { resources } from "@/resources_list";
import SingularPost from "@/components/resources/singular-post";

const SingleResourcePage = async ({
  params,
}: {
  params: Promise<{ resourceId: string }>;
}) => {
  const { resourceId } = await Promise.resolve(params);

  //resources.map((ele) => console.log(ele.id.toString(), resourceId));

  const resource = resources
    .flatMap((resource) => resource.posts)
    .find((post) => post.postId.toString() === resourceId);

  if (!resource) {
    return null;
  }

  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="min-h-full mt-10 max-w-[1000px] px-3">
        <div className="mx-auto w-full">
          <SingularPost
            imageUrl={resource.imageUrl}
            resourceLink={resource.resourceLink}
            paragraphs={resource.paragraphs}
            linkText={resource.linkText}
            postId={resource.postId}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleResourcePage;

