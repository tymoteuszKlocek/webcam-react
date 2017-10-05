import React from 'react';

class GalleryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    onClick() {
        const name = this.state.name;
        this.props.onClick(name)
    }

    onChange(e) {
        this.setState({ 'name': e.target.value })
        console.log(this.state.name)
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