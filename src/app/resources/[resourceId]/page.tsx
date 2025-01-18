import React from 'react'
import { resources } from '@/resources_list'
import SingularPost from '@/components/resources/singular-post'
const SingleResourcePage = ({ params }: { params: { resourceId: string } }) => {
    resources.map((ele) => console.log(ele.id.toString(), params.resourceId))
    // const resource = resources.filter((ele) => {
    //     ele.posts.some((ele) => {
    //         ele.postId.toString() === params.resourceId
    //     })
    // })
    const resource = resources
        .flatMap((resource) => resource.posts)
        .find((post) => post.postId.toString() === params.resourceId);

    if (!resource) {
        return
    }
    return (
        <div className='w-full flex justify-center min-h-screen'>
            <div className='min-h-full mt-10 max-w-[1000px] '>
                <div className='mx-auto w-full'>
                    <SingularPost imageUrl={resource.imageUrl} resourceLink={resource.resourceLink} paragraphs={resource.paragraphs} linkText={resource.linkText} />
                </div>
            </div>
        </div>
    )
}

export default SingleResourcePage

