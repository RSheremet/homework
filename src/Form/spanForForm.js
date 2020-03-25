import React from 'react';
import styles from './form.module.css';



class Span extends React.Component {

    number = React.createRef()

    render = () => {

        return (
            <div className={styles.span}>
                <span ref={this.number}>{this.props.num.spanNumber}</span>
            </div>
        );
    }
}

export default Span;