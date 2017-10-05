import React from 'react';
import { connect } from 'react-redux';
import { fetchGalleries } from '../actions/galleryActions';
import { uploadWebcams, deleteWebcam } from '../actions/webcamActions';
import GalleryList from './GalleryList';
import WebcamList from './WebcamList';

class Dashboard extends React.Component {

    componentWillMount() {
        this.props.fetchGalleries();
    }

    uploadWebcams(id) {
        this.props.uploadWebcams(id);
    }

    deleteWebcam(webcam) {
        this.props.deleteWebcam(webcam);
    }

    render() {
    
        return (
            <div className="container">
                <h3>List of your Galleries</h3>
                <p>Here you can see all your galleries or add new one.</p>

                <GalleryList
                    galleries={this.props.galleries}
                    onClick={(id) => { this.uploadWebcams(id) }}
                    type={'dashboard'}
                />
                <WebcamList
                    webcams={this.props.savedWebcams}
                    type={'dashboard'}
                    onDelete={(webcam) => this.deleteWebcam(webcam)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        galleries: state.galleries,
        position: state.position,
        savedWebcams: state.savedWebcams
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGalleries: () => {
            dispatch(fetchGalleries());
        },
        uploadWebcams: (id) => {
            dispatch(uploadWebcams(id));
        },
        deleteWebcam: (webcam) => {
            dispatch(deleteWebcam(webcam));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);