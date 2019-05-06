import Footer from './Footer';
import Abilities from './Abilities';
import Blogs from './Blogs';

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    Footer, Abilities, Blogs
}