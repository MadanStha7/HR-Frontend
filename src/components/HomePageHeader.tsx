import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const style = {
  position: "absolute" as "absolute",
  top: "15%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  p: 2,
};

const checkStyle = {
  position: "absolute" as "absolute",
  top: "15%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  p: 2,
};

interface LocalizationProviderState {
  id: number;
}

const HomePageHeader = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen1 = () => setOpen1(true);
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);
  const [localizationProviders, setLocalizationProviders] = useState<
    LocalizationProviderState[]
  >([{ id: 0 }]);

  const handleAddLocalizationProvider = () => {
    setLocalizationProviders([
      ...localizationProviders,
      { id: localizationProviders.length },
    ]);
  };

  const handleRemoveLocalizationProvider = (id: number): void => {
    setLocalizationProviders(
      localizationProviders.filter((item) => item.id !== id)
    );
  };

  const [status, setStatus] = useState("Checked Out");

  const handleCheckInOut = (newStatus: string) => {
    setStatus(newStatus);
    handleClose();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 2,
          marginRight: 15,
        }}
      >
        {status === "Checked In" ? (
          <>
            <Button
              onClick={handleOpen1}
              variant="contained"
              size="medium"
              sx={{
                borderRadius: "25px",
                marginLeft: "40px",
                backgroundColor: "#6610f2 !important",
                fontWeight: "bold",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#6610f2 !important",
                },
                ":focus": {
                  outline: "none !important",
                },
              }}
            >
              Add Break
            </Button>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Breaks
                  </Typography>
                  <div
                    className="parent-icon icon-color-3"
                    style={{ fontSize: "30px" }}
                    onClick={handleAddLocalizationProvider}
                  >
                    <i className="bx bx-plus-circle"></i>
                  </div>
                </Box>

                {localizationProviders.map(({ id }) => (
                  <LocalizationProvider key={id} dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <Box
                        marginTop={4}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <DemoItem label="From" sx={{ marginRight: 3 }}>
                          <TimePicker
                            defaultValue={dayjs("2022-04-17T15:30")}
                          />
                        </DemoItem>
                        <DemoItem label="To" sx={{ marginRight: 3 }}>
                          <TimePicker
                            defaultValue={dayjs("2022-04-17T15:30")}
                          />
                        </DemoItem>
                        <div
                          className="parent-icon icon-color-3 mt-4 mr-3"
                          style={{ fontSize: "35px" }}
                        >
                          <i className="bx bx-check"></i>
                        </div>
                        <div
                          className="parent-icon icon-color-2 mt-4 mr-3"
                          style={{ fontSize: "35px" }}
                          onClick={() => handleRemoveLocalizationProvider(id)}
                        >
                          <i className="bx bx-x"></i>
                        </div>
                      </Box>
                    </DemoContainer>
                  </LocalizationProvider>
                ))}
              </Box>
            </Modal>
          </>
        ) : (
          <></>
        )}

        <Button
          onClick={handleOpen}
          variant="contained"
          size="medium"
          sx={{
            borderRadius: "25px",
            marginLeft: "40px",
            backgroundColor:
              status === "Checked In"
                ? "#00cd98!important"
                : "#ff007c!important",
            fontWeight: "bold",
            textTransform: "none",
            ":hover": {
              backgroundColor: status === "Checked In" ? "#03C03C" : "#d00070",
            },
            ":focus": {
              outline: "none !important",
            },
          }}
        >
          {status}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={checkStyle}>
            <Typography id="modal-modal-title" variant="subtitle1" gutterBottom>
              Are you sure you want to{" "}
              {status === "Checked In" ? "Check Out" : "Check In"}?
            </Typography>
            <Box
              marginTop={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() =>
                  handleCheckInOut(
                    status === "Checked In" ? "Checked Out" : "Checked In"
                  )
                }
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "#00853E!important",
                  fontWeight: "bold",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "#03C03C",
                  },
                  ":focus": {
                    outline: "none !important",
                  },
                }}
              >
                Yes
              </Button>
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  marginLeft: "8px",
                  backgroundColor: "#ff007c!important",
                  fontWeight: "bold",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "#03C03C",
                  },
                  ":focus": {
                    outline: "none !important",
                  },
                }}
              >
                No
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default HomePageHeader;
