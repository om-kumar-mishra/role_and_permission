const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('Connected!'));

//Schema declaration
    
// Schema for the "Book" collection
const bookSchema = new mongoose.Schema({
    title: String,
    genre: String,
    // Reference to the "Author" model
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  });
  
  // Schema for the "Author" collection
  const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });


  const Book = mongoose.model('Book', bookSchema);
const Author = mongoose.model('Author', authorSchema);



//insert value

const author = new Author({
    name: 'John Doe',
    age: 40,
  });
  
  author.save((err, savedAuthor) => {
    if (err) {
      console.error('Error saving author:', err);
    } else {
      const book1 = new Book({
        title: 'Book 1',
        genre: 'Fiction',
        author: savedAuthor._id, // Associate the author's _id with the book
      });
  
      const book2 = new Book({
        title: 'Book 2',
        genre: 'Mystery',
        author: savedAuthor._id, // Associate the same author's _id with another book
      });
  
      book1.save();
      book2.save();
    }
  });
  

  //calling 


  Book.find({})
  .populate('author') // Populate the author field with the full author object
  .exec((err, books) => {
    if (err) {
      console.error('Error finding books:', err);
    } else {
      console.log('Books:', books);
    }
  });