import React, { useState } from "react";
import { Paper, Stack, Box, Typography, Button, Modal } from "@mui/material";

//Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const APODCard = ({ cardData }) => {
  //State for the "Details" Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //JSX for the card
  return (
    <React.Fragment>
      {/* Image and related data */}
      <Paper elevation={3}>
        <Stack direction="column">
          <a href={cardData.url}>
            <img
              src={cardData.url}
              alt={cardData.title}
              height={400}
              width={"100%"}
              style={{ padding: 0 }}
            ></img>
          </a>
          <Box
            sx={{
              textAlign: "center",
              padding: "5px",
            }}
          >
            <Typography variant="h5">{cardData.title}</Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Typography variant="h6">
                {cardData.date.toLocaleString()}
              </Typography>
              <Typography variant="h6" style={{ fontStyle: "italic" }}>
                by {cardData.copyright ? cardData.copyright : "unknown"}
              </Typography>
            </Stack>
          </Box>
          <Button
            variant="contained"
            size="medium"
            sx={{ width: "20%", alignSelf: "center", marginBottom: "10px" }}
            onClick={handleOpen}
          >
            Details
          </Button>
        </Stack>
      </Paper>

      {/* Modal box to display the "details */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Stack sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              {cardData.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {cardData.explanation}
            </Typography>
            <Button
              variant="text"
              sx={{ marginTop: "5px" }}
              onClick={handleClose}
            >
              Dismiss
            </Button>
          </Stack>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default APODCard;
