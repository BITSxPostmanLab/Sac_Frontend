import React from 'react'

const Handouts = () => {
    const handouts = [
        { title: "SEM 1 (2021-22)", href: "#" },
        { title: "SEM 2 (2020-21)", href: "#" },
        { title: "SEM 1 (2020-21)", href: "#" },
        { title: "SEM 2 (2019-20)", href: "#" },
        { title: "SEM 1 (2019-20)", href: "#" },
        { title: "2017-18", href: "#" },
    ]
    return (
        <>
            <div className="text-3xl font-medium mb-8">Handouts</div>
            <div className="space-y-8 text-center mb-10 ">
                {handouts.map((handout, index) => (
                    <div key={index}>
                        <a
                            href={handout.href}
                            className="text-blue-600 hover:text-blue-800  text-xl underline"
                        >
                            {handout.title}
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Handouts