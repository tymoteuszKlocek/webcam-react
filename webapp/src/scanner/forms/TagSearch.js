import React from 'react';
import TagList from './TagList'


type Props = {
    search: (category: string, query: string) => void
}

class TagSearch extends React.Component<Props> {
    render() {
        return (
            <TagList search={(cat, tag) => this.props.search(cat, tag)}/>
        );
    }
}

export default TagSearch;