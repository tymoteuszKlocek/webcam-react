// @flow
import React from 'react';
import Geolocation from '../common/services/geolocation';
import axios from 'axios';
import conf from '../common/config/conf.json';

import WebcamList from '../common/lists/WebcamList';
import CountrySearch from './forms/CountrySearch';
import TagSearch from './forms/TagSearch';
import NearBySearch from './forms/NearBySearch';
// TODO import PositionSearch from './forms/PositionSearch';

type State = {
    position: number,
    webcams: Array,
    type: string
}

class Scanner extends React.Component<State> {
    constructor() {
        super();
        this.state = {
            position: 0,
            webcams: [],
            type: 'scanner'
        }
    }

    componentDidMount() {
        Geolocation.getLocalisation().then(pos => {
            this.setState({ position: pos });
        });
    }
    // is this normal way of def. methods?
    searchNearWebcams() {
        let url = conf.webcamSearch.SRC + conf.webcamSearch.NEAR + this.state.position + ',' + conf.webcamSearch.RANGE + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchWebcamsByTag(category, query) {
        let url = conf.webcamSearch.SRC + category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchWebcamsByCountry(category, query) {
        let url = conf.webcamSearch.SRC + category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchRequest(url) {
        axios.get(url, {
            headers: { 'X-Mashape-Authorization': conf.webcamSearch.API_KEY }
        }).then(resp => {
            this.setState({ webcams: resp.data.result.webcams });
        }).catch(function (error) {
            console.log(error);
        });
    }

    save() {
        console.log('savve')
    }

    delete() {
        console.log('del')
    }

    render() {
        return (
            <div>
                <h3>Scanner is a tool which lets you search for webcams all around the world.</h3>
                <CountrySearch
                    search={(cat, country) => this.searchWebcamsByCountry(cat, country)}
                />
                <TagSearch
                    search={(cat, tag) => this.searchWebcamsByTag(cat, tag)}
                />
                <NearBySearch
                    position={this.state.position}
                    search={() => this.searchNearWebcams()}
                />
                <WebcamList
                    webcams={this.state.webcams}
                    type={this.state.type}
                    onSave={() => this.save()}
                    onDelete={() => this.delete()}
                />
            </div>
        )
    }
}

export default Scanner;