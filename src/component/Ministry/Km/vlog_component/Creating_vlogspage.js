import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateHeading,updateDate,updateVlogString} from '../../../../ducks/reducer'
import {Link} from 'react-router-dom'



class Creatingnewvlog extends Component{
    
    updateHeading(val){
        this.setState({heading:val})
    }
    updateDate(val){
        this.setState({date:val})
    }
    updateVlogString(val){
        this.setState({vlog_string:val})
    }
    addNewVlog(){
     
        const {heading, date,vlog_string}=this.props
        
    axios.post('/api/vlog', {date, heading, vlog_string
    })
    
    }


    render(){
        return(
            <div>
                <input onChange={(e)=>this.props.updateHeading(e.target.value)}/>
                <input onChange={(e)=>this.props.updateDate(e.target.value)}/>
                <input onChange={(e)=>this.props.updateVlogString(e.target.value)}/>
               <Link to='/sunday'> <button onClick={()=>this.addNewVlog()}>Make New</button></Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        heading:state.heading,
        date:state.date,
        vlog_string:state.vlog_string
    }
}

export default connect(mapStateToProps,{updateHeading,updateDate,updateVlogString})(Creatingnewvlog)