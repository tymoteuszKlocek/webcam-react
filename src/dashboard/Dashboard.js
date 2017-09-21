import React from 'react';
import GalleryList from '../gallery/GalleryList';
import store from '../store/store';

class Dashboard extends React.Component {
    test() {
        store.dispatch({type: 'ADD_NEW', payload: {name: 'Eryk', age: 34}});
        
    }

    render() {
        store.subscribe(() => {
            console.log('store chanegd ', store.getState())
        });
        return (
            <div className="container">
                <h3>List of your Galleries</h3>
                <p>Here you can see all your galleries or add new one.</p>
                <GalleryList />
            </div>
        );
    }
}

export default Dashboard;