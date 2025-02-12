import { useState } from 'react';

const Bookshelf = () => {
  // State for the list of books
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // State for new book input
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target; // Get name and value from input
    setNewBook((prevBook) => ({
      ...prevBook,  // Keep existing values
      [name]: value // Update only the changed field
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure both fields are filled
    if (newBook.title.trim() === '' || newBook.author.trim() === '') return;

    setBooks([...books, newBook]); // Add new book to list
    setNewBook({ title: '', author: '' }); // Reset form fields
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>

      {/* Display Books */}
      <div className="bookCardsDiv">
        <h3>Bookshelf</h3>
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <p><strong>{book.title}</strong> by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;