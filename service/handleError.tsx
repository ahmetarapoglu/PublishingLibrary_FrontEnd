import { errorAlert } from "./swal"

export const HandleError = async (errors: any) => {
    if (errors.status == 401) {
        errorAlert("Unauthorized Access", "Sorry,your request could not be processed.", 401)
    }
    else if (errors.status == 400) {
        const errorArray = Object.entries(errors.errors).map(([key, value]: any) => `${key}: ${value[0]}`);
        errorAlert("Bad Request", errorArray, 400)
    }

}