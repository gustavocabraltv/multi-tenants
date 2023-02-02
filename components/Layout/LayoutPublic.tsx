import React from 'react'

interface Props {
    children: React.ReactNode
}

const LayoutPublic = ({ children }: Props) => {
    return (
        <>
            <h1>Cabeçalho</h1>
            {children}
        </>
    )
}
export default LayoutPublic
