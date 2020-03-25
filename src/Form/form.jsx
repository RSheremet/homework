import React from 'react';
import styles from './form.module.css';
import Span from "./spanForForm";
import Input from "./inputForForm";



class Form extends React.Component {

    inputAlert = React.createRef()

    increaseNumberAndAlert = () => {
        this.props.toClick()
        let foralert = this.inputAlert.current.value
        alert(foralert)
        this.inputAlert.current.value = ''
    }

    render = () => {

        return (
            <div className={styles.form}>
                <Span num={this.props.state} result={this.increaseNumberAndAlert.toPlus}/>
                <Input inputValue={this.props.state.inputValue} inputAlert={this.inputAlert} />
                <button onClick={this.increaseNumberAndAlert}>Нажми на меня</button>
            </div>
        );
    }
}

export default Form;