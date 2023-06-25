import { Dialog, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../features/modalSlice";
import { RootState } from "../store";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);

  return (
    <Dialog open={modal.open} onClose={() => dispatch(modalClose())}>
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/6Py3j3OyRPM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <Button
        onClick={() => dispatch(modalClose())}
        sx={{
          bgcolor: "error.main",
          color: "text.primary",
          "&:hover": {
            bgcolor: "error.dark",
          },
        }}
      >
        Close <CloseIcon sx={{ fontSize: 16 }} />
      </Button>
    </Dialog>
  );
};

export default Modal;
