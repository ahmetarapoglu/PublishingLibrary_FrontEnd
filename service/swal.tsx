import Swal from "sweetalert2"
import Error from "../components/service/error"
import ReactDOMServer from 'react-dom/server';

const successAlert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 150000,
    })
}
const errorAlert = (title: string = "Unauthorized Access", description: any = "", code: number) => {
    const html = ReactDOMServer.renderToString(<Error code={code} title="Error" description={description} />);
    Swal.fire({
        icon: 'error',
        title: `${title}`,
        html: `${html}`,
        showCancelButton: true,
        cancelButtonText: "OK",
        showConfirmButton: false
    }).then((result) => {
        if (result.isDismissed && code == 401) {
            window.location.href = "/auth/login"
        }
    })
}

export { successAlert, errorAlert }