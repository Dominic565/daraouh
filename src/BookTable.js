const BookTable = ({books, handleDelete}) => {

    return (
        <div className="visitor-list">
            <h2>Book Store</h2>
            <table className="table table-striped border border-light">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) =>
                        <tr key={book.bookname}> 
                        <td>{book.bookname}</td>
                        <td>{book.author}</td>
                        <td>{book.genre}</td>
                            <td><a className="btn" onClick={() => handleDelete(book.bookname)} ><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}
 
export default BookTable;