/* This is a database connection function*/
import mongoose from 'mongoose'

/* creating connection object*/

async function dbConnect() {
    
  /* check if we have connection to our databse*/
  if (mongoose.connections[0].readyState) {
    console.log('Already connected.')
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  }).then((db)=>{console.log("db is connected");
  
}).catch((error)=>{
  console.log("connection db error");
  
})

}

  

export default dbConnect;
