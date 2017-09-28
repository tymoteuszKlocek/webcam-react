import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Webcam extends React.Component {

    render() {
        let btnScannerClass = 'hide';
        let btnGalleryClass = 'show';
        console.log('props webcam', this.props.webcams);

        if (this.props.webcam.type === 'scanner') {
            btnScannerClass = 'show';
            btnGalleryClass = 'hide';
        }

        return (
            <div className={this.props.webcam.showWebcam}>
                <div className="webcam-img-container">
                    {/* TODO open in new window */}
                    <a href={this.props.webcam.link} target="_blank">
                        <img className="img-responsive" src={this.props.webcam.thumbnail} alt={this.props.webcam.city} />
                    </a>
                </div>

                <div className="media-rigth">
                    <div className="list-group">
                        <li className="list-group-item">
                            <h4 className="media-heading">
                                {this.props.webcam.title}
                            </h4>
                        </li>
                        <li className="list-group-item">Country:
                            {this.props.webcam.country}
                        </li>
                        <li className="list-group-item">City:
                            {this.props.webcam.city}
                        </li>
                        <li className="list-group-item">Views:
                            {this.props.webcam.views}
                        </li>

                        <li className="list-group-item">

                            <div className={btnScannerClass}>
                                <button type="button" className="btn btn-success" onClick={() => this.props.onSave()}>Save</button>
                                <button type="button" className="btn btn-default" onClick={() => this.props.hideWebcam(this.props.webcam.webcamID)}>Hide</button>
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