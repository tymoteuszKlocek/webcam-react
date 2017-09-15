import React from 'react';
import GalleryList from './GalleryList';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h3>List of your Galleries</h3>
                <p>Here you can see all your galleries or add new one.</p>
                <GalleryList />
            </div>
        );
    }
}

export default Dashboard;