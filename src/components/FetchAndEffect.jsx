import { useState, useEffect } from "react";

const FetchAndEffect = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchUsers = async () => {
    const fetchRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await fetchRes.json();
    console.log(result);
    setUsers(result);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addNewUser = (event) => {
    setUsers((pre) => [...pre, { name: inputValue, id: Math.random() }]);
    setInputValue("");
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="comp">
      <h1>FETCH and Effect</h1>
      <ul>
        {users.map((item, index) => (
          <li key={index + item.name}>{item.name}</li>
        ))}
      </ul>
      <input
        onChange={onInputChange}
        name="name"
        placeholder="name"
        value={inputValue}
      />
      <button onClick={addNewUser}>ADD</button>
    </div>
  );
};

export default FetchAndEffect;
