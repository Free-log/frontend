import { idRegular, passwordRegular } from "./regexs";
import { object, string } from "yup";

const signInValidator = object().shape({
  id: string()
    .min(5, false)
    .max(20, "옳지 않은 아이디입니다..")
    .matches(idRegular, "옳지 않은 아이디입니다..")
    .required("아이디를 입력해 주십시오"),
  password: string()
    .matches(
      passwordRegular,
      "비밀번호는 특수문자, 숫자, 영어 대,소문자를 각각 1개씩 포함하여야하며, 8자 이상이여야 합니다"
    )
    .required("비밀번호를 입력해 주십시오"),
});

export default signInValidator;
