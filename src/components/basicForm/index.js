import React, { useState } from "react";
import Form from "@rjsf/core";

const schema = {
  type: "string",
  title: "Basic Form",
};

export const BasicForm = () => {
  const [formData, setFormData] = useState("");
  return (
    <React.Fragment>
      <h3>Basic Form</h3>
      <Form
        schema={schema}
        formData={formData}
        onChange={(e) => setFormData(e.formData)}
        onSubmit={(e) => {
          console.log(JSON.stringify(e, null, 2));
        }}
      />
    </React.Fragment>
  );
};
