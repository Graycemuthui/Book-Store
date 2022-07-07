import './AddBook.css';

function AddBook() {
  return (
    <div className="input-fields">
      <h1>ADD NEW BOOK</h1>
      <form className="forms">
        <input type="text" id="title" placeholder="Book title" />
        <input type="text" id="author" placeholder="Author" />
      </form>
    </div>
  );
}

export default AddBook;
