'use strict';
const yConfig = require('yaml-config');

const config = yConfig.readConfig(`${__dirname}/../config/app.yaml`, 'test');
let chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

let expect = chai.expect;

let RoverServices = require('../app/services/RoverService');

const URI = 'http://127.0.0.1:' + config.port;

describe('Status :', () => {

  const url = '/';

  it('Should list current status of Rover', (done) => {

    chai.request(URI)
      .get(url)
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body.position).to.be.a('object')
        expect(res.body.status).to.equal('Operational')

        done();
      });
  });
});
