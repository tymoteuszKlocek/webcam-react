//@flow
import React from 'react';
import conf from '../common/config/conf.json';
import { connect } from 'react-redux';

type State = {
    src: string,
}

type Store = {
    position: string,
}

class MapPage extends React.Component<{match: Object, position: string}, State> {
    constructor(props) {
        super(props);
        let url: string = conf.map.SRC + conf.map.MODE + conf.map.API_KEY;
        let position: string = conf.map.POSITION;
        let localisation: string = this.props.position;
        let zoom: string = conf.map.ZOOM;
        let type: string = conf.map.TYPE;

        // set position when redirected from webcam
        if (!!this.props.match.params.localisation && this.props.match.params.localisation !== undefined) {
            localisation = this.props.match.params.localisation;
        }

        this.state = {
            src: url + position + localisation + zoom + type,
        }

    }

    render() {
        return (
            <div className="container">
                <h3>Find the place on Google map.</h3>
                <h5>Default location is your position, but if you want to see any webcam on the map, just click the link below that webcam.</h5>
                <div >
                    <iframe src={this.state.src} width={600} height={450} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: Store) => {
    return {
        position: state.position,
    };
};

export default connect(mapStateToProps)(MapPage);