import { idRegular } from "@utils/regexs";
import { object, string } from "yup";

const findPasswordValidator = object().shape({
  id: string().min(5).max(20).matches(idRegular, "it's not valid id").required(),
  email: string().email().required(),
});

const findIdValidator = object().shape({
  email: string().email().required(),
});

export { findIdValidator, findPasswordValidator };
