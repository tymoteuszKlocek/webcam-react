import React from 'react';
import { Link } from 'react-router-dom';

class Gallery extends React.Component {
    onClick(id) {
        this.props.onClick(id)
    }

    onDelete(id) {
        this.props.onDelete(id);
    }

    render() {
        const gallery = this.props.gallery;

        if (this.props.type === 'scanner') {
            return (
                <button className="list-group-item">
                    <li onClick={() => this.onClick(gallery.id)} >
                        {gallery.title}
                    </li>
                </button>
            )
        } else {
            return (
                <Link to={"/dashboard/" + gallery.id}>
                    <div className="list-group-item">
                        <li onClick={() => this.onClick(gallery.id)} >
                            {gallery.title}
                        <div onClick={() => this.onDelete(gallery.id)} className="btn btn-default btn-sm delete-btn"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></div>
                        </li>
                    </div>
                </ Link>
            )
        }

    }

}



export default Gallery;