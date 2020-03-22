import { createAction, createReducer, ActionType } from 'typesafe-actions';

const SET_SEARCH_CATEGORY = 'searchForm/SET_SEARCH_CATEGORY';
const SET_SEARCH_CHIP = 'searchForm/SET_SEARCH_CHIP';
const FETCH_WEBTOONS = 'searchForm/FETCH_WEBTOONS';
const FINISHED_FETCH = 'searchForm/FINISHED_FETCH';

export const setSearchCategory = createAction(SET_SEARCH_CATEGORY)<string>();
export const setSearchChip = createAction(SET_SEARCH_CHIP)<string>();
export const fetchWebtoons = createAction(FETCH_WEBTOONS)();
export const finishedFetch = createAction(FINISHED_FETCH)();

const actions = {
  setSearchCategory,
  setSearchChip,
  fetchWebtoons,
  finishedFetch,
};

type SearchFormActions = ActionType<typeof actions>;

export interface SearchFormState {
  category: string;
  chip: string;
  loading: boolean;
}

const initialState: SearchFormState = {
  category: 'story',
  chip: '전체보기',
  loading: false,
};

const searchForm = createReducer<SearchFormState, SearchFormActions>(
  initialState,
  {
    [SET_SEARCH_CATEGORY]: (state, { payload: category }) => ({
      loading: true,
      category,
      chip: '전체보기',
    }),
    [SET_SEARCH_CHIP]: (state, { payload: chip }) => ({
      ...state,
      loading: true,
      chip,
    }),
    [FETCH_WEBTOONS]: state => ({ ...state, loading: true }),
    [FINISHED_FETCH]: state => ({ ...state, loading: false }),
  }
);

export default searchForm;
