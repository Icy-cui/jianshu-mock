import * as constants from "./constants";
import axios from "axios";

const ChangeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const login = (acc, password) => {
    return (dispatch) => {
        axios
            .get("/api/login.json?account=" + acc + "&password=" + password)
            .then((response) => {
                const result = response.data.data;
                if (result) {
                    dispatch(ChangeLogin())
                } else {
                    alert("error")
                }
                // console.log(response)
            });

    };
};