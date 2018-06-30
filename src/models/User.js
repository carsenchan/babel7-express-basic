import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: {
      type:String,
  },
  lastName:{
    type:String
  },
  isActive:{
    type:Boolean
  },
  createDate:{
    type:Date
  },
  lstUpdDate:{
    type:Date
  }
})

const User = mongoose.model("User", userSchema, "users")

export default User