import React from 'react';
import './App.css';
import Message from "./Message/Message";
import Map from "./funMap/Map";


class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <Message/>
            </div>
        );
    }
}

export default App;

