import React from 'react';

import CountrySearch from './forms/CountrySearch';
import TagSearch from './forms/TagSearch';
import NearBySearch from './forms/NearBySearch';
import PositionSearch from './forms/PositionSearch'

class Scanner extends React.Component {
    render() {
        return (
            <div>
                <h3>Scanner is a tool which lets you search for webcams all around the world.</h3>
                <CountrySearch />
                <TagSearch />
                <NearBySearch />
                <PositionSearch />
            </div>
        )
    }
}

export default Scanner;