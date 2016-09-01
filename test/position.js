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
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body.x).to.be.a('number')
        expect(res.body.y).to.be.a('number')
        expect([-90, 90, 0, 180, -180]).to.include(res.body.direction)

        done();
      });
  });

  it('Should throw an error is position is not found', (done) => {
		// Not CRUD, so harder to mock this, will leave for now
		done();
  })

	it('Should throw an error if unexpected command is sent', (done) => {
		chai.request(URI)
			.put(url)
			.send({
				'direction': 'boom'
			})
			.end(function(err, res) {
				expect(res).to.have.status(422);

				done();
			});

	})

	it('Should update y coordinate when sending UP command', (done) => {

	})

	it('Should update y coordinate when sending DOWN command', (done) => {

	})


	it('Should update direction when sending LEFT command', (done) => {

	})

	it('Should update direction when sending RIGHT command', (done) => {

	})

});
