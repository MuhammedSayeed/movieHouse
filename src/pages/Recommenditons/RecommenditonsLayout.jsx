import React from 'react'
import './RecommenditonsLayout.scss'
import { Outlet } from 'react-router-dom'
function RecommenditonsLayout() {
    return <>
        <div className="RecommenditonsLayout-container">
            <div className="RecommenditonsLayout-content">
                <div className="outlet">
                <Outlet />

                </div>

            </div>
        </div>
    </>
}

export default RecommenditonsLayout