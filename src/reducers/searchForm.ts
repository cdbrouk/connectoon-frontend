import { createAction, createReducer, ActionType } from 'typesafe-actions';

const SET_SEARCH_CATEGORY = 'searchForm/SET_SEARCH_CATEGORY';
const SET_SEARCH_CHIP = 'searchForm/SET_SEARCH_CHIP';

export const setSearchCategory = createAction(SET_SEARCH_CATEGORY)<string>();
export const setSearchChip = createAction(SET_SEARCH_CHIP)<string>();

const actions = { setSearchCategory, setSearchChip };

type SearchFormActions = ActionType<typeof actions>;

export interface SearchFormState {
  category: string;
  chip: string;
}

const initialState: SearchFormState = {
  category: 'story',
  chip: '전체보기'
};

const searchForm = createReducer<SearchFormState, SearchFormActions>(
  initialState,
  {
    [SET_SEARCH_CATEGORY]: (state, { payload: category }) => ({
      category,
      chip: 'all'
    }),
    [SET_SEARCH_CHIP]: (state, { payload: chip }) => ({ ...state, chip })
  }
);

export default searchForm;
