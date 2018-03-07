const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../server.j');
const {Todo} =  require('./../models/todo');

describe( 'POST /todos' , () => {

  it('should create a new todo', (done) => {

    var text = 'Todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect( (res) => {
        expect(res.body.text).toBe(test);
      } )
      .end( (err,res) => {

        if(err){
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done()
        }).catch( (e) => { done(e) } );

      } );

  });

} );
