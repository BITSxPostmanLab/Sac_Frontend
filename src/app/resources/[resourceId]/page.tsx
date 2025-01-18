import React from 'react'
import { resources } from '@/resources_list'
import SingularPost from '@/components/resources/singular-post'
const SingleResourcePage = ({ params }: { params: { resourceId: string } }) => {
    resources.map((ele) => console.log(ele.id.toString(), params.resourceId))
    const resource = resources.filter((ele) => ele.id.toString() === String(params.resourceId))
    console.log(resource)
    return (
        <div className='min-h-full mt-10'>

            {
                resource.map((ele) => {
                    return (
                        <div>
                            {ele.posts.map((ele, key) => {
                                return (
                                    <div key={key}>
                                        <SingularPost imageUrl={ele.imageUrl} resourceLink={ele.resourceLink} paragraphs={ele.paragraphs} linkText={ele.linkText} />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default SingleResourcePage

