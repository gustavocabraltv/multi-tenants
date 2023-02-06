import React from 'react'
interface Props {
    children: React.ReactNode
}

const Heading1 = ({ children }: Props) => {
    return <h2 className="text-gray-400 text-md">{children}</h2>
}

export default Heading1
