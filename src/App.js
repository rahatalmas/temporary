import './App.css';
import { Outlet,Link } from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";

import ProfileCard from './components/ProfileCard';
import Home from './pages/Home';
import ResearchPage from './pages/ResearchPage';
import TeachingPage from './pages/TeachingPage';
import AchievementPage from './pages/AchievementPage';
import ExperiencePage from './pages/ExperiencePage';
import SideNav from './components/SideNav';

const Nav = () =>{
    return (
        <div className='template'>
          <nav className='nav-container'>
             
              <h2 className='logo'>Tariq</h2>
             
             <div>
             <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/experience">Experience</Link>
                    <Link className='nav-link' to="/research">Research</Link>
                    <Link className='nav-link' to="/teaching">Teaching</Link>
                    <Link className='nav-link' to="/achievements">Achievements</Link>
             </div>
          </nav>
          <div className='sized-box'></div>
          <div className="application">
              <div className='col-1'><ProfileCard/></div>
              <div className='dummy-col'></div>
              <div className='col-2'>
                <Outlet/>
                <div className='site-map'></div>
              </div>
              <div className='dummy-col-2'>

              </div>
              <div className='col-3'><SideNav/></div>
          </div>
        </div>
    );
}


const App = createBrowserRouter([
    {
      path: "/",
      element:<Nav/>,
      children:[ 
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/experience",
          element:<ExperiencePage/>
        },
        {
          path:"/research",
          element:<ResearchPage/>

        },
        {
          path:"/teaching",
          element:<TeachingPage/>

        },
        {
          path:"/achievements",
          element:<AchievementPage/>

        },
        {
          path:"/cv",
          element:<h1>Cv</h1>

        },
        {
          path:"/blogs",
          element:<h1>Blogs</h1>
        }
      ]
    },
  ]);

export default App;
