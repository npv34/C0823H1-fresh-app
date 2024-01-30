import {useState} from "react";
import {Snackbar} from "@mui/material";

function MyToast({message, vertical, horizontal, open}) {
    const [state, setState] = useState({
        open: false,
    });

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <Snackbar
            autoHideDuration={4000}
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message={message}
            key={vertical + horizontal}
        />
    )

}

export default MyToast;