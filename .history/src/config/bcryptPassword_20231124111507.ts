import bcrypt from "bcrypt"
const bcryptPassword = async(password:any) => {
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hash(password, salt);
    return pass;
}
export default bcryptPassword