// @flow
import React from 'react';
import conf from '../../common/config/conf.json';
import { connect } from 'react-redux';
import { fetchWebcams, deleteWebcam } from '../../actions/webcamActions';

import { setPosition, getPosition } from '../../actions/positionActions';

// components
import WebcamList from '../../common/lists/WebcamList';
import CountrySearch from './forms/CountrySearch';
import TagSearch from './forms/TagSearch';
import NearBySearch from './forms/NearBySearch';
// TODO import PositionSearch from './forms/PositionSearch';

class Scanner extends React.Component {

    componentWillMount() {
        this.props.setPosition();
    }

    searchNearWebcams() {
        let url = conf.webcamSearch.NEAR + this.props.position.position + ',' + conf.webcamSearch.RANGE + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchWebcamsByTag(category, query) {
        let url = category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchWebcamsByCountry(category, query) {
        let url = category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchRequest(url) {
        this.props.fetchWebcams(url)
    }

    save() {
        console.log('save')
    }

    delete() {
        console.log('del')
    }

    render() {
        console.log(this.props)
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
                    search={() => this.searchNearWebcams()}
                />

                <WebcamList
                    webcams={this.props.webcams}
                    type={'scanner'}
                    onSave={() => this.save()}
                    onDelete={() => this.delete()}
                    hideWebcam={(id) => this.props.deleteWebcam(id)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        session: state.session,
        webcams: state.webcams,
        position: state.position,
        galleries: state.galleries
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWebcams: (url) => {
            dispatch(fetchWebcams(url));
        },
        setPosition: () => {
            dispatch(setPosition());
        },
        getPosition: () => {
            dispatch(getPosition());
        },
        deleteWebcam: (id) => {
            dispatch(deleteWebcam(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);