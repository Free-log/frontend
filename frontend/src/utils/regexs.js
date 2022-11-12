const passwordRegular = /^(?=.*[^ㄱ-ㅎ|가-힣])(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{10,}$/gm;
const idRegular = /^[aA-zZ\d]+$/gm;
const nickNameRegular = /[aA-zZ\d]+/gm;

export { passwordRegular, idRegular, nickNameRegular };
