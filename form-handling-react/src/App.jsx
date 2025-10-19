// App.jsx
// استخدم أي نموذج تريده (Controlled أو Formik)

import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Form Handling</h1>

      <div style={{ display: "flex", gap: "50px" }}>
        {/* نموذج بالتحكم اليدوي */}
        <RegistrationForm />

        {/* نموذج باستخدام Formik */}
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
