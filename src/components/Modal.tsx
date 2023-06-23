import Dialog from "@mui/material/Dialog";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../features/modalSlice";
import { RootState } from "../store";

const Modal = () => {
  
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);
  const handleClose = () => {
    dispatch(modalClose());
  };

  return (
    <Dialog open={modal.open} onClose={handleClose}>
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/6Py3j3OyRPM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <Button
        onClick={handleClose}
        sx={{
          bgcolor: "red",
          color: "#fff",
          '&:hover': {
            bgcolor: "red"
          },
        }}
      >
        Close <CloseIcon sx={{ fontSize: 16 }} />
      </Button>
    </Dialog>
  );
};

export default Modal;