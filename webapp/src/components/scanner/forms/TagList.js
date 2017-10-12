import React from 'react';
import { tags } from './listOfTags';
import { Link } from 'react-router-dom';

type Props = {
    search: (category: string, query: string) => void
}

class TagList extends React.Component<Props> {

    render() {
        let category = 'category=';

        return (
            <ul className="breadcrumb">
                {
                    tags.map(tag => {
                        return (
                            <li key={tag.value} onClick={() => this.props.search(category, tag.value)} >
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