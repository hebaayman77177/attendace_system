import axios from "./axios";

const API_URL = "users/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "log-in", { email, password })
      .then((response) => {
        const user = {...response.data.data.user,token:response.data.token};
        if (response.data.token) {
          localStorage.setItem(`attendance_system_user`, JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    localStorage.removeItem(`attendance_system_user`);
  }

  register(firstName,lastName, email,address,age, password) {
    return axios.post(API_URL + "sign-up", {
        first_name:firstName,
        last_name: lastName,
        email,
        address,
        age,
        password
    });
  }
}

export default new AuthService();