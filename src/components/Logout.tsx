import React from "react";
import "../assets/css/style.css";

interface LogoutProps {
  closeModal: () => void;
}
const Logout: React.FC<LogoutProps> = ({ closeModal }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal3"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Logout?</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              {" "}
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">Are you sure, You want to log out?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={closeModal}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
