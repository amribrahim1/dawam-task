//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();

chai.use(chaiHttp);

describe('Add a category', () => {
	beforeEach((done) => { //Before each test we empty the database
		
			done();
		
	});
	/*
	* Test the POST /category route
	*/
  	describe('/POST category', () => {
		it('it should POST a category', (done) => {
			let todo = {
				name: "category name"
			}
		chai.request(server)
			.post('/api/category')
			.send(todo)
			.end((err, res) => {
				should.exist(res.body);
				res.body.should.be.a('object');
				res.body.should.have.property('ok');
				done();
			});
		});
	});
});

describe('Add a category', () => {
	beforeEach((done) => { //Before each test we empty the database
		
			done();
		
	});
	/*
	* Test the GET /category route
	*/
  	describe('/POST category', () => {
		it('it should POST a category', (done) => {
		    chai.request(server)
			.get('/api/category')
			.end((err, res) => {
				should.exist(res.body);
				res.body.should.have.property('ok');
				done();
			});
		});
	});
});