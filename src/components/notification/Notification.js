import React from "react";
import ReactDOM from 'react-dom'
import style from './Notification.module.css'

const Template = ({closePopUp}) => {
    return (
        <div className={style.notifications}>
            Notification <button onClick={closePopUp}>Close</button>
        </div>
    )
}

export const Notification = ({isShowPopUp, setIsShowPopUp}) => {

    const closePopUp = () => {
        setIsShowPopUp(false)
    }

    const portal = document.getElementById('notification')
    if (portal && isShowPopUp) {
        return ReactDOM.createPortal(<Template closePopUp={closePopUp}/>, portal)
    }
}