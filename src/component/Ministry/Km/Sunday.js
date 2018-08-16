import React, {Component} from 'react'
import SideBar from './SideBar'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Vlogs from './vlog_component/Vlogs'
import Edit_vlogs from './vlog_component/Edit_vlogs'

class Sunday extends Component{
    constructor(){
        super()
        this.state={
           vlogs:[],
           
        }
        this.deleteList=this.deleteList.bind(this)
    }
    componentDidMount(){
        axios.get('/api/vlog').then(info=>{
            this.setState({vlogs:info.data})
        })
    }
    deleteList(id){
        axios.delete(`/api/vlog/${id}`).then(axios.get('/api/vlog').then(info=>{
            this.setState({vlogs:info.data})
        }))
    }
 
    render(){
        const newVlogs=this.state.vlogs.map((list,i)=>(
            <h1 key={i}>
            <Vlogs list={list} delete={this.deleteList}/>
            </h1>
        ))
   
        return(
            <div>
                <SideBar/>
                <div>Sunday</div>
               <Link to='/newvlog'><button>Make New</button></Link>
               {newVlogs}
            </div>
        )
    }
}
export default Sunday