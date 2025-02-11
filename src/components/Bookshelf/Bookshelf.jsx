import { useState } from 'react';

const [newBook, setnewBook] = useState([
  {
    title: '',
    author: ''
  },
  {
    title: '',
    author: ''
  },
])

const [books, setBooks] = useState([
  {
    title: 'Fourth Wing',
    author: 'Rebecca Yarros'
  },
  {
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis'
  },
]);

