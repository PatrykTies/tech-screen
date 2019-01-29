import React, { Component } from 'react';
import IdeasAddAndFilter from 'components/IdeasAddAndFilter';
import IdeasList from 'components/IdeasList';


class App extends Component {

    render() {
        return (
            <div>
                <IdeasAddAndFilter />
                <IdeasList />
            </div>
        );
    }
}

export default App;

