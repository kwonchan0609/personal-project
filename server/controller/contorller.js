module.exports = {
    create:(req,res)=>{
      
        const db = req.app.get('db');
        const {date, heading, vlog_string} = req.body;
      
        db.create_vlog([req.session.user.id,date,heading,vlog_string])
        .then( x => res.status(200).send( x ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
    getAll:(req,res)=>{
        const db = req.app.get('db')
        db.get_all_vlogs()
      
        .then( vlog => res.status(200).send( vlog ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
    getOne:(req,res)=>{
        const db = req.app.get('db')
        const {id} =req.params
        db.get_one_vlogs([id])

        .then(vlog=> req.status(200).send(vlog))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } )
    },
    update:(req,res)=>{

    },
    delete:(req,res)=>{
        const db= req.app.get('db');
        const { id } = req.params;
    
        db.delete_vlogs([ id ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }

}