import React, { useState } from 'react';
import './App.scss';
import { Home } from './components/Home';
import { UserPage } from './components/UserPage';

const App = () => {
  const [tab, setTab] = useState('home');
  const [placeholder, setPlaceholder] = useState('Search for Users');
  const [loginSelectedUser, setLoginSelectedUser] = useState('');

  const selectPage = (login) => {
    setTab('user_page');
    setLoginSelectedUser(login)
  }

  const changePlaceholder = (placeholder) => (
    setPlaceholder(placeholder)
  )

  return (
    <div className="container">
      <h1
        className="container__h1"
        onClick={() => (
          setTab('home')
        )}
      >
        GitHub Searcher
      </h1>
      {tab === 'home' &&
      <Home
        selectPage={selectPage}
        placeholder={placeholder}
        changePlaceholder={changePlaceholder}
      />}
      {tab !== 'home' &&
      <UserPage
        login={loginSelectedUser}
        placeholder={placeholder}
        changePlaceholder={changePlaceholder}
      />
      }
    </div>
  );
}

export default App;
