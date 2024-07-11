import React from 'react'
import '../styles/Content.css'
import {Menu} from './Menu'
import Sidebar from './Sidebar'

export const Content = ({ children }) => {
    return (
        <>
            <Menu />
            <div className="dashboard">
                <Sidebar />
                <div className="dashboard--content">
                    <div className="content">{children}</div>
                </div>
            </div>
        </>
    )
}

export default Content
