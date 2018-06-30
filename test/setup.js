import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

import mongoose from 'mongoose'
mongoose.Promise = global.Promise
