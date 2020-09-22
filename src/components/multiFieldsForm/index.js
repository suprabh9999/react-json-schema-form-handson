import React, { useEffect, useState } from "react";
import Form from "@rjsf/core";

const schema = {
  type: "object",
  title: "Multi Fields Form",
  properties: {
    name: {
      type: "string",
      title: "Full Name",
    },
    gender: {
      type: "boolean",
      enumNames: ["Male", "Female"],
    },
    dob: {
      type: "string",
    },
    age: {
      type: "number",
    },
  },
};

const uiSchema = {
  gender: {
    "ui:widget": "radio",
  },
  dob: {
    "ui:widget": "date",
  },
};

export const MultifieldsForm = () => {
  const [formData, setFormData] = useState({});
  // Simulating the pre-fetched data from API
  useEffect(() => {
    setTimeout(() => {
      setFormData({
        name: "Noah Harari",
        gender: true,
        dob: "1980-03-09",
        age: 40,
      });
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <h3>Multi Fields Form</h3>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={(e) => setFormData(e.formData)}
        onSubmit={(e) => {
          console.log(JSON.stringify(e, null, 2));
        }}
      />
    </React.Fragment>
  );
};
