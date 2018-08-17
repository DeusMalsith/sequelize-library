var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

// Define routes - remember they are relative to /books
router.get('/', function(req, res) {
	db.book.findAll().then(function(books) {
		console.log('books found:', books);
		res.render('books/index', {books: books});
	}).catch(function(err) {
		console.log('I AM ERROR', err);
		res.render('404');
	});
});

router.get('/new', function(req, res) {
	res.render('books/new');
});

router.post('/', function(req, res) {
	db.book.create(req.body).then(function(createdBook) {
		console.log('book created looks like', createdBook);
		res.redirect('/books');
	}).catch(function(err) {
		console.log('ERRORS!', err);
		res.render('404');
	});
});

router.get('/:id', function(req, res) {
	db.book.findById(req.params.id).then(function(foundBook) {
		res.send(foundBook);
	}).catch(function(err) {
		console.log('err', err)
		res.render('404');
	});
});

router.delete('/:id', function(req, res) {
	db.book.destroy({
		where: {id: req.params.id}
	}).then(function(recentlyDestroyed) {
		console.log('deleted:', recentlyDestroyed);
		res.send('successfully deleted!');
	}).catch(function(err) {
		console.log('err', err);
		res.send('sad fail');
	});
});

// Export the router - this lets other files include me
module.exports = router;