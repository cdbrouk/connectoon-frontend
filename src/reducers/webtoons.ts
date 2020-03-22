import { createAction, createReducer, ActionType } from 'typesafe-actions';

const SET_WEBTOONS = 'webtoons/SET_WEBTOONS';
const SELECT_WEBTOONS = 'webtoons/SELECT_WEBTOONS';
const CLEAN_UP = 'webtoons/CLEAN_UP';

export const setWebtoons = createAction(SET_WEBTOONS)<WebToons>();
export const selectWebtoon = createAction(SELECT_WEBTOONS)<WebToon>();
export const cleanUp = createAction(CLEAN_UP)();

const actions = { setWebtoons, selectWebtoon, cleanUp };

type WebToonsAction = ActionType<typeof actions>;

interface Author {
  name: string;
  title: string;
  career: number;
  address: string;
  age: number;
}

export interface WebToon {
  id: number;
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

export type WebToons = WebToon[];

interface WebToonsState {
  webtoons?: WebToons;
  selectedWebToon?: WebToon;
}

const initialState: WebToonsState = {
  webtoons: [],
  selectedWebToon: undefined,
};

/* eslint-disable no-shadow */
const webtoons = createReducer<WebToonsState, WebToonsAction>(initialState, {
  [SET_WEBTOONS]: (state, { payload: webtoons }) => ({
    ...state,
    webtoons,
  }),
  [SELECT_WEBTOONS]: (state, { payload: webtoon }) => ({
    ...state,
    selectedWebToon: webtoon,
  }),
  [CLEAN_UP]: state => ({ ...state, selectedWebToon: undefined }),
});

export default webtoons;
