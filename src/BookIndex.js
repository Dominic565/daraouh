import BookCreate from './BookCreate'
import BookTable from './BookTable';
import { useEffect, useState } from 'react';
const BookIndex = () => {
    const [books, setBooks] = useState(null);

    const handleDelete = (id) => {
        const newBooks = books.filter(book => book.bookname !== id);
        setBooks(newBooks);
    }

    useEffect(() => {
        fetch('http://localhost:8000/books')
        .then (res => {
           return res.json();
        })
        .then (data => {
            setBooks(data);
        })
    }, []);

    return (
        <div class="m-5">
        <div class="row">
            <div class="col-md-3">
                <BookCreate />
            </div>
            <div class="col-md-9">
                {books && <BookTable books={books} handleDelete={handleDelete} />}
            </div>
        </div>
    </div>

    );
}
 
export default BookIndex;