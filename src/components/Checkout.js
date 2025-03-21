import { useState } from "react";

const Checkout = () => {
  const [text, setText] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <form>
        <input
          name="firstName"
          type="text"
          value={text.firstName}
          onChange={(e) => setText({ ...text, firstName: e.target.value })}
        />
        <input
          name="lastName"
          type="text"
          value={text.lastName}
          onChange={(e) => setText({ ...text, lastName: e.target.value })}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={(e) => setText({ ...text, email: e.target.value })}
        />
        <input
          name="address"
          type="text"
          placeholder="address"
          onChange={(e) => setText({ ...text, address: e.target.value })}
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
