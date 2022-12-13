import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const registration = () => {
  const [formdata, setFormdata] = useState({});
  const [submitStatus, setSubmitStatus] = useState({});
  const [alertMessge, setalertMessge] = useState('');
//   const registerFn = async () => {
    const router = useRouter();

    const registerFn = async () => {
      console.log("formdata", formdata);
      if (Object.keys(formdata).length === 0) {
        setalertMessge("Please fill all the fields");
      } else {
        const url = "http://localhost:3000/api/users/register";
        const response = await axios.post(url, formdata);
        if (response.status === 201) {
          setSubmitStatus(true);
          router.push("/login");
        }
      }
    };

    const handleChange = (e) => {
      let tempObj = {};
      tempObj[e.target.name] = e.target.value;
      setFormdata({ ...formdata, ...tempObj });
    };

    return (
      <div className="row justify-content-center align-items-center mb-3">
        {submitStatus && (
          <div class="alert alert-success" role="role">
            {alertMessge}
          </div>
        )}
        {/* Name :<input type="text" name="name" onChange={handleChange}></input>
        email:
        <input type="email" name="email" onChange={handleChange}></input>:
        Mobile
        <input type="text" name="mobile" onChange={handleChange}></input>
        Password
        <input type="password" name="password" onChange={handleChange}></input>
        <button onClick={registerFn}>Submit</button> */}
        <div className="col-sm-6 card mt-3">
          <div class="col-sm-6form-outline mt-3 mb-4">
            <label class="form-label" for="form2Example1">
              Name
            </label>
            <input
              type="text"
              id="form2Example1"
              class="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Email
            </label>
            <input
              type="email"
              id="form2Example2"
              class="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Mobile
            </label>
            <input
              type="text"
              id="form2Example2"
              class="form-control"
              name="mobile"
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

          <button
            type="button"
            class="btn btn-primary btn-block mb-4"
            onClick={registerFn}
          >
            Submit
          </button>
          {/* </form> */}
        </div>
      </div>
    );
//   };
};

export default registration;
