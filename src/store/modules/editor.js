import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

// action creator
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);


const initialState = Map({
    title: '',
    markdown: '',
    tags:''
});

export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    }
}, initialState);