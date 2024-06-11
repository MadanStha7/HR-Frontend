import { Modal, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const checkStyle = {
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

const HomePageTable = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="card radius-15 p-4 ">
        <div className="card-header border-bottom-0 mt-3">
          <div className="d-flex align-items-center">
            <div>
              <h5 className="mb-2">Reports</h5>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Check In Time</th>
                  <th>Check Out Time</th>
                  <th>Remarks</th>
                  <th>Breaks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>2024-05-20</td>
                  <td>08:15 AM</td>
                  <td>05:00 PM</td>
                  <td>On time</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>2024-05-20</td>
                  <td>08:45 AM</td>
                  <td>05:30 PM</td>
                  <td>Late arrival</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Robert Brown</td>
                  <td>2024-05-20</td>
                  <td>08:00 AM</td>
                  <td>04:45 PM</td>
                  <td>Left early</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Emily Davis</td>
                  <td>2024-05-20</td>
                  <td>09:00 AM</td>
                  <td>06:00 PM</td>
                  <td>On time</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Michael Wilson</td>
                  <td>2024-05-20</td>
                  <td>08:30 AM</td>
                  <td>05:15 PM</td>
                  <td>Meeting offsite</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Sarah Miller</td>
                  <td>2024-05-20</td>
                  <td>08:10 AM</td>
                  <td>04:50 PM</td>
                  <td>On time</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>David Martinez</td>
                  <td>2024-05-20</td>
                  <td>08:20 AM</td>
                  <td>05:10 PM</td>
                  <td>On time</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Linda Hernandez</td>
                  <td>2024-05-20</td>
                  <td>08:25 AM</td>
                  <td>05:05 PM</td>
                  <td>On time</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>James Clark</td>
                  <td>2024-05-20</td>
                  <td>07:50 AM</td>
                  <td>04:30 PM</td>
                  <td>Left early</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Patricia Rodriguez</td>
                  <td>2024-05-20</td>
                  <td>08:40 AM</td>
                  <td>05:20 PM</td>
                  <td>On time</td>
                  <td>
                    <div
                      className="parent-icon icon-color-5"
                      style={{ fontSize: "30px" }}
                      onClick={handleOpenModal}
                    >
                      <i className="bx bx-show"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={checkStyle}>
          <Typography
            id="modal-modal-title"
            variant="subtitle1"
            gutterBottom
            fontWeight="bold"
          >
            Breaks
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <Box
                  marginTop={4}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <DemoItem label="From" sx={{ marginRight: 3, marginLeft: 3 }}>
                    <TimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                      disabled
                    />
                  </DemoItem>
                  <DemoItem label="To" sx={{ marginRight: 3 }}>
                    <TimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                      disabled
                    />
                  </DemoItem>
                </Box>
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <DemoItem label="From" sx={{ marginRight: 3, marginLeft: 3 }}>
                    <TimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                      disabled
                    />
                  </DemoItem>
                  <DemoItem label="To" sx={{ marginRight: 3 }}>
                    <TimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                      disabled
                    />
                  </DemoItem>
                </Box>
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default HomePageTable;
