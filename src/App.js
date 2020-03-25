import React from 'react';
import './App.css';
import Form from "./Form/form";



class App extends React.Component {

    state = {
        spanNumber: 1,
    }

    toClick = () => {
        this.setState({
            spanNumber: this.state.spanNumber + 1
        })
    }

    render = () => {
        return (
            <div className="App">
                <Form toClick={this.toClick} newInputValue={this.newInputValue} state={this.state}/>
            </div>
        );
    }
}

export default App;

