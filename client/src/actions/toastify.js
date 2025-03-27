import { toast } from "react-toastify";

//Pop up an error box
export const errorToast = (message) => {
  toast.error(message, {
    position: "top-center",
    autoclose: 2000,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: true,
  });

  toast.clearWaitingQueue();
};

//Pop up an success box
export const successToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoclose: 2000,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: true,
  });

  toast.clearWaitingQueue();
};

//Closes the popup
export const closeToasts = () => {
  toast.dismiss();
};
