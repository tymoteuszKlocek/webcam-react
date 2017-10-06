//@flow
import React from 'react';

type State = {
    name: string,
}

type Props = {
    onClick: (name: string) => void,
}

class GalleryForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    onClick() {
        const name = this.state.name;
        this.props.onClick(name);
    }

    onChange(e: SyntheticEvent<HTMLButtonElement>) {
        let val: string = e.target.value;
        this.setState({ 'name': val });
    }

    render() {
        return (
            <div className="col-xs-10 col-sm-6 col-md-6">
                <form className="form-group">
                    <input name="galleryname" className="form-control" type="text" placeholder="New gallery name" onChange={(e) => this.onChange(e)} />
                    <input type="button" className="btn btn-default" onClick={() => this.onClick()} value="Save" />
                </form>
            </div>
        )
    }
}

export default GalleryForm;