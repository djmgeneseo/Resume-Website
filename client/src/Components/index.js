import ArticleHOC from "./ArticleHOC";
import Parallax from "./Parallax";
import TimePeriodCaption from './TimePeriodCaption'

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    ArticleHOC, Parallax, TimePeriodCaption
}