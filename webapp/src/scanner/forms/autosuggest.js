import React from 'react';
import { countries } from '../../common/lib/countries.js';

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : countries.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

export {getSuggestions, getSuggestionValue, renderSuggestion};