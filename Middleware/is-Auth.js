const jwt = require('jsonwebtoken')

const isAuth = (req, res, next) => {

    try {
      //extract token
      const authorizationHeader = req.get("Authorization");
        if (!authorizationHeader) throw new Error("Unautorized");
        
      const token = authorizationHeader.split(" ")[1]
      console.log(token)

      //verify token
       
      const decodedtoken = jwt.verify(token, "Helloiamasecretkey");
      
      if (!decodedtoken) {
        throw new Error("Unautorized");
       
        
      } 
        next()
    } catch (error) {
        
      console.log(error)
      res.json({message:error.message})
    }
  

}

module.exports = isAuth