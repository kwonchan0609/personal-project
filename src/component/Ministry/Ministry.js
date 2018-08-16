import React, {Component} from 'react'

import SideBar from './Km/SideBar'
import {withRouter} from 'react-router'
import Sunday from './Km/Sunday'


class Ministry extends Component{
    render(){
        return(
            <div>
                <SideBar/>
            
          {Sunday}
               
            </div>
        )
    }
}
export default withRouter(Ministry)