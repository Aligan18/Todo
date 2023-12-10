

import { FC, useState, useEffect, ReactNode } from 'react'
import ReactDOM from 'react-dom'


const Portal: FC<IPortalProps> = ({ children }) => {

    const [container, setContainer] = useState(document.createElement('div'))

    useEffect(() => {

        document.body.appendChild(container)

        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}


export default Portal

interface IPortalProps {
    children: ReactNode
}