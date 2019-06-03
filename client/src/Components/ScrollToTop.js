import {Component} from 'react'
import {withRouter} from 'react-router-dom'

/**
 * Bug problem: using <Link> with react-router-dom does not bring user to the top of the web page. 
 * Bug fix: universal condition applied when site's pathname changes: when navigating to a new page, scroll the page to the top
 */
class ScrollToTop extends Component {
    
    componentDidUpdate(prevProps) {
        if(this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0,0)
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop)