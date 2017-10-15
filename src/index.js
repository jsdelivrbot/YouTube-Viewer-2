import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDUe5bcSJoHHD2az4QpwMoExkSUQAOEV1w';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));