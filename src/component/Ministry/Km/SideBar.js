import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SideBar extends Component{
    render(){
        return(
        <div>
                <Link to='/Sunday'><button>Sunday</button></Link>
                <Link to='/wed'><button>Wednesday</button></Link>
                <Link to='/fri'><button>Friday</button></Link>
        </div>
        )
    }
}
export default SideBar