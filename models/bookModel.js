const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String },
  author: { type: String, required: false },
  genre: { type: String, required: false },
  reviews:[{
    u_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    review:{type : String}
  }],
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;



// {
//   "title":"book1", 
//   "author":"author1",
//   "genre":"genre"
// }