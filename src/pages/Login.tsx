import React, { useState, ChangeEvent, FormEvent } from "react";
import "../App.css";
import "../assets/css/style.css";
import logoIcon from "../assets/images/logo-icon.png";
import loginFrentImg from "../assets/images/login-images/login-frent-img.jpg";
import axios from "axios";

interface FormData {
  identifier: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    identifier: "",
    password: "",
  });

  const [showInvalidCredentials, setShowInvalidCredentials] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/",
        formData
      );
      const { jwt, user } = response.data;
      //   const data = {
      //     jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      //     userId: "12345",
      //   };

      //   localStorage.setItem("jwt", data.jwt);
      //   localStorage.setItem("userId", data.userId.toString());

      localStorage.setItem("jwt", jwt);
      localStorage.setItem("userId", user.id.toString());

      console.log("User:", response.data);
      window.location.reload();
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setShowInvalidCredentials(true);
      } else {
        console.error("Error while logging in:", error);
      }
    }
  };

  return (
    <div className="bg-login">
      <div className="wrapper">
        <div className="section-authentication-login d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="card radius-15">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5">
                      <div className="text-center">
                        <img src={logoIcon} width="80" alt="" />
                        <h3 className="mt-4 font-weight-bold">Welcome Back</h3>
                      </div>
                      {showInvalidCredentials && (
                        <div
                          className="alert bg-danger text-white alert-dismissible fade show"
                          role="alert"
                        >
                          Invalid Credentials!
                        </div>
                      )}

                      <form onSubmit={handleSubmit}>
                        <div className="form-group mt-4">
                          <label>Email Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email address"
                            name="identifier"
                            value={formData.identifier}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="btn-group mt-3 w-100">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Log In
                          </button>
                        </div>
                      </form>
                      <hr />

                      <div className="text-center">
                        <p className="mb-0">
                          Don't have an account?{" "}
                          <a href="authentication-register.html">Sign up</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src={loginFrentImg}
                      className="card-img login-img h-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
