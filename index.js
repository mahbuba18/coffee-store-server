const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app= express();
const port=process.env.PORT||5000;


//coffee-master
//ha6FSu5Vrik9ouur



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.whfiqab.mongodb.net/?appName=Cluster0`;
// const uri = "mongodb+srv://coffee-master:ha6FSu5Vrik9ouur@cluster0.whfiqab.mongodb.net/?appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//middleware
app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('Coffee Store server is running');

})

app.listen(port,()=>{
    console.log(`Coffee store server is runnig on port: ${port}`)
})

