/**
 * imagerience
 * Maximum Image Experience for Express.js
 * Copyright(c) 2019 gbkim
 * MIT Licensed
 */

'use strict'

/**
 * Module exports.
 * @public
 */

module.exports = imagerience

/**
 * Dependency Module
 */

// eslint-disable-next-line no-unused-vars
var mongoose = require('mongoose')
var multer = require('multer')
var cors = require('cors')
var path = require('path')
var express = require('express')

// mongoose connection state 
/**
 * 0: disconnected 1: connected 2: connecting 3: disconnecting
 */

var router = require('express').Router()

mongoose.Schema({

})

function imagerience (options) {
  if (!options.uri) { throw new Error('options.uri must be passed')}

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, options.basePath) // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
      // 파일 이름이 중복되면 자동으로 교체된다.
      cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
  });
  var upload = multer({ storage: storage })
  var uploads = path.join(__dirname, options.basePath);
  router.use(options.staticUri, express.static(options.basePath))
  // 원하는 URL 에 등록한다.
  router.post(options.uri, upload.single('test'), function cdn (req, res, next) {
    console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
    res.send(req.file);
  });
  return router;
}
