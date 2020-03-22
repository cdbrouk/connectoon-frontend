import { createAction, createReducer, ActionType } from 'typesafe-actions';

const CALL_WEBTOONS = 'webtoons/CALL_WEBTOONS';
const SET_WEBTOONS = 'webtoons/SET_WEBTOONS';
const SELECT_WEBTOONS = 'webtoons/SELECT_WEBTOONS';
const CLEAN_UP = 'webtoons/CLEAN_UP';

export const callWebtoons = createAction(CALL_WEBTOONS)();
export const setWebtoons = createAction(SET_WEBTOONS)<WebToons>();
export const selectWebtoon = createAction(SELECT_WEBTOONS)<WebToon>();
export const cleanUp = createAction(CLEAN_UP)();

const actions = { callWebtoons, setWebtoons, selectWebtoon, cleanUp };

type WebToonsAction = ActionType<typeof actions>;

interface Author {
  name: string;
  title: string;
  career: number;
  address: string;
  age: number;
}

export interface WebToon {
  title: string;
  author: Author;
  story: string;
  style: string;
  thumbnailStory: string;
  thumbnailStyle: string;
  like: number;
  createDate: string;
  genre: string;
}

type WebToons = WebToon[];

interface WebToonsState {
  loading: boolean;
  webtoons?: WebToons;
  selectedWebToon?: WebToon;
}

const initialState: WebToonsState = {
  loading: false,
  webtoons: [],
  selectedWebToon: undefined
};

/* eslint-disable no-shadow */
const webtoons = createReducer<WebToonsState, WebToonsAction>(initialState, {
  [CALL_WEBTOONS]: state => ({ webtoons: [], loading: true }),
  [SET_WEBTOONS]: (state, { payload: webtoons }) => ({
    loading: false,
    webtoons
  }),
  [SELECT_WEBTOONS]: (state, { payload: webtoon }) => ({
    ...state,
    selectedWebToon: webtoon
  }),
  [CLEAN_UP]: state => ({ ...state, selectedWebToon: undefined })
});

export default webtoons;
