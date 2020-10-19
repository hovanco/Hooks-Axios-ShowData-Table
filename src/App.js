import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsersPromise();
    // fetchUsersAsync();
  }, []);

  // solution 1: write code according to callback hell
  const fetchUsersPromise = () => {
    setLoading(true);
    //  setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    // }, 2000);
  };

  // solution 1: write code according to try-catch
  const fetchUsersAsync = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("res", res);
      setUsers(res.data);
    } catch (err) {
      console.log(err); // You can figure out of error handling
    }
    setLoading(false);
  };


  return (
    <div className="app">

      <h1 style={{ textAlign: "center" }}>Hello axios asynce-await</h1>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>

          {/* {users.map((user, index) => (  // No show in table
            <div key={index}>
              <h3>{user.name}</h3>
              <h3>{user.username}</h3>
              <h3>{user.email}</h3>
              <hr />
            </div>
          ))} */}

          <div className="container">
            <div className="col-xs-8">
              <h1>React Axios Example</h1>
              <div className="panel-body">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>id</th>
                      <th>name</th>
                      <th>email</th>
                      <th>username</th>
                      <th>phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
