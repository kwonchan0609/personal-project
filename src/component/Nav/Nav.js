import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUserData} from '../../ducks/reducer'
import './Nav.css';



 class Nav extends Component {
    login(){
        console.log('hello')
        console.log(process.env)
        let{REACT_APP_DOMAIN, REACT_APP_CLIENT_ID}=process.env
       let url= `${window.location.origin}/auth/callback`
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }
    render(){
    return(
        <div className='header'>
           <Link to='/'> <img src='https://www.novatochurch.com/wp-content/uploads/2016/12/cropped-novato-logo.png'/> </Link>
           <div className='navbar'>
            <Link to='/visit'><button>Visit</button></Link>
            <Link to='/ministry'><button>Ministry</button></Link>
            <Link to='/event'><button>Event</button></Link>
            <Link to='/mission'><button>Mission</button></Link>
            <Link to='/photo'><button>Photo</button></Link>
            </div>
            {
                !this.props.user.user_name ?
                <button onClick={()=>this.login()}>Login</button> : null
            }
        </div>
    )
}
}
function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect (mapStateToProps, {updateUserData})(Nav)