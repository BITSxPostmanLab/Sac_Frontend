"use client"
import SearchBar from '@/components/SearchBar'
import React from 'react'
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Node,
    Edge,
} from "reactflow"
import "reactflow/dist/style.css"
import { initialEdges, initialNodes } from '../../../constants'
import { useRef } from 'react'

const DiscoverPage = () => {

    const containerRef = useRef(null)
    return (
        <div className='p-3 w-full h-full space-y-10'>

            <div className='mt-10'>
                <SearchBar />
            </div>
            <div ref={containerRef} className='rounded-lg border-black border-2  w-full h-full '>
                <ReactFlow nodes={initialNodes} edges={initialEdges} defaultViewport={{
                    x: 450,
                    y: -80,
                    zoom: 1.05,
                }} zoomOnScroll={true} className='' >
                    {/* <Background /> */}
                    {/* <Controls /> */}
                </ReactFlow>
            </div>

        </div>
    )
}

export default DiscoverPage