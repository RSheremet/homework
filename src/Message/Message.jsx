import React from 'react';
import c from './Message.module.css';
import Photo from "./Photo";
import Map from "../funMap/Map";

const Message = (props) => {
    return (
        <div className={c.wrapper}>
            <div className={c.mesWrapper}>
                <Photo />
                <div className={c.message}>
                    <div className={c.date}>
                        08.03.2020
                    </div>
                    <div className={c.theMessage}>
                        Aliena vitia in oculus habemus a tergo nostra sunt. Aliena vitia in oculus habemus a tergo nostra sunt. Aliena vitia in oculus habemus a tergo nostra sunt. Aliena vitia in oculus habemus a tergo nostra sunt. Aliena vitia in oculus habemus a tergo nostra sunt. Aliena vitia in oculus habemus a tergo nostra sunt.
                    </div>
                    <div className={c.time}>
                        22:09
                    </div>
                </div>
            </div>
            <Map className={c.maps} />
        </div>
    )
}

export default Message;