import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ResultsContainer from './Components/ResultsContainer/ResultsContainer';
import Searchbox from './Components/SearchBox/Searchbox';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText.length,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };
    render() {
        return (
            <div>
                <Header
                    headerAnimation={this.state.headerExpanded}
                    headTitle={this.state.headText}
                />
                {/*Using props method*/}
                <Searchbox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
