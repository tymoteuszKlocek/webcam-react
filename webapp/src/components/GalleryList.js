import React from 'react';
import { Link } from 'react-router-dom';

function GalleryList(props) {

    let listItems = undefined;
    console.log(props.galleries.length)
    if (props.galleries.length !== 0) {
        listItems = props.galleries.gallery.map(gallery => {
            return (
                <Link to={"dashboard/" + gallery.id} className="list-gorup-item" type="button" key={gallery.id}>
                    <li onClick={() => props.onClick(gallery.id)} >
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