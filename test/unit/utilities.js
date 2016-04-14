var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){
    it('should have all the necessary methods', function(){
    	todo.util.should.have.property('trimTodoName');
    	expect(todo.util.isValidTodoName).to.exist;
    	expect(todo.util.getUniqueId).to.exist;
    });
    it('should have a function getUniqueId', function () {
    	assert.typeOf(todo.util.getUniqueId, 'function','is a function')
    });
  });
});

describe('the todo.util methods', function() {
	describe('trimToDoName', function () {
		it('should find whitespace and replace with empty space', function () {
			todo.util.trimTodoName('cool  ').should.equal('cool');
		});
		it('should return length of string without whitespace', function () {
			todo.util.trimTodoName('cool  ').should.have.length(4);
		})
	})
	describe('isValidTodoName', function () {
		it('should return false if name length is less than 1', function () {
			todo.util.isValidTodoName('o  ').should.equal(false);
		});
		it('should return true if name length is greater than 1', function () {
			todo.util.isValidTodoName('shop').should.not.equal(false);
		});
	})
	describe('getUniqueId', function () {
		it('should increment by 1', function () {
			assert.equal(2,todo.util.getUniqueId());
            expect(todo.util.getUniqueId()).to.equal(3);
		})
	})
    describe('')


});
