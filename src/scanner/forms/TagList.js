import React from 'react';
import { tags } from './listOfTags';
import { Link } from 'react-router-dom';

class TagList extends React.Component {

    render() {
        return (
            <ul className="breadcrumb">
                {
                    tags.map(tag => {
                        return (
                            <li key={tag.value}>
                                <Link to={"/scanner/" + tag.value}>
                                    {tag.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default TagList;