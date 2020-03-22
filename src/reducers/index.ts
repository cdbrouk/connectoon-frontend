import { combineReducers } from 'redux';
import searchForm from './searchForm';
import styles from './styles';
import webtoons from './webtoons';

const rootReducer = combineReducers({ searchForm, styles, webtoons });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
