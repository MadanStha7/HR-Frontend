import { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";
import { getAllUsers, IUserInterface } from "../data/get-all-users";

const ProfilePage = () => {
  const accessToken = localStorage.getItem("jwt");
  const [users, setUsers] = useState<IUserInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!accessToken) {
          throw new Error("No access token found");
        }
        const response = await getAllUsers(accessToken);
        setUsers(response.data);
      } catch (e) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <header className="top-header">
        <ProfileHeader />
      </header>
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-content-wrapper">
          <div className="page-content">
            <div className="card radius-15 p-4 ">
              <div className="card-header border-bottom-0 mt-1">
                <div className="d-flex align-items-center">
                  <div>
                    <h5 className="mb-2">User List</h5>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Designation</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Join Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                      <tr>
                        <td>John Doe</td>
                        <td>2024-05-20</td>
                        <td>08:15 AM</td>
                        <td>05:00 PM</td>
                        <td>On time</td>
                        <td>
                          <div
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
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
                            className="parent-icon "
                            style={{ fontSize: "30px" }}
                          >
                            <i className="bx bx-edit icon-color-5"></i>
                            <i className="bx bx-trash icon-color-1 ml-2"></i>
                          </div>
                        </td>
                      </tr>
                    </tbody> */}

                    <tbody>
                      {users.map((user) => (
                        <tr>
                          <td>{user.full_name}</td>
                          <td>{user.email}</td>
                          <td>{user.designation}</td>
                          <td>{user.phone}</td>
                          <td>{user.address}</td>
                          <td>{user.join_date}</td>
                          <td>
                            <div
                              className="parent-icon "
                              style={{ fontSize: "30px" }}
                            >
                              <i className="bx bx-edit icon-color-5"></i>
                              <i className="bx bx-trash icon-color-1 ml-2"></i>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
