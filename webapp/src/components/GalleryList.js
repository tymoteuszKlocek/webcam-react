import React from 'react';
import { connect } from 'react-redux';
import { saveGallery, deleteGallery } from '../actions/galleryActions';
import Gallery from './Gallery';
import GalleryForm from './GalleryForm';

class GalleryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHideGalleryForm: 'hide',
            showHideBtn: 'show',
        }
    }

    addGallery(name) {
        if (name !== '' || undefined) {
            this.props.saveGallery(name);
            this.toggleGalleryForm();
            this.toggleGalleryBtn();
        } else {
            alert('Pleas add gallery name');
        }
    }

    deleteGallery(id) {
        this.props.deleteGallery(id);
    }

    toggleGalleryForm() {
        let toggleForm = (this.state.showHideGalleryForm === 'hide') ? 'show' : 'hide';
        this.setState({ 'showHideGalleryForm': toggleForm });
        this.toggleGalleryBtn()
    }

    toggleGalleryBtn() {
        let toggleBtn = (this.state.showHideBtn === 'show') ? 'hide' : 'show';        
        this.setState({ 'showHideBtn': toggleBtn });
    }

    render() {

        let galleries = this.props.galleries;
        let listItems = undefined;

        if (this.props.galleries !== undefined) {

            listItems = galleries.map(gallery => {
                return (
                    <Gallery
                        key={gallery.id}
                        gallery={gallery}
                        type={this.props.type}
                        onClick={(id) => this.props.onClick(id)}
                        onDelete={(id) => this.deleteGallery(id)}
                    />
                )
            })

        } else {
            return null;
        }

        return (
            <div className="panel-body">
                <ul className="list-group">{listItems}</ul>

                <button className={"btn btn-primary " + this.state.showHideBtn} onClick={() => this.toggleGalleryForm()}>New Gallery</button>
                <div className={this.state.showHideGalleryForm}>
                    <GalleryForm onClick={(name) => { this.addGallery(name) }} />
                </div>
            </div >
        )
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
        saveGallery: (name) => {
            dispatch(saveGallery(name));
        },
        deleteGallery: (id) => {
            dispatch(deleteGallery(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryList);