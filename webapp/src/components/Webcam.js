//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import GalleryList from './GalleryList';

type State = {
    showHideGalleryList: string,
}

type Props = {
    onSave?: (id: string) => void,
    hideWebcam?: () => void,
    onDelete?: () => void,
    showWebcam?: string,
    webcam: WebcamType,
    galleries: [Object],
    type: string,
    showHideGalleryList: string,
    key: any
}

type WebcamType = {
    webcamID?: string,
    city?: string,
    country?: string,
    countryCode?: string,
    views?: string,
    lat?: string,
    lng?: string,
    position?: string,
    thumbnail?: string,
    title?: string,
    link?: string,
    type?: string,
    showWebcam?: string
}

class Webcam extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showHideGalleryList: 'hide',
        };
    }

    onSave(id: string) {
        this.props.onSave(id);
        this.toggleGalleryList();
    }

    toggleGalleryList() {
        let toggle = (this.state.showHideGalleryList === 'hide') ? 'show' : 'hide';
        this.setState({ 'showHideGalleryList': toggle });
    }

    render() {

        let btnScannerClass = 'hide';
        let btnGalleryClass = 'show';

        if (this.props.type === 'scanner') {
            btnScannerClass = 'show';
            btnGalleryClass = 'hide';
        }

        return (
            <div className={this.props.showWebcam}>

                <div className="webcam-img-container">
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
                                <button type="button" className="btn btn-success" onClick={() => this.toggleGalleryList()}>Save</button>
                                <button type="button" className="btn btn-default" onClick={() => this.props.hideWebcam(this.props.webcam.webcamID)}>Hide</button>
                            </div>

                            <div className={btnGalleryClass}>
                                <button type="button" className="btn btn-danger" onClick={() => this.props.onDelete()}>Delete</button>
                            </div>

                            {/* GalleryList id displayed when you want to save webcam */}
                            <div className={this.state.showHideGalleryList} >
                                <GalleryList
                                    type={this.props.type}
                                    galleries={this.props.galleries}
                                    onClick={(galleryId) => this.onSave(galleryId)}
                                />
                            </div>

                        </li>

                        <div className="well">
                            <div>
                                <Link to={'/map/' + this.props.webcam.lat + ',' + this.props.webcam.lng}>Map</Link>
                            </div>
                            <div>
                                <Link to={'/scanner/' + this.props.webcam.country}>More from this country</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Webcam;