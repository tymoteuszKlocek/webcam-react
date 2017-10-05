 const initialState = {
    // for webcams from outer API (webcams.travel.com)
    webcams: [],
    // requests for webcams saved on our backend 
    savedWebcams: [],
    session: {
        token: sessionStorage.getItem('token') || ''
    },
    galleries: [],
    position: ''
}
export default initialState;