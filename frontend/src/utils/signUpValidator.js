import { idRegular, passwordRegular } from "@utils/regexs";
import { object, string, ref } from "yup";

const signUpValidator = object().shape({
  id: string().min(5).max(20).matches(idRegular, "Only alphanumeric characters are allowed for ID").required(),
  email: string().email().required(),
  password: string()
    .matches(passwordRegular, "password should contain at least one digit one character and one punctuation")
    .required(),
  passwordConfirm: string()
    .oneOf([ref("password"), null])
    .required(),
});

export default signUpValidator;
