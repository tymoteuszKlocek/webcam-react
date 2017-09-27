import React from 'react';


class GalleryList extends React.Component {

    render() {
        return (
            <ul className="list-gorup">
                <li className="list-group-item"><a href="/link1">iji</a></li>
                <li className="list-group-item"><a href="/link2">Link 2</a></li>
                <li className="list-group-item"><a href="/link2">Link 3</a></li>
            </ul>
        );
    }
}



export default GalleryList;