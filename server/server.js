const bodyParser = require('body-parser')
const express = require('express')
const massive = require('massive')
const axios = require('axios')
session=require('express-session')
const controller=require('./controller/contorller')


const app = express()
app.use(bodyParser.json())
require('dotenv').config()
const{SERVER_PORT,
    REACT_APP_DOMAIN, 
    REACT_APP_CLIENT_ID, 
    CLIENT_SECRET,
    SESSION_SECRET,
    CONNECTION_STRING
}= process.env



app.use(
    session({
        secret:SESSION_SECRET,
      saveUninitialized: false,
      resave: false
    })
)


//auth 0
app.get('/auth/callback', async (req, res) => {
    let payload={
        client_id:REACT_APP_CLIENT_ID,
        clien_secret:CLIENT_SECRET,
        code:req.query.code,
        grant_type:'authorization_code',
        redirect_uri:`http://${req.headers.host}/auth/callback`
    }

    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`,payload)

    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo/?access_token=${resWithToken.data.access_token}`)

    const db =req.app.get('db')

    let {sub, email, name, picture} = resWithUserData.data

   let foundUser= await db.find_user([sub])
   if(foundUser[0]){
     
       req.session.user =foundUser[0]
       res.redirect('/#/private')
   

   }else{
       let createdUser = await db.create_user([name,email,sub,picture])
       req.session.user = createdUser[0]
       res.redirect('/#/private')
   }

})

app.get('/api/user-data',(req,res)=>{
    if(req.session.user){
        res.status(200).send(req.session.user)
    }else{
        res.status(200).send('nice try sucka');
    }
})
app.get('/api/logout', (req,res)=>{
    req.session.destroy();
    res.send()
})

//vlog axios
app.post('/api/vlog', controller.create)
app.get('/api/vlog', controller.getAll)
app.get('/api/vlog/:id', controller.getOne)
app.delete('/api/vlog/:id', controller.delete)




const port = SERVER_PORT
massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    app.listen(port, ()=>{console.log(`Server listening on port ${port}`)})
}).catch(err=>console.log(err))
