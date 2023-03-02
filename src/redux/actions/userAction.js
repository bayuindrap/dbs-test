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

// export const userRegis = (name) => {
//     return async (dispatch) => {
//         try {
//             let res = await axios.post(`${API_URL}/dataUser`, {
//                 name: name,
//                 address: address,
//                 eKTP: eKTP,
//                 job: job,
//                 dateOfBirth: dateOfBirth,
//                 phone: phone,
//             })
//             dispatch({
//                 type: "REGISTER_SUCCESS",
//                 payload: res.data[0]
//             })
//             return { success: true }
//         } catch (err) {
//             console.log(err)
//         }
//     }
// }