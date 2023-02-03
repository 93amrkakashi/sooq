import { toast } from "react-toastify";

const position = "top-center",
  autoClose = 3000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined,
  theme = "dark";

export const notifygood = (message) =>
  toast.success(message, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });

  export const notifybad = (message) =>
  toast.error(message, {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });


  // a react-toastify package used for notifications
