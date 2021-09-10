//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();

chai.use(chaiHttp);

describe('Register', () => {
	beforeEach((done) => { //Before each test we empty the database
		
			done();
		
	});
	/*
	* Test the POST /register route
	*/
  	describe('/POST user', () => {
		it('it should POST a user', (done) => {
			let user = {
				email: "test@email.com",
				firstName: "Amr",
				lastName: "Eraky",
				password: "123456",
				phone: "+201020251077"
			}
		chai.request(server)
			.post('/api/register')
			.send(user)
			.end((err, res) => {
				should.exist(res.body);
				res.body.should.be.a('object');
				res.body.should.have.property('ok');
				done();
			});
		});

	});
});

describe('Login', () => {
	beforeEach((done) => { //Before each test we empty the database
		
			done();
		
	});
	/*
	* Test the POST /login route
	*/
  	describe('/Login user', () => {
		it('it should Login a user', (done) => {
			let user = {
				email: "test@email.com",
				password: "123456"
			}
		chai.request(server)
			.post('/api/login')
			.send(user)
			.end((err, res) => {
				should.exist(res.body);
				res.body.should.be.a('object');
				res.body.should.have.property('ok');
				done();
			});
		});

	});
});