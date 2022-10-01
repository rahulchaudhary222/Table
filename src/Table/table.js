import React, { useEffect, useState } from "react";
import "./table.css";

const Table = () => {
  const [data, setData] = useState([]);
  const [inputval, setInputval] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const Deletebtn = (id) => {
    setData((data) => data.filter((el) => el.id !== id));
  };
  return (
    <>
      <>
        <input
          placeholder="Search By Name"
          value={inputval}
          onChange={(event) => setInputval(event.target.value)}
        />
        <table>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Username</th>
            <th>Number</th>
            <th>Email</th>
            <th>Website</th>
            <th>City</th>
            <th>Remove</th>
          </tr>
          {data.map((e) =>
            e.name.toLowerCase().includes(inputval.toLowerCase()) ||
            !inputval ? (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>{e.website}</td>
                <td>{e.address.city}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      Deletebtn(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ) : null
          )}
        </table>
      </>
    </>
  );
};
export default Table;
