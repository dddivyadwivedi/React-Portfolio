const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const nodemailer = require('nodemailer');
const { Email } = require('@material-ui/icons');
// const db = require('./db/database.js');
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Love !');
})


// data connectivity
mongoose.connect('mongodb://localhost:27017/portfolioDbContact', { useNewUrlParser: true, useUnifiedTopology: true });
// databse setup
const Schema = new mongoose.Schema({
  Name: String,
  Email: String,
  Message: String
})
const Model = new mongoose.model("ContactInfo", Schema);
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  Model.findOne({ Name: name }, (err, foundUser) => {
    if (err) {
      console.log(err);
    }
    else {
      if (foundUser) {
        if (foundUser.Message === message) {
          res.send("You have already send that message !");
        }
        else {
          const newContactInfo = new Model({
            Name: name,
            Email: email,
            Message: message,
          })
          newContactInfo.save();
          res.send("Your data has been submitted");
        }
      }
      else{
        const newContactInfo = new Model({
          Name: name,
          Email: email,
          Message: message,
        })
        
        newContactInfo.save();
        const transporter = nodemailer.createTransport({
          service : 'gmail',
          auth : {
            user : 'bibekportfoliomailsender1234@gmail.com',
            pass : 'bibekv2isabeastportfoliomailsender'
          }
        })
        let options = {
          to : 'bibekdas993@gmail.com',
          subject : `This email is from ${Email} `,
          text : message
        }
        
        transporter.sendMail(options ,(err , res)=>{
          if(err){
            res.send(err);
          }
          else {
            res.send("You mail has been sent !");
          }
        })
      }
    }
 
  })

})
app.listen(4000, function () {
  console.log("Server running");
})

