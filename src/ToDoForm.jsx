import {useState} from "react";
export function ToDoForm({onSubmit})
{
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e)
    {
        e.preventDefault(); //remove default submit logic
        if(newItem === "")
            return;

        onSubmit(newItem);
        setNewItem("");
    }
    
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} type="text" id="item" 
          onChange={e => setNewItem(e.target.value)} />
        </div>
        <button className="btn">Add</button>
      </form>
    );
}

