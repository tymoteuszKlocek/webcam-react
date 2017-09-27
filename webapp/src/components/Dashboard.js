import React from 'react';
import { connect } from 'react-redux';
import { fetchGalleries } from '../actions/galleryActions';

//components
import GalleryList from './GalleryList';

class Dashboard extends React.Component {

    componentWillMount() {
        console.log('I fetch galleries')
        this.props.fetchGalleries();
    }

    render() {

        return (
            <div className="container">
                <h3>List of your Galleries</h3>
                <p>Here you can see all your galleries or add new one.</p>
                <GalleryList galleries={this.props.galleries} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        galleries: state.galleries,
        position: state.position
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGalleries: () => {
            dispatch(fetchGalleries());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);