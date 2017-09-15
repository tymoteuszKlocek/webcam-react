import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class GalleryList extends React.Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem href="#link1">Link 1</ListGroupItem>
                <ListGroupItem href="#link2">Link 2</ListGroupItem>
                <ListGroupItem href="#link2">Link 3</ListGroupItem>
            </ListGroup>
        )
    }
}

export default GalleryList;