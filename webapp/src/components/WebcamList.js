// @flow
import React from 'react';
import Webcam from './Webcam';

type Props = {
    type: string,
    param: Object,
    webcams: Array<Object>, //TODO - is this type ok?
    onSave: () => void,
    onDelete: () => void
}

class WebcamList extends React.Component {
    onSave(id, webcam) {
        this.props.onSave(id, webcam)
    }

    render() {
        // WebcamsList for Dashboard
        if (this.props.type === 'dashboard' && this.props.webcams !== undefined) {
            return (
                <div>
                    {
                        this.props.webcams.map(webcam => {
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