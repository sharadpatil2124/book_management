
const express = require('express');
const bookControllers = require('../controllers/bookControllers')
const userController = require('../controllers/userControllers');
const authorise = require('../middleware/authorise');

const router = express.Router();

router.post('/addBook',bookControllers.addBook);
//http://localhost:5000/api/addBook/
router.get('/getAllBooks',bookControllers.getAllBooks);
// http://localhost:5000/api/getAllBooks


router.get('/getByCategory');
router.get('/getByName');

router.delete('/book/:id',bookControllers.deleteBook);
//http://localhost:5000/api/book/

router.put('/book/:id',bookControllers.updateBook);
//http://localhost:5000/api/book/



//user

router.post('/register',userController.addUser);
//http://localhost:5000/api/register/
router.post('/login',userController.getUser);
//http://localhost:5000/api/login

router.get('/getBooksWithAuth',authorise,bookControllers.getAllBooks);
//http://localhost:5000/api/getBooksWithAuth

router.post('/book/:id/reviews',authorise,bookControllers.addReview);
// http://localhost:5000/api/book/:id/reviews

module.exports = router;













