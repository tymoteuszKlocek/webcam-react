//@flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    onClick: (id: string) => void,
    onDelete: (id: string) => void,
    gallery: Object,
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
                    <li onClick={() => this.onClick(gallery.id)} >
                        <Link to={'/dashboard/' + gallery.id}>
                            {gallery.title}
                        </ Link>
                        <div onClick={() => this.onDelete(gallery.id)} className="btn btn-default btn-sm delete-btn"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></div>
                    </li>
                </div>
            );
        }

    }

}



export default Gallery;