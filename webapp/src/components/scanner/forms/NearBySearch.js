// @flow
import React from 'react';

type Props = {
    position: string,
    search: () => void,
};

class NearBySearch extends React.Component<Props> {

    render() {
        return (
            <div className="alert alert-success">
                <h5>You can also quickly find webcams in range of 200km from your current localisation. Just press the button below.</h5>

                    <button type="button" className="btn btn-info findMe" onClick={() => this.props.search()}>
                       <span className="glyphicon glyphicon-screenshot" aria-hidden="true" /> Find near me
                    </button>
            </div >
        )
    }
}

export default NearBySearch;