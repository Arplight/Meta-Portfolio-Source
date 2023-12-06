import { ErrorMessage, Field, Form, Formik } from "formik";
import { ContactSchema } from "./ContactSchema";
import { useContext } from "react";
import { ToastContext } from "../../Contexts/ToastProvider";

export default function Contact() {
  const { toastHandler } = useContext(ToastContext);
  return (
    <div className="Contact" id="contact">
      <Formik
        initialValues={{
          name: "",
          email: "",
          enquiry: "hireMe",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          toastHandler();
        }}
      >
        <Form className="container">
          <h2>Contact Me</h2>

          <label htmlFor="name">
            Name: <br />
            <Field name="name" id="name" />
            <ErrorMessage name="name" className="error" component={"div"} />
          </label>

          <label htmlFor="email">
            Email Address: <br />
            <Field name="email" id="email" type="email" />
            <ErrorMessage name="email" className="error" component={"div"} />
          </label>

          <label htmlFor="enquiry">
            Type of enquiry: <br />
            <Field name="enquiry" id="enquiry" component="select">
              <option value="hireMe">Freelance project proposal</option>
              <option value="openSource">
                Open source consultancy session
              </option>
              <option value="other">Other</option>
            </Field>
          </label>

          <label htmlFor="message">
            Your Message:
            <br />
            <Field name="message" id="message" component="textarea" />
            <ErrorMessage name="message" className="error" component={"div"} />
          </label>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
