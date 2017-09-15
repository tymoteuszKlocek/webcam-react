import React from 'react';

import CountrySearch from './Forms/CountrySearch';
import TagSearch from './Forms/TagSearch';
import NearBySearch from './Forms/NearBySearch';
import PositionSearch from './Forms/PositionSearch'

class Scanner extends React.Component {
    render() {
        return (
            <div>
                <h2>I am Scanner with 4 forms</h2>
                <CountrySearch />
                <TagSearch />
                <NearBySearch />
                <PositionSearch />
            </div>
        )
    }
}

export default Scanner;