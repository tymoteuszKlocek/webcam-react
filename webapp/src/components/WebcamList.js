// @flow
import React from 'react';
import Webcam from './Webcam';

type Props = {
    type: string,
    param: Object,
    webcams: Array<Object>,
    onSave: () => void,
    onDelete: () => void
}

function WebcamList(props) {
console.log(props.webcams.length)
    if (props.webcams !== undefined && props.webcams.length !== 0) {

        return (
            <div>
                {
                    props.webcams.webcams.map(webcam => {
                        return (
                            <Webcam
                                key={webcam.webcamID}
                                webcam={webcam}
                                type={props.type}
                                onSave={() => props.onSave()}
                                hideWebcam={(id) => props.hideWebcam(id)}
                                onDelete={() => props.onDelete()}
                            />
                        );

                    })
                }
            </div>
        )
    } else {
        return null;
    }

}
export default WebcamList;