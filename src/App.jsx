
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, createStore } from './stores';
import './styles/index.scss';
import Router from './router';

function App() {
  const [storeRes, setStoreRes] = useState();

  useEffect(() => {
    (async function () {
      try {
        const res = await createStore();
        setStoreRes(res);
      } catch(e) {
        setStoreRes(false);
      }
    })();
  }, []);

  if (!storeRes) {
    return null;
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
