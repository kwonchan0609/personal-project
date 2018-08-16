import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Ministrty from './component/Ministry/Ministry'
import Mission from './component/Mission/Mission'
import Visit from './component/Visit/Visit'
import Photo from './component/Photo/Photo'
import Event from './component/Event/Event'
import Private from './component/Private/Private'
import Home from './component/Home/ Home'

import Sunday from './component/Ministry/Km/Sunday'
import Wed from './component/Ministry/Km/Wed'
import Fri from './component/Ministry/Km/Fri'
import Creatingnewvlog from './component/Ministry/Km/vlog_component/Creating_vlogspage'
import Edit_vlogs from './component/Ministry/Km/vlog_component/Edit_vlogs'





export default (
    <Switch>
         
        <Route exact path='/' component={Home}/>
        <Route path='/visit' component={Visit}/>
        <Route path='/mission' component={Mission}/>
        <Route path='/event' component={Event}/>
        <Route path='/ministry' component={Ministrty}/>
        <Route path='/photo' component={Photo}/>
        <Route path='/private' component={Private}/>

         <Route path='/sunday' component={Sunday}/>
        <Route path='/wed' component={Wed}/>
        <Route path='/fri' component={Fri}/>
        <Route path= '/newvlog' component={Creatingnewvlog}/>
        <Route path='/editvlog/:id' component={Edit_vlogs}/>


       
    </Switch>
)