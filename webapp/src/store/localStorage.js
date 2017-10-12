export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('webcam-app-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log('localStorage error', err)
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('webcam-app-state', serializedState);
    } catch (err) {
        console.log('localStorage error', err);
    }
}