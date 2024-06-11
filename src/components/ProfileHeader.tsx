import { Button, Modal, Box, Typography } from "@mui/material";

import { useState } from "react";
const checkStyle = {
  position: "absolute" as "absolute",
  top: "15%",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: 500,
  maxHeight: "70%",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  p: 2,
};
const ProfileHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Button
          onClick={handleOpen}
          variant="contained"
          size="medium"
          sx={{
            borderRadius: "25px",
            marginLeft: "40px",
            backgroundColor: "#03C03C!important",
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
          Create New User
          <i
            className="bx bx-user-plus icon-color-5 ml-2 "
            style={{ fontSize: "20px" }}
          ></i>
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={checkStyle}>
            {/* <Typography id="modal-modal-title" variant="subtitle1" gutterBottom>
              Create New User
            </Typography> */}
            <div className="card radius-15 border-lg-top-primary">
              <div className="card-body p-5">
                <div className="card-title d-flex align-items-center">
                  <div>
                    <i className="bx bxs-user mr-1 font-24 text-primary"></i>
                  </div>
                  <h4 className="mb-0 text-primary">User Registration</h4>
                </div>
                <hr />
                <div className="form-body">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>First Name</label>
                      <input type="text" className="form-control radius-30" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Last Name</label>
                      <input type="text" className="form-control radius-30" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone No.</label>
                    <input type="text" className="form-control radius-30" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="text" className="form-control radius-30" />
                  </div>
                  <div className="form-group">
                    <label>Choose Password</label>
                    <input type="password" className="form-control radius-30" />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control radius-30" />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control radius-30"
                      //   rows="3"
                      //   cols="3"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          I Agree Terms & Conditions
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary px-5 radius-30"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default ProfileHeader;
