// @flow
import React from 'react';
import Webcam from './Webcam';

type WebcamType = {
    webcamID: string,
    city: string,
    country: string,
    countryCode: string,
    views: string,
    lat: string,
    lng: string,
    position: string,
    thumbnail: string,
    title: string,
    link: string,
    type: string,
    showWebcam?: string
}

type Props = {
    type: string,
    param?: Object,
    webcams: {
        collection: Array<Object>
    },
    galleries?: Array<Object>,
    onSave?: (id: string, webcam: WebcamType) => void,
    onDelete?: (webcam: Object) => void,
    hideWebcam?: (webcamID: string) => void,
}

class WebcamList extends React.Component<Props, WebcamType> {
    onSave(id: string, webcam: WebcamType) {
        this.props.onSave(id, webcam);
    }

    render() {
        //TODO: ask if this is good idea to have if(){} here
        // WebcamsList for Dashboard
        if (this.props.type === 'dashboard' && this.props.webcams.collection !== undefined) {
            return (
                <div>
                    <h4>List of webcams</h4>
                    {
                        this.props.webcams.collection.map((webcam) => {
                            return (
                                <Webcam
                                    key={webcam.webcamID}
                                    webcam={webcam}
                                    type={this.props.type}
                                    onDelete={() => this.props.onDelete(webcam)}
                                    showHideGalleryList={'hide'}
                                />
                            );
                        })
                    }
                </div>
            )
        }
        // WebcamsList for Scanner
        if (this.props.type === 'scanner' && this.props.webcams.collection !== undefined) {
            return (
                <div>
                    {
                        this.props.webcams.collection.map((webcam) => {
                            return (
                                <Webcam
                                    key={webcam.webcamID}
                                    webcam={webcam}
                                    galleries={this.props.galleries}
                                    type={this.props.type}
                                    onSave={(id) => this.onSave(id, webcam)}
                                    hideWebcam={() => this.props.hideWebcam((webcam.webcamID))}
                                    showHideGalleryList={'hide'}
                                />
                            );

                        })
                    }
                </div>
            )
        }
        else {
            return <h5>No webcams here. Add new with scanner</h5>;
        }
    }
}
export default WebcamList;