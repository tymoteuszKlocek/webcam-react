// @flow
type State = {
    +webcams: Array<Object>,
    +savedWebcams: Array<Object>,
    +session: {
        token: string
    },
    +galleries: Array<Object>,
    +position: string
};

const initialState: State = {
    webcams: [],
    savedWebcams: [],
    session: {
        token: sessionStorage.getItem('token') || '',
    },
    galleries: [],
    position: '',
};

export default initialState;