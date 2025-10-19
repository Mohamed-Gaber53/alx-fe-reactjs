// FormikForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const FormikForm = () => {
  const [success, setSuccess] = useState("");

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log("User Registered (Formik):", values);

    // محاكاة إرسال البيانات
    await new Promise((r) => setTimeout(r, 500));

    setSuccess("✅ Registration successful with Formik!");
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Formik + Yup Form</h2>

        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage
          name="username"
          component="div"
          style={{ color: "red" }}
        />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: "red" }}
        />

        {success && <p style={{ color: "green" }}>{success}</p>}

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
