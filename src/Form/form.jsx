import React from 'react';
import styles from './form.module.css';



class Form extends React.Component {

    state = {
        spanNumber: 1,
    }

    number = React.createRef()
    inputAlert = React.createRef()

    increaseNumberAndAlert = () => {
        this.setState({
            spanNumber: this.state.spanNumber + 1
        })
        let todoAlert = this.inputAlert.current.value;
        alert(todoAlert)
        this.inputAlert.current.value = ''
    }

    render = () => {

        return (
            <div className={styles.form}>
                <span ref={this.number}>{this.state.spanNumber}</span>
                <input type="text" placeholder="Напиши здесь" ref={this.inputAlert}/>
                <button onClick={this.increaseNumberAndAlert}>Нажми на меня</button>
            </div>
        );
    }
}

export default Form;