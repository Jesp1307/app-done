import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>
                {props.userName}
            </NavLink>
        </div>
    )
}

export default DialogItem