import React from 'react';
import {Link} from 'react-router-dom';

function GalleryList(props) {

    let listItems = undefined;

    if (props.galleries.gallery) {

        listItems = props.galleries.gallery.map(gallery => {
            return (
                <Link to={"webcam/:"+gallery.id} key={gallery.id}>
                    <li className="list-gorup-item">
                        {gallery.title}
                    </li>
                </Link>
            )
        })
    }

    return (

        <ul className="list-group">{listItems}</ul>
    )
}

export default GalleryList;