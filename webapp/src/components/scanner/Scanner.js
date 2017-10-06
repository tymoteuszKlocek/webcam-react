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

type Props = {
    galleries: Array<Object>,
    position: string,
    webcams: Array<Object>,
    hideWebcam: (id: string) => void,
    setPosition: () => void,
    fetchGalleries: () => void,
    fetchWebcams: (url: string) => void,
    searchNearWebcams: () => void,
    saveWebcam: (galleryId: string, webcam: string) => void;
}

class Scanner extends React.Component<Props, {}> {

    componentWillMount() {
        this.props.setPosition();
        this.props.fetchGalleries();
    }
    searchNearWebcams() {
        let url = conf.webcamSearch.NEAR + this.props.position + ',' + conf.webcamSearch.RANGE + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
        console.log(url)
    }

    searchWebcamsByTag(category: string, query: string) {
        let url = category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchWebcamsByCountry(category: string, query: string) {
        let url = category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchRequest(url: string) {
        this.props.fetchWebcams(url)
    }

    saveWebcam(galleryId: string, webcam: string) {
        this.props.saveWebcam(galleryId, webcam);
    }

    hideWebcam(id: string) {
        this.props.hideWebcam(id);
    }

    render() {
        console.log('sac', this.props.position)

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
        galleries: state.galleries,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWebcams: (url: string) => {
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
        hideWebcam: (id: string) => {
            dispatch(hideWebcam(id));
        },
        saveWebcam: (galleryId: string, webcam: string) => {
            saveWebcam(galleryId, webcam);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);