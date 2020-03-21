import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainHeader from './components/main/MainHeader';
import MainBanner from './components/main/MainBanner';
import MainTemplate from './components/main/MainTemplate';
import WebToonPage from './pages/WebToonPage';

function App() {
  return (
    <MainTemplate>
      <MainHeader />
      <MainBanner />
      <Switch>
        <Route path="/" component={WebToonPage} exact />
        <Route path="/webtoon" component={WebToonPage} />
      </Switch>
    </MainTemplate>
  );
}

export default App;
