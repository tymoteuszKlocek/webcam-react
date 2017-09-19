import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    city: string,
    country: string,
    countryCode: string,
    views: string,
    lat: string,
    lng: string,
    position: string,
    thumbnail: string,
    type: string,
    title: string,
    link: string
}

export default class Webcam extends React.Component<Props> {
    render() {
        return (<div>webcammama</div>
            // <div className="thumbnail">
            //     <div className="webcam-img-container">
            //         <Link to={ this.props.link }>
            //             <img className="img-responsive" src="{ thumbnail }" alt="webcam" />
            //         </Link>
            //     </div>

            //     <div className="media-rigth">

            //         <div className="list-group">
            //             <li className="list-group-item">
            //                 <h4 className="media-heading">
            //                     {this.props.title}
            //             </h4>
            //             </li>
            //             <li className="list-group-item">Country:
            //             { this.props.country }
            //         </li>
            //             <li className="list-group-item">City:
            //             { this.props.city }
            //         </li>
            //             <li className="list-group-item">Views:
            //             { this.props.views }
            //         </li>
            //             <li className="list-group-item">

            //                 <div id="btn-scanner">
            //                     <button type="button" className="btn btn-success" id="save">Save</button>
            //                     <button type="button" className="btn btn-default" id="hide">Hide</button>
            //                 </div>

            //                 <div id="btn-list">
            //                     <button type="button" className="btn btn-danger" id="delete">Delete</button>
            //                 </div>

            //                 <div id="webcam-dashboard"></div>

            //             </li>
            //             <div className="well">
            //                 <div>
            //                     <Link to="/show-map/:{ position }/:{ country }">Map</Link>
            //                 </div>
            //                 <div>
            //                     <Link to="/scanner/country/:{ countryCode }">More from this country</Link>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}