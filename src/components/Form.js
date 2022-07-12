import './Form.css';

function Forms() {
  return (
    <div className="input-fields">
      <h1>ADD NEW BOOK</h1>
      <form className="forms">
        <input type="text" id="title" placeholder="Book title" />
        <input type="text" id="author" placeholder="Author" />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default Forms;
