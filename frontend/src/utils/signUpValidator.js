import { idRegular, passwordRegular } from "@utils/regexs";
import { object, string, ref } from "yup";

const signUpValidator = object().shape({
  id: string()
    .min(5, "아이디가 너무 짧습니다.")
    .max(20, "아이디가 너무 깁니다.")
    .matches(idRegular, "아이디엔 영문, 숫자만 사용 가능합니다.")
    .required("아이디를 입력해 주십시오"),
  email: string().email("옳지 않은 이메일입니다.").required("이메일을 입력해 주십시오"),
  password: string()
    .matches(passwordRegular, "비밀번호는 특수문자 ,숫자 ,영어 대,소문자를 각각 1개씩 포함하고, 8자 이상이여야 합니다")
    .required("비밀번호를 입력해 주십시오"),
  passwordConfirm: string()
    .oneOf([ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 입력해 주십시오"),
});

export default signUpValidator;
