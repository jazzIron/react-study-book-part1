import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params => async dispatch => {
        dispatch({ type }); // 시작
        dispatch(startLoading(true));
        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            });
            dispatch(finishLoading(type));
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            });
            dispatch(finishLoading(type));
            throw e;
        }
    };
};

//export const getPost = createRequestThunk(GET_POST, api.getPost);