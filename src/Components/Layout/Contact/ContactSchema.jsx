import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .min(2, "Too Short!")
    .max(20, "Too Long!"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid Email"),
  message: Yup.string()
    .required("Message is a required field")
    .min(30, "Too Short Message"),
});
