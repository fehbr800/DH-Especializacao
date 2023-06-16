import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

