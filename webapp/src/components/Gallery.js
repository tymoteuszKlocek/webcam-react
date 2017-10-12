//@flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    gallery: Object,
    type: string,
    key?: any,
    onClick: (id: string) => void,
    onDelete?: (id: string) => void,
}

class Gallery extends React.Component<Props> {
    onClick(id: string) {
        this.props.onClick(id);
    }

    onDelete(id: string) {
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
            );

        } else {

            return (
                <div className="list-group-item">
                    <li  >
                        <Link
                            to={'/dashboard/' + `${gallery.id}`}
                            onClick={() => this.onClick(gallery.id)}
                        >
                            {gallery.title}
                        </ Link>
                        <button
                            onClick={() => this.onDelete(gallery.id)}
                            className="btn btn-default btn-sm delete-btn"
                        >
                            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
                        </button>
                    </li>
                </div>
            );
        }
    }
}

export default Gallery;