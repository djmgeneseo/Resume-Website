import About from './About.js';
import Achievements from './Achievements';
import ColorPicker from './ColorPicker';
import Portfolio from './Portfolio';

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    About, Achievements, ColorPicker, Portfolio
}