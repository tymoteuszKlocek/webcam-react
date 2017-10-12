import React from 'react';
import { keys } from 'lodash';

type Props = {
    formErrors: string,
    registerError: string,
}

class FormErrors extends React.Component<Props> {

    render() {
        return (
            <div>
                {keys(this.props.formErrors).map((fieldName: string, i) => {
                    if (this.props.formErrors[fieldName].length > 0) {
                        return (
                            <p key={i} className="alert alert-danger">{fieldName} {this.props.formErrors[fieldName]}</p>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
        )
    }
}
export default FormErrors;