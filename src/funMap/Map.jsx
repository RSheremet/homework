import React from 'react';
import c from './Map.module.css';

const Map = (props) => {
    let qualities = ["коммунист", "марксист", "ленинист"];

    function Text(elem) {
        let styleClass;
        if (elem.property=== "марксист") {
            styleClass = 'red'
        } else {
            styleClass = ''
        }
        return <div className={c[styleClass] + ' ' + c.ordinary}>{elem.property}</div>
    }

    function QualityFunc() {
        return (
            qualities.map((quality, index) =>
                <Text property={quality} />
            )
        )
    }

    return (
        <div className={c.wrapperMap}>
            <QualityFunc qualities={qualities} />
        </div>
    )
}

export default Map;