import axios from "axios";
import { API_URL } from "../../helper";

export const userAction = () => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/dataUser`)
            dispatch({
                type: "GET_USER",
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const userRegis = (name, address, eKTP, job, dob, phone, phonez) => {
    return async (dispatch) => {
        try {
            let res = await axios.post(`${API_URL}/dataUser`, {
                name: name,
                eKTP: eKTP,
                address: address,
                job: job,
                dob: dob,
                phone: phone,
                phonez: phonez
            })
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: res.data[0]
            })
            return { success: true }
        } catch (err) {
            console.log(err)
        }
    }
}