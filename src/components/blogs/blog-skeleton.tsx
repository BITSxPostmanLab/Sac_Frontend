import React from 'react'
import { Skeleton } from '../ui/skeleton'

const BlogSkeleton = ({ cards }: { cards: number }) => {

    return (

        Array(cards).fill(0).map((_, i) => {
            return (
                <div className="grid md:grid-cols-3 w-full mb-20 max-h-[600px] " key={i}>
                    <div className="w-full md:ml-auto mx-auto md:mx-0 mb-10 mt-5">
                        <Skeleton
                            className="w-[100%] min-h-[500px] ml-auto object-cover"
                        />
                    </div>

                    <div className="px-5 sm:px-10 md:col-span-2 text-xl my-auto flex flex-col gap-5 h-full ">
                        <Skeleton className="text-3xl font-semibold h-10 full mt-5" />

                        <Skeleton
                            className="prose prose-lg max-w-none overflow-y-hidden h-full w-full hidden sm:block"
                            style={{
                                maxHeight: "500px",
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))",
                                maskImage:
                                    "linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))",
                                paddingRight: "10px",
                            }}
                        />

                    </div>
                </div>
            )
        })

    )
}

export default BlogSkeleton

