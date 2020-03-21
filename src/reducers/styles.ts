import {createAction, createReducer, ActionType} from 'typesafe-actions';

const ON_MODAL = 'styles/ON_MODAL';
const OFF_MODAL = 'styles/OFF_MODAL';

export const onModal = createAction(ON_MODAL)();
export const offModal = createAction(OFF_MODAL)();

const actions = {onModal, offModal};

type StylesActions = ActionType<typeof actions>;

interface StylesState {
  modal: boolean;
} 

const initialState: StylesState = {
  modal: false,
};

const styles = createReducer<StylesState, StylesActions>(
  initialState,
  {
    [ON_MODAL]: state => ({...state, modal: true}),
    [OFF_MODAL]: state => ({...state, modal: false}) 
  }
);

export default styles;