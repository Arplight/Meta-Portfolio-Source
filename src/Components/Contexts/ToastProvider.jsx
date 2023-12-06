import { createContext } from "react";
import { toast } from "react-toastify";
export const ToastContext = createContext();
export default function ToastProvider(Props) {
  function toastHandler() {
    toast.success("Thanks for your submission ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <ToastContext.Provider value={{ toastHandler }}>
      {Props.children}
    </ToastContext.Provider>
  );
}
