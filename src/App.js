import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState("");
  const [list, setList] = useState([]);
  const [itemIndex, setItemIndex] = useState(null);
  const [itemText, setItemText] = useState("");

  function handleAddItems(e) {
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      text: items,
      completed: false,
    };
    setList([...list, newItem]);
    setItems("");
    console.log(list);
  }

  function handleDelete(ItemId) {
    const newList = [...list].filter((f) => f.id !== ItemId);
    setList(newList);
  }

  function handleSubmitEdit(ItemId) {
    const newList2 = [...list].map((m) => {
      if (m.id === ItemId) {
        m.text = itemText;
      }
      return m;
    });

    setList(newList2);
    setItemText("");
    setItemIndex(null);
  }

  const handleCompleted = (itemId) => {
    const newList3 = [...list].map((q) => {
      if (q.id === itemId) {
        q.completed = !q.completed;
      }
      return q;
    });
    setList(newList3);
  };

  return (
    <div className="App">
      <div>
        <h1>New list</h1>
        <label>
          Enter item name : {"  "}:
          <input
            type="text"
            value={items}
            onChange={(e) => setItems(e.target.value)}
          />
        </label>
        <button onClick={handleAddItems}>Add item</button>
      </div>
      <div>
        {list.map((l) => {
          return (
            <div key={l.id}>
              <input
                type="checkbox"
                id="completed"
                checked={l.completed}
                onChange={() => handleCompleted(l.id)}
              />
              {itemIndex === l.id ? (
                <input
                  type="text"
                  value={itemText}
                  onChange={(e) => setItemText(e.target.value)}
                />
              ) : (
                l.text
              )}
              {itemIndex === l.id ? (
                <button onClick={() => handleSubmitEdit(l.id)}>
                  Submit Edit
                </button>
              ) : (
                <button onClick={() => setItemIndex(l.id)}>Edit</button>
              )}

              <button onClick={() => handleDelete(l.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
