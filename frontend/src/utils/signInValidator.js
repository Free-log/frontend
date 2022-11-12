import { idRegular, passwordRegular } from "./regexs";
import { object, string } from "yup";

const signInValidator = object().shape({
  id: string().min(5, false).max(20).matches(idRegular).required(),
  password: string().matches(passwordRegular).required(),
});

export default signInValidator;
