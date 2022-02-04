//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//**************************************************************************************
const homePage = "This is the home page where you can find all things homey."
const aboutPage = "This is the about page where you can find out all things about anything in the world that you desire."
const contactPage = "This is the contact page where you can get all my juicy private contact deets to set up a maybe sudden romantic date night at an upscale Italian restautant."
//***************************************************************************************
app.listen(3000, function(){
  console.log("Server running on port 3000");
});
