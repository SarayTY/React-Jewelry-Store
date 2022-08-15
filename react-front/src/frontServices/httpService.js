import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
    const { response } = error;
    if(!response) {
        toast.error("Bad connection to server");
    } else if ( response.status >= 403) {
        console.log("httpService : im in error");
        toast.error("An unexpected error occurred" , {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return Promise.reject(error);
})

function setDefaultCommonHeader(header , value) {
    axios.defaults.headers.common[header] = value;
}

const service = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    setDefaultCommonHeader,
};

export default service;