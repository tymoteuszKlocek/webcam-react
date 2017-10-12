//@flow
import React from 'react';
import Autosuggest from 'react-autosuggest';
import {getSuggestions, getSuggestionValue, renderSuggestion} from './autosuggest.js';

type State = {
    value: string,
    suggestions: Array<string>,
}
export default class CountrySearch extends React.Component<{}, State> {

    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: []
        };
    }
    // methods from Autosuggest lib
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionSelected = (event, { suggestion }) => {
        let cat = 'country=';
        this.props.search(cat, suggestion.code);
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Type a country',
            value,
            onChange: this.onChange
        };
        
        return (
            <div className="alert alert-success">
                <p>Write the country name (eg. Poland, France) and select from list.</p>
                <div className="input-group">
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        onSuggestionSelected={this.onSuggestionSelected}
                    />
                </div>
            </div>
        );
    }
}