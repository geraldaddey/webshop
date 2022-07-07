import React, { useState } from "react";

export const Homepage = () => {
  const handleSubmit = () => {
    console.log("form submitted");
  };
  const [user, setUser] = useState("Gerald");

  return (
    <div>
      <nav id="nav">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Cart</li>
          <li>About</li>
        </ul>
      </nav>
      <h1>New Homepage</h1>
      <form onSubmit={handleSubmit()}>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={handleSubmit()}> Submit </button>
      </form>
      <span>
        {" "}
        {user} is now changed to {setUser}
      </span>
      <p></p>
    </div>
  );
};
