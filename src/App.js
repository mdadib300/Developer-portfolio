import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Email from './components/Email/Email';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import ProjectsStorage from './components/ProjectsStorage/ProjectsStorage';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/projects',
          element: <ProjectsStorage />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/email',
          element: <Email />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
