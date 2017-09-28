export default {
    webcams: [],
    savedWebcams: [],
    session: {
        token: sessionStorage.getItem('token') || ''
    },
    galleries: [],
    position: ''
}