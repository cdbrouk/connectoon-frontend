import { combineReducers } from 'redux';
import searchForm from './searchForm';
import styles from './styles';

const rootReducer = combineReducers({ searchForm, styles });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
