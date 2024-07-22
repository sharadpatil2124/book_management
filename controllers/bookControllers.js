const Book = require('../models/bookModel');

async function addBook(req, res){
    console.log("req.body get book****",req.body);
    
    try{
        const newBook = new Book(req.body);

        const result = await newBook.save();
        res.status(200).send({ message : "book added successfully",task : result});

    }catch (error){
        res.status(500).send(error);
    }
}

async function getAllBooks(req, res){
    console.log("*********")
    try {
        result = await Book.find({},{__v:0});
        console.log(result);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteBook(req,res){
    console.log("req.params.id",req.params.id);
    // ID = req.params.id;
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book){
            res.status(400).send({ message : "book not found"});
        }
        res.send({task : book, message : "book deleted"});
    } catch (error) {
        res.status(500).send(error);
    }
}


async function updateBook(req,res){
    console.log("UpdateBook req.body.params.id",req.params.id);
    console.log("updateBook req.body",req.body);
    try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        });
    if (!book){
        res.status(400).send({message:"Book not found"});
    }
    res.status(200).send({message : "Book updated",task : book});
        
    } catch (error) {
        res.status(500).send(error);
    }
}

async function addReview(req,res){
    try{
        const id = req.params.id;
        const uid = req.user.id;
        const newReview = req.body.review;
        console.log(id,uid,newReview);
        const result = await Book.findById(id);
        if(!result){
            res.status(400).send({message:"book not found"})
        }
        result.reviews.push({u_id : uid, review : newReview});
        await result.save();
        res.status(200).send({message:"Review add sucessfully"});
        
    }catch(error){
     res.status(500).send(error);
    }
}

module.exports = {
    getAllBooks,
    addBook,
    deleteBook,
    updateBook,
    addReview
}