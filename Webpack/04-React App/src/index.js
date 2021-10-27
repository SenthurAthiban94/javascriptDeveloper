import React from 'react';
import ReactDOM from 'react-dom';

function App({title}){
    return <div>{title}</div>
}

ReactDOM.render(
    <React.StrictMode>
        <App title="Hello React"/>
    </React.StrictMode>,document.getElementById('root')
);