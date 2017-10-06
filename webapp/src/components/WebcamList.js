// @flow
import React from 'react';
import Webcam from './Webcam';

type Props = {
    type: string,
    param?: Object,
    webcams?: Array<Object>,
    galleries: Array<Object>,
    onSave?: (id: string, webcam: WebcamType) => void,
    onDelete: (webcam: Object) => void,
    hideWebcam?: (webcamID: string) => void,
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

class WebcamList extends React.Component<Props, WebcamType> {
    onSave(id: string, webcam: WebcamType) {
        this.props.onSave(id, webcam)
    }

    render() {
        // WebcamsList for Dashboard
        if (this.props.type === 'dashboard' && this.props.webcams !== undefined) {
            return (
                <div>
                    {
                        this.props.webcams.map((webcam) => {
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
        if (this.props.type === 'scanner' && this.props.webcams !== undefined) {
            return (
                <div>
                    {
                        this.props.webcams.map(webcam => {
                            return (
                                <Webcam
                                    key={webcam.webcamID}
                                    webcam={webcam}
                                    galleries={this.props.galleries}
                                    type={this.props.type}
                                    onSave={(id) => this.onSave(id, webcam)}
                                    hideWebcam={(id) => this.props.hideWebcam((webcam.webcamID))}
                                    showHideGalleryList={'hide'}
                                />
                            );

                        })
                    }
                </div>
            )
        }

        // WebcamsList when no webcama are fetched
        else {
            return null;
        }
    }
}
export default WebcamList;