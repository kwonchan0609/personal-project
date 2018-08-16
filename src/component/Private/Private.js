import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUserData} from './../../ducks/reducer'

 class Private extends Component{
    componentDidMount(){
        axios.get('/api/user-data').then(res=>{
            console.log(res.data)
            this.props.updateUserData(res.data)
        })
    }
    logout(){
        axios.get('/api/logout').then(res=>{
            this.props.history.push('/')
        })
    }
    render(){
        console.log(this.props.user)
        let {user}=this.props
        return(
            <div>
                <h1>Account information</h1>
                {
                    user.user_name ? (
                        <div>
                            <p>Account Holder: {user.user_name}</p>
                            <p>Account Email: {user.email}</p>
                            <p>Account number: {user.auth_id}</p>
                            <img src= {user.picture} alt='/' />
                            <button onClick={()=>this.logout()}>Log Out</button>
                        </div>
                    ) : <p> Please Log In </p>
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        user:state.user

    }
}

export default connect(mapStateToProps,{updateUserData})(Private)