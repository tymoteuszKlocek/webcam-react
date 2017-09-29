import React from 'react';
import { connect } from 'react-redux';
import { fetchGalleries } from '../actions/galleryActions';
import { uploadWebcams } from '../actions/webcamActions';
import GalleryList from './GalleryList';
import WebcamList from './WebcamList';

class Dashboard extends React.Component {

    componentWillMount() {
        this.props.fetchGalleries();
    }

    render() {
        console.log('dash prop', this.props);
        return (
            <div className="container">
                <h3>List of your Galleries</h3>
                <p>Here you can see all your galleries or add new one.</p>
                <GalleryList
                    galleries={this.props.galleries}
                    onClick={(id) => { this.props.uploadWebcams(id) }}
                />
                <WebcamList webcams={this.props.webcams} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        galleries: state.galleries,
        position: state.position,
        webcams: state.savedWebcams
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGalleries: () => {
            dispatch(fetchGalleries());
        },
        uploadWebcams: (id) => {
            dispatch(uploadWebcams(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);