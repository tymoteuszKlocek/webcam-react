// @flow
import React from 'react';
import Geolocation from '../common/services/geolocation';
import webcamSearch from '../common/services/webcamSearch'
import axios from 'axios';
import conf from '../common/config/conf.json';

import WebcamList from '../common/lists/WebcamList';
import CountrySearch from './forms/CountrySearch';
import TagSearch from './forms/TagSearch';
import NearBySearch from './forms/NearBySearch';
import PositionSearch from './forms/PositionSearch';

type State = {
    position: number,
    webcams: Object[]
}

class Scanner extends React.Component<State> {
    constructor() {
        super();
        this.state = {
            position: 0,
            webcams: [],
            bulba: ''
        }
    }

    componentDidMount() {
        Geolocation.getLocalisation().then(pos => {
            this.setState({ position: pos });
            console.log(this.state.position)
        });
    }

    searchWebcams = () => {
        webcamSearch('nearby=', '51.2464,22.5684').then(resp => {
            this.setState({ webcams: resp.data.result.webcams });
        }).catch(function(error) {
            console.log(error);
        });
        // let url = conf.webcamSearch.SRC + 'nearby=' + '51.2464,22.5684' + ',' + conf.webcamSearch.RANGE + conf.webcamSearch.PARAMS;
        // let that = this;
        // axios.get(url, {
        //     headers: { 'X-Mashape-Authorization': conf.webcamSearch.API_KEY }
        // }).then(resp => {
        //     this.setState({ webcams: resp.data.result.webcams });
        // }).catch(function(error) {
        //     console.log(error);
        // });
    }

    render() {
        return (
            <div>
                <h3>Scanner is a tool which lets you search for webcams all around the world.</h3>
                <CountrySearch />
                <TagSearch />
                <NearBySearch
                    position={this.state.position}
                    search={this.searchWebcams}
                />
                <PositionSearch />
                <WebcamList  />
            </div>
        )
    }
}

export default Scanner;