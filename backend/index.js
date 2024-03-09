const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const Job = require('./models/Job.models')
require('dotenv').config()

const app = express()
app.use(express.json());
app.use(cors())
app.use(morgan("tiny"));
const port = 3000
const url = process.env.MONGODB_URL

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(url);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

connectDB();

app.get('/job', async(req, res) => {

    try{
        const jobs = await Job.find({ status:"Active"});
        res.status(200).send({jobs});
    }catch(error){
        res.status(500).send({error});
    }
})

app.post('/job', async(req, res) => {

    try{
        console.log(req.body);
        const job = await Job.create(req.body);
        res.status(200).send({job});
    }catch(error){
        res.status(500).send({error});
    }
})

app.patch('/job/:id', async(req,res)=>{
    try{
        const jobid = req.params.id;
        console.log(jobid);
        const job = await Job.findByIdAndUpdate({ _id : jobid}, {$set: req.body}, {new: true})
        res.status(200).send({job});
    }catch(error){
        res.status(500).send({error});
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})