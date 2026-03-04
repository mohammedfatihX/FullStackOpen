import { useState } from "react";

const FormSearch = ({ listenOnChange }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <form type="submit">
        <p>find countries</p>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            listenOnChange(e, setValue);
          }}
        />
      </form>
    </>
  );
};

export default FormSearch;
