//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();

chai.use(chaiHttp);

describe('Get all todos ', () => {
	beforeEach((done) => { //Before each test we empty the database
		
			done();
		
	});
	/*
	* Test the GET /todo/all route
	*/
  	describe('/todo/all', () => {
		it('it should GET all todos', (done) => {
		    chai.request(server)
			.get('/api/todo/all')
			.end((err, res) => {
				should.exist(res.body);
				res.body.should.have.property('ok');
				done();
			});
		});

	});
});

describe('Get a user todos', () => {
	beforeEach((done) => { //Before each test we empty the database
		
			done();
		
	});
	/*
	* Test the GET /todo route
	*/
  	describe('/api/todo', () => {
		it("it should GET user's todos", (done) => {
		    chai.request(server)
			.get('/api/todo')
			.end((err, res) => {
				should.exist(res.body);
				res.body.should.have.property('ok');
				done();
			});
		});

	});
});

describe('Add a todo', () => {
	beforeEach((done) => { //Before each test we empty the database
		
			done();
		
	});
	/*
	* Test the /todo POST route
	*/
  	describe('/POST todo', () => {
		it('it should POST a todo', (done) => {
			let todo = {
				name: "todo name",
                user: "user id",
                category: "category id"
			}
		chai.request(server)
			.post('/api/todo')
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