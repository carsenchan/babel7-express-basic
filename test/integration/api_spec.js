import request from 'supertest'

import app from '../../src/server'

describe('API', ()=>{
    it('request / gives a hello', (done)=>{
        request(app)
        .get('/')
        .expect(200, 'Defautl call, no response', done)
    })
})