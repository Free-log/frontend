import { idRegular, passwordRegular } from "@utils/regexs";
import { object, string, ref } from "yup";

const signUpValidator = object().shape({
  id: string().min(5).max(20).matches(idRegular, "Only alphanumeric characters are allowed for ID").required(),
  email: string().email().required(),
  password: string()
    .matches(passwordRegular, "비밀번호는 특수문자 ,숫자 ,영어 대,소문자를 각각 1개씩 포함하고, 8자 이상이여야 합니다")
    .required(),
  passwordConfirm: string()
    .oneOf([ref("password"), null])
    .required(),
});

export default signUpValidator;
