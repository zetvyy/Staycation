import InputNumber from "components/Form/InputNumber";
import React, { useState } from "react";

const DetailPage = () => {
  const [value, setValue] = useState("1");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <InputNumber
            max={30}
            suffix=" night"
            name="value"
            value={value}
            onChange={handleChange}
            isSuffixPlural
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
