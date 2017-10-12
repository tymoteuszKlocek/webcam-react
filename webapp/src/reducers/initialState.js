// @flow
type State = {
    +webcams: {
        collection: Array<Object>,
        error: any,
    },
    +galleryWebcams: {
        collection: Array<Object>,
        error: any,
    },
    +session: {
        token: string,
        error: any,
        message: string,
    },
    +galleries: Array<Object>,
    +position: string,
    //+routes: string
};

const initialState: State = {
    webcams: {
        collection: [],
        error: undefined,
    },
    galleryWebcams: {
        collection: [],
        error: undefined,
    },
    session: {
        token: sessionStorage.getItem('token') || '',
        error: undefined,
        message: '',
    },
    galleries: [],
    position: '',
    //routes: '',
};

export default initialState;