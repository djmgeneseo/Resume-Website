import About from './FrontPage/About.js';
import Achievements from './FrontPage/Achievements';
import ColorPicker from './ColorPicker';
import Portfolio from './FrontPage/Portfolio';
import NavBar from './NavBar';
import FrontPage from './FrontPage/FrontPage';
import Experience from './FrontPage/Experience';
import Blogs from './FrontPage/Blogs';

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    NavBar, FrontPage, About, Achievements, ColorPicker, Portfolio, Experience, Blogs
}