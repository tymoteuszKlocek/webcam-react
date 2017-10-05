import React from 'react';
import conf from '../common/config/conf.json';
import { connect } from 'react-redux';

class MapPage extends React.Component {
    constructor(props) {
        super(props);
        let url = conf.map.SRC + conf.map.MODE + conf.map.API_KEY;
        let position = conf.map.POSITION;
        let localisation = this.props.position.position;
        let zoom = conf.map.ZOOM;
        let type = conf.map.TYPE;

        // set position when redirected from webcam
        if (!!this.props.match.params.localisation) {
            localisation = this.props.match.params.localisation
        }

        this.state = {
            src: url + position + localisation + zoom + type
        }

    }

    render() {
        return (
            <div className="container">
                <h3>Find the place on Google map.</h3>
                <h5>Default location is your position, but if you want to see any webcam on the map, just click the link below that webcam.</h5>
                <div >
                    <iframe title={'map'} src={this.state.src} width={600} height={450} ></iframe>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.position,
    };
};

export default connect(mapStateToProps)(MapPage);