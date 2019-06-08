import ColorPicker from './ColorPicker';
import NavBar from './NavBar';

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    NavBar, ColorPicker
}