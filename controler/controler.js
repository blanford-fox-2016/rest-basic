var express = require('express');
var router = express.Router();
var models = require('../models')
var user =models.user
module.exports = {
  getAll:function (req,res,next){
    user.findAll({

    }).then(function(data){
      res.send(data)
    })
  },
  getOne:function (req,res,next){
    var numId=req.param('id')
      user.findOne({
        where:{
          id:numId
        }
      }).catch((err)=>{
        res.send(err)
      }).then(function(data){
        res.send(data)
      })
  },
  createOne:function (req,res,next){
    var inputnama = req.param('nama');
    var inputemail = req.param('email');
      user.create({
        nama:inputnama,
        email:inputemail
      }).catch((err)=>{
        res.send(err)
      }).then(function(){
        res.send({msg:"data "+inputnama+"berhasil masuk"})
      })
  },
  deleteOne:function (req,res,next){
    var numId = req.param('id')
      user.destroy({
        where:{
          id:numId
        }
      }).catch((err)=>{
        res.send(err)
      }).then(function(){
        res.send({msg:"data terhapus"})
      })
  },
  updateData:function(req,res,next){
    var inputId = req.param('id')
    var inputnama = req.param('nama');
    var inputemail = req.param('email');
    user.update({
      nama:inputnama,
      email:inputemail
    },{
    where:{
      id:inputId
    }}).catch((err)=>{
      res.send(err)
    }).then(function(){
      res.send({msg:"data masukk"})
    })
  }
}
