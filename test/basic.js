(function () {

  'use strict'

  var imagerience = require('..')
  var express = require('express')
  var supertest = require('supertest')
  var mongoose = require('mongoose')
  var fs = require('mz/fs');
  var path = require('path')

  // if (mongoose.connection.readyState === 0)
  // {
  //   mongoose.connect('mongodb://127.0.0.1:27017/imagerience', { useNewUrlParser: true})
  // }

  // tell mongoose to use es6 implementation of promises
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://127.0.0.1:27017/imagerience'); 
  mongoose.connection
    .once('open', function () { console.log('Connected!') })
    .on('error', function (error) {
      console.warn('Error : ',error);
    });

  var simpleApp = express()
  
  simpleApp.get('/', function (req, res, next) {
    res.status(400).send()
  })

  var imge = imagerience({ uri: '/test', basePath: './test', staticUri: '/images'})
  // console.log(imager);
  simpleApp.use(imge)
  
  // server = http.createServer(simpleApp);
  // simpleApp.listen(5200, function () { console.log('listen') });


  describe('test for mocha', function () {
    it('should work if mocha is installed properly', function (done) {
      done()
    })
  })

  describe('test for imagerience', function () {
    it('should start', function (done) {
      done()
    })
  })

  describe('imagerience()', function () {
    describe('initialize server', function () {
      it('Supertest works', function (done) {
        supertest(simpleApp).get('/').expect(400, '').end(done)
      })
      it('imagerience must work', function (done) {
        // supertest(simpleApp).get('/test').expect(200, 'test').end(done)
        done()
      })
      it('should upload single file', function (done) {
        var filePath = path.join(__dirname, '../test01.jpg');
        fs.exists(filePath).then(function (exists){
          if (!exists) throw new Error('file does not exist'); 
          return supertest(simpleApp)
            .post('/test')
              // Attach the file with key 'file' which is corresponding to your endpoint setting. 
            .attach('test', filePath)
            .then(function (res) {
              console.log(res.body);
            })
            .catch(err => console.log(err));
        })
        supertest(simpleApp).post('/test').attach('test', filePath).expect(200).end(done)
      })
    })
  })

  describe('mongoose close', function () {
    mongoose.disconnect()
  })
}());