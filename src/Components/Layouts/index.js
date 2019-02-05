import Jumbotron from './Jumbotron/Jumbotron'
import Footer from './Footer/Footer'
import About from './About/About'

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    Jumbotron, Footer, About
}