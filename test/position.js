'use strict';
const yConfig = require('yaml-config');

const config = yConfig.readConfig(`${__dirname}/../config/app.yaml`, 'test');
let chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

let expect = chai.expect;

let RoverServices = require('../app/services/RoverService');

const URI = 'http://127.0.0.1:' + config.port;

describe('Position :', () => {

  const url = '/position';

  it('Should list current position of Rover', (done) => {

    chai.request(URI)
      .get(url)
      .end(function(err, res) {
        console.log(res)
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body.x).to.be.a('number')
        expect(res.body.y).to.be.a('number')

        done();
      });
  });

});
