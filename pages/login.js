import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Login = () => {

  const [formdata, setFormdata] = useState({});
  const [submitStatus, setSubmitStatus] = useState({});
  //   const registerFn = async () => {
  const router = useRouter();

  const loginFn = async () => {
    console.log("formdata", formdata);

    const url = "http://localhost:3000/api/users/login";
    try{
       const response = await axios.post(url, formdata);
       if (response.data.userid) {
        // setSubmitStatus(true);
         router.push("/products");
       }
    }catch(err){
      setSubmitStatus(true);
    }
   
  };

  const handleChange = (e) => {
    let tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setFormdata({ ...formdata, ...tempObj });
  };

  return (
    <div className="row justify-content-center align-items-center">
      {submitStatus && (
        <div class="alert alert-success" role="role">
          Form Submitted.
        </div>
      )}
      <div className="col-sm-6 card mt-3">
        <div class="col-sm-6form-outline mt-3 mb-4">
          <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary btn-block mb-4"
          onClick={loginFn}
        >
          Sign in
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;
