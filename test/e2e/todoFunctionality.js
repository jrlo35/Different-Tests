/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
  });

  casper.run(function() {
    test.done();
  });
});

//Test that adds and removes todo items
casper.test.begin('Adds and removes todo items',3, function suite(test){
	casper.start('http://localhost:3000/', function (){
		this.fill('.todo-form', {
			todo: 'Write tests'
		}, true);

		//Asserts that an element matching the provided selector expression exists in remote DOM environment
		test.assertExists('.todo-list .todo-item', 'Added todo should exists');

		//Asserts that a given form field has the provided value with input name or selector expression
		test.assertField({type: 'css', path: '.todo-list' '.todo-item' '.todo-input'}, 'Write tests', 'Todo list should have added todo');

		//Performs a click on element matching the provided selector expression
		this.click('.todo-remove');

		//Asserts that an element matching the provided selector expression doesn't exists within the remote DOM environment
		test.assertDoesntExist('.todo-list .todo-item', 'Todo should not exist after removed');
	});
})
