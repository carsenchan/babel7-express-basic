import User from "../../src/models/User"
import mongoose from 'mongoose'
import {Mockgoose} from 'mockgoose'
import { MONGODB_CONN_STRING } from '../../src/config/mongoose'
import {expect} from 'chai'

//const mockgoose = new Mockgoose(mongoose)

describe("User Model", ()=>{
  before( done =>{
    //mockgoose.prepareStorage().then(()=>{
      mongoose.connect(MONGODB_CONN_STRING, done)
    //})
    //mongoose.connect('mongodb://dbadmin:dbadmin@ds135290.mlab.com:35290/nodeapi-dev', done)
  })

  after( done =>{
    mongoose.disconnect().then(done)
    
  })

  it('Model-User-find', done =>{
    User.find().then( data => {
      
      expect(data).not.to.be.equal(undefined)
      expect(data.length).to.be.equal(1)
      expect(data[0]).to.be.have.property('lastName','root')
      done()
    })
  })
})