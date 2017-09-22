// @flow
import React from 'react';
import Webcam from '../webcam/Webcam';

type Props = {
    type: string,
    param: Object,
    webcams: Array<Object>,
    onSave: () => void,
    onDelete: () => void
}

class WebcamList extends React.Component<Props> {

    render() {
        return (
            <div>
                {this.props.webcams.map(webcam => {
                    return (
                        <Webcam
                            key={webcam.webcamID}
                            webcam={webcam}
                            type={this.props.type}
                            onSave={() => this.props.onSave()}
                            hideWebcam={(id) => this.props.hideWebcam(id)}
                            onDelete={() => this.props.onDelete()}
                        />
                    );
                })}
            </div>
        )
    }
}

export default WebcamList;