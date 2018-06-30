import mongoose from 'mongoose'

export const MONGODB_CONN_STRING = 'mongodb://dbadmin:dbadmin@ds135290.mlab.com:35290/nodeapi-dev'

export * from '../models'

const mongoConn = app => mongoose.connect(MONGODB_CONN_STRING, err=>console.error(err))

export default mongoConn