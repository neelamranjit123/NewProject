import React, { useState, useEffect } from "react";
import axios from "axios";
import firebase from "firebase/compat/app";  // Adjust the import path
import "firebase/compat/database";
const database = firebase.database();

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://newsanityblog-default-rtdb.firebaseio.com/test");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCreate = async () => {
    try {
      await database.ref("items").push({
        name: newItem,
      });
      setNewItem("");
      fetchData();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const handleEdit = async () => {
    try {
      await database.ref(`items/${editItem.id}`).update({
        name: editItem.name,
      });
      setEditItem(null);
      fetchData();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await database.ref(`items/${itemId}`).remove();
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h2>CRUD Operations with Firebase</h2>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {editItem === item ? (
              <div>
                <input
                  type="text"
                  value={editItem.name}
                  onChange={(e) =>
                    setEditItem({ ...editItem, name: e.target.value })
                  }
                />
                <button onClick={handleEdit}>Save</button>
              </div>
            ) : (
              <div>
                {item.name}{" "}
                <button onClick={() => setEditItem(item)}>Edit</button>{" "}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
