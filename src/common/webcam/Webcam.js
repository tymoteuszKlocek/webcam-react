import * as React from 'react';
import { Link } from 'react-router-dom';

type State = {
    webcamID: string,
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
};
type Props = {
    webcamID: string,
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
};

export default class Webcam extends React.Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            webcamID: this.props.param.id,
            city: this.props.param.location.city,
            country: this.props.param.location.country,
            countryCode: this.props.param.location.country_code,
            views: this.props.param.statistics.views,
            lat: this.props.param.location.latitude,
            lng: this.props.param.location.longitude,
            position: this.props.param.location.latitude.toFixed(3) + ',' + this.props.param.location.longitude.toFixed(3),
            thumbnail: this.props.param.image.current.preview,
            title: this.props.param.title,
            link: this.props.param.url.current.desktop,
            type: this.props.type,
            showWebcam: 'thumbnail show'
        }
    }

    hide() {
        this.setState({showWebcam:'hide'});
    }

    render() {
        let btnScannerClass = 'hide';
        let btnGalleryClass = 'show';

        if (this.state.type === 'scanner') {
            btnScannerClass = 'show';
            btnGalleryClass = 'hide';
        }

        return (
            <div className={this.state.showWebcam}>
                <div className="webcam-img-container">
                    {/* TODO open in new window */}
                    <a href={this.state.link} target="_blank">
                        <img className="img-responsive" src={this.state.thumbnail} alt={this.state.city} />
                    </a>
                </div>

                <div className="media-rigth">

                    <div className="list-group">
                        <li className="list-group-item">
                            <h4 className="media-heading">
                                {this.state.title}
                            </h4>
                        </li>
                        <li className="list-group-item">Country:
                            {this.state.country}
                        </li>
                        <li className="list-group-item">City:
                            {this.state.city}
                        </li>
                        <li className="list-group-item">Views:
                            {this.state.views}
                        </li>
                        <li className="list-group-item">

                            <div className={btnScannerClass}>
                                <button type="button" className="btn btn-success" onClick={() => this.props.onSave()}>Save</button>
                                <button type="button" className="btn btn-default" onClick={() => this.hide()}>Hide</button>
                            </div>

                            <div className={btnGalleryClass}>
                                <button type="button" className="btn btn-danger" onClick={() => this.props.onDelete()}>Delete</button>
                            </div>

                        </li>

                        <div className="well">
                            <div>
                                <Link to="/map">Map</Link>
                            </div>
                            <div>
                                <Link to="/scanner/country/:{ countryCode }">More from this country</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}