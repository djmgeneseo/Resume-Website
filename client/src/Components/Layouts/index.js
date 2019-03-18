import Jumbotron from './Jumbotron'
import Footer from './Footer'
import About from './About'
import Abilities from './Abilities'
import Experience from './Experience'

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    Jumbotron, Footer, About, Experience, Abilities
}