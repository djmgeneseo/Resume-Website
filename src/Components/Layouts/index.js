import Jumbotron from './Jumbotron/Jumbotron'
import Footer from './Footer/Footer'
import About from './About/About'
import Abilities from './Abilities/Abilities'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    Jumbotron, Footer, About, Experience, Abilities, Projects, 
}