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

function WebcamList(props) {
    
        let webcams = props.webcams.webcams
        console.log(webcams);
        if(props.webcams.webcams !== undefined) {

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