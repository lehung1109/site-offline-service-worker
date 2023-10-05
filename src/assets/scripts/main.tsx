import { createRoot } from 'react-dom/client';
import App from '../../components/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}`,
    element: <App />,
  },
  {
    path: "/test",
    element: <div>Hello world!</div>,
  },
]);

const root = createRoot(document.querySelector('#app'));
root.render(<RouterProvider router={router} />);
