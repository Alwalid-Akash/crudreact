import { useState } from "react";

export default function Crud() {

  const [users, setUsers] = useState([
    { name: "walid", age: "28" }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    age: ""
  });

  const [editIndex, setEditIndex] = useState(null);


  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = () => {
    setUsers([...users, formData]);
    setFormData({ name: "", age: "" });
  };


  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };


  const handleUpdate = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = formData;
    setUsers(updatedUsers);
    setEditIndex(null);
    setFormData({ name: "", age: "" });
  };


  const handledelete = (index) => {
    const updateUsers = users.filter((_, i) => i !== index);
    setUsers(updateUsers);
  }
  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD OPERATION APP</h1>

      {/* INPUTS */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleInput}
      />

      <input
        type="text"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleInput}
      />

      {/* ADD / UPDATE BUTTON */}
      {editIndex !== null ? (
        <button onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button onClick={handleSubmit}>
          Submit
        </button>
      )}

      <hr />

      <h2>Your Data</h2>

      <ul>
        {users.map((item, index) => (
          <li key={index}>
            {item.name} - {item.age}

            {/* EDIT BUTTON */}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>

            {/* DELETE BUTTON (optional later) */}
            <button style={{ margin: "10px 5px" }} onClick={() => handledelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}