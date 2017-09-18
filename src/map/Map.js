import React from 'react';

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            src: 'https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d466.449238037377!2d22.528989067235624!3d51.237960356008884!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd727c86230451f22!2sCzekoladowy!5e1!3m2!1sen!2sus!4v1505481877161'
        }
    }

    render() {
        return (
            <div className="well">
                <h2>I am Map</h2>
                <div >
                    <iframe title={'koko'} src={this.state.src} width={600} height={450} ></iframe>
                </div>
            </div>
        )
    }
}

export default Map;