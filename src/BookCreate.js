const BookCreate = () => {
    return (

        <form>
                <div className="card">
                    <div className="card-header">
                        <h2>Book Store</h2>
                    </div>
                    <div className="card-body">
                        <div className="mt-4">
                            <label>Book Name</label>
                            <input className="form-control" placeholder="Book Name" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Author</label>
                            <input className="form-control" placeholder="Author" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Genre</label>
                            <input className="form-control" placeholder="Genre" type="text" required />
                        </div>
                        <div className="mt-4">
                            <button id="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
    );
}
 
export default BookCreate;