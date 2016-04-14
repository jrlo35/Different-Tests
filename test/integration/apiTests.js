describe('API integration', function(){
  var server, setupStub, JSONresponse;



  before(function() {
  	server = sinon.fakeServer.create();

  	setupStub = sinon.stub(todo,'setup');

  	JSONresponse = {
  		todos: [
  		{

  			name: 'run tests',
  			done: true
  		},
  		{
  			name: 'more tests',
  			done: true
  		},
  		{
  			name: 'more more tests',
  			done: true
  		}
  		]
  	};

  	server.respondWith('GET', 'http://localhost:3000/todos',
  		[200,{'Content-Type': 'application/json'}, JSON.stringify(JSONresponse)]);
  });

  after(function() {
  	server.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function(){
  	todo.init();
  	server.respond();
  	assert(setupStub.calledWith(JSONresponse.todos));
  });
  
});
