// @flow
import React from 'react';
import { connect } from 'react-redux';
import { fetchWebcams, hideWebcam, saveWebcam } from '../../actions/webcamActions';
import { fetchGalleries } from '../../actions/galleryActions';
import { setPosition, getPosition } from '../../actions/positionActions';
import { withRouter } from 'react-router-dom';
import conf from '../../common/config/conf.json';

// components
import WebcamList from '../WebcamList';
import CountrySearch from './forms/CountrySearch';
import TagSearch from './forms/TagSearch';
import NearBySearch from './forms/NearBySearch';

type Props = {
    type: string,
    galleries: Array<Object>,
    position: string,
    webcams: Object,
    history: Object,
    match: Object,
    location: Object,
    hideWebcam: (id: string) => void,
    setPosition: () => void,
    fetchGalleries: () => void,
    fetchWebcams: (url: string) => void,
    searchNearWebcams: () => void,
    saveWebcam: (galleryId: string, webcam: Object) => void;
}

class Scanner extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.state= {
            url: ''
        }
    }

    componentWillMount() {
        this.props.setPosition();
        this.props.fetchGalleries();
    }

    searchNearWebcams() {
        let url = conf.webcamSearch.NEAR + this.props.position + ',' + conf.webcamSearch.RANGE + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
        this.props.history.push(url);
    }

    searchWebcamsByTag(category: string, query: string) {
        let url = category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
        this.props.history.push(url);
    }

    searchWebcamsByCountry(category: string, query: string) {
        let url = category + query + conf.webcamSearch.PARAMS;
        this.searchRequest(url);
    }

    searchRequest(url: string) {
        this.props.fetchWebcams(url)
    }

    saveWebcam(galleryId: string, webcam: Object) {
        this.props.saveWebcam(galleryId, webcam);
    }

    hideWebcam(id: string) {
        this.props.hideWebcam(id);
    }

    render() {
        const { history } = this.props;
        
        return (
            <div className="container">
                <h3>Scanner is a tool which lets you search for webcams all around the world.</h3>
                <div>You are now at {history.pathname}</div>
                <CountrySearch
                    search={(cat, country) => this.searchWebcamsByCountry(cat, country)}
                />
                <TagSearch
                    search={(cat, tag) => this.searchWebcamsByTag(cat, tag)}
                />
                <NearBySearch
                    position={this.props.position}
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
        saveWebcam: (galleryId: string, webcam: Object) => {
            saveWebcam(galleryId, webcam);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Scanner));