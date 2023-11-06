import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CatalogList from './CatalogComponents/CatalogList';

const App = () => {
  return (
    <div>
      Car rental UA
      <CatalogList />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        pauseOnHover
      />
    </div>
  );
};

export default App;
