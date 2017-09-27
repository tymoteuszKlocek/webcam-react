// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    position: number,
    search: () => void
}

class NearBySearch extends React.Component<Props> {

    render() {
        return (
            <div className="alert alert-success">
                <h5>You can also quickly find webcams in range of 200km from your current localisation. Just press the button below.</h5>

                <Link to={"/scanner/near/:" + this.props.position} >
                    <button type="button" className="btn btn-info findMe" onClick={() => this.props.search()}>
                        <span className="glyphicon glyphicon-screenshot" aria-hidden="true"></span> Find near me
                    </button>
                </Link >
            </div >
        )
    }
}

export default NearBySearch;