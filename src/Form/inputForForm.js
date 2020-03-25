import React from 'react';
import styles from './form.module.css';



class Input extends React.Component {

    render = () => {

        return (
            <div className={styles.input}>
                <input type="text" placeholder="Напиши здесь" ref={this.props.inputAlert} />
            </div>
        );
    }
}

export default Input;