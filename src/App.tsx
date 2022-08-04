import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, Page } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Layout>
  );
}

export default App;
