import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Search from './components/Search'

class MernClient
    extends React.Component {
    render() {
        return (
            <h1>MERN Music Client</h1>
        )
    }
}

ReactDOM.render(
    <div>
        <MernClient/>
        <Search/>
    </div>,
    document.getElementById('root'));

