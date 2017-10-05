// @flow
import React from 'react';
import conf from '../../common/config/conf.json';
import { connect } from 'react-redux';
import { fetchWebcams, hideWebcam, saveWebcam } from '../../actions/webcamActions';
import { fetchGalleries } from '../../actions/galleryActions';
import { setPosition, getPosition } from '../../actions/positionActions';

// components
import WebcamList from '../WebcamList';
import CountrySearch from './forms/CountrySearch';
import TagSearch from './forms/TagSearch';
import NearBySearch from './forms/NearBySearch';
// TODO import PositionSearch from './forms/PositionSearch';

class Scanner extends React.Component {

    componentWillMount() {
        this.props.setPosition();
        this.props.fetchGalleries();
    }

    searchNearWebcams() {
        let url = conf.webcamSearch.NEAR + this.props.position.position + ',' + conf.webcamSearch.RANGE + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
        console.log(url)
    }

    searchWebcamsByTag(category, query) {
        let url = category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
        console.log(url)
    }

    searchWebcamsByCountry(category, query) {
        let url = category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchRequest(url) {
        this.props.fetchWebcams(url)
    }

    saveWebcam(galleryId, webcam) {
        this.props.saveWebcam(galleryId, webcam);
    }

    hideWebcam(id) {
        console.log('hideWebcam', id);
        this.props.hideWebcam(id);
    }

    render() {
        return (
            <div className="container">
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
                    galleries={this.props.galleries}
                    type={'scanner'}
                    onSave={(galleryId, webcam) => this.saveWebcam(galleryId, webcam)}
                    hideWebcam={(id) => this.hideWebcam(id)}
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
        fetchGalleries: () => {
            dispatch(fetchGalleries());
        },
        setPosition: () => {
            dispatch(setPosition());
        },
        getPosition: () => {
            dispatch(getPosition());
        },
        hideWebcam: (id) => {
            dispatch(hideWebcam(id));
        },
        saveWebcam: (galleryId, webcam) => {
            saveWebcam(galleryId, webcam);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);