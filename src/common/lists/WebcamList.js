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
                        <div key={webcam.id}>
                            <Webcam
                                param={webcam}
                                type={this.props.type}
                                onSave={() => this.props.onSave()}
                                onHide={() => this.onHide()}
                                onDelete={() => this.props.onDelete()}
                            />
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default WebcamList;