import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add a New Book</h1>
      <form>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Author" required />
        <textarea placeholder="Description" required></textarea>
        <input type="url" placeholder="Cover Image URL" required />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default AddBook;