import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function Validate() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [gmailTouched, setGmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isNameValid = name.length >= 3;
  const isGmailValid = gmail.includes("@gmail.com");
  const isPasswordValid = password.length > 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNameValid) {
      alert("all firls are require");
      return;
    }
    if (!isGmailValid) {
      alert("all firls are require");
      return;
    }
    if (!isPasswordValid) {
      alert("all firls are require");
      return;
    }

    setSubmitted(true);
    alert(`Name: ${name}    Gmail: ${gmail}     Password: ${password}`);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const gmailChange = (e) => {
    setGmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "5px solid red",
          borderRadius: "25px",
          padding: "20px",
          width: "80%",
          margin: "auto",
          marginTop: "20px",
          height: "550px",
          backgroundColor: "rgba(255, 192, 203, 0.3)", 
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: "50%", top: "-20px", transform: "translateX(-50%)" }}>
          {submitted ? (
            <LockOpenIcon style={{ fontSize: "40px", color: "blue" }} />
          ) : (
            <LockIcon style={{ fontSize: "40px", color: "blue" }} />
          )}
        </div>
        
        <label htmlFor="name" style={{ fontSize: "30px", marginLeft: "510px" }}><i>Name</i></label>
        <br />
        <TextField
          label="Full Name"
          variant="outlined"
          value={name}
          onChange={nameChange}
          onFocus={() => setNameTouched(true)}
          style={{ width: "90%", marginLeft: "30px", marginBottom: "10px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle style={{ color: "blue" }} />
              </InputAdornment>
            ),
          }}
        />
        <br />
        {nameTouched && !isNameValid && (
          <span style={{ color: "red", marginLeft: "30px",fontSize:"20px" }}>
            Name must be at least 3 characters
          </span>
        )}
        <br />
        <label htmlFor="gmail" style={{ fontSize: "30px", marginLeft: "510px" }}><i>@Gmail.com</i></label>
        <br />
        <TextField
          label="Gmail"
          variant="outlined"
          value={gmail}
          onChange={gmailChange}
          onFocus={() => setGmailTouched(true)}
          style={{ width: "90%", marginLeft: "30px", marginBottom: "10px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon style={{ color: "blue" }} />
              </InputAdornment>
            ),
          }}
        />
        <br />
        {gmailTouched && !isGmailValid && (
          <span style={{ color: "red", marginLeft: "30px",fontSize:"20px" }}>
            Gmail must include @gmail.com
          </span>
        )}
        <br />
        <label htmlFor="Password" style={{ fontSize: "30px", marginLeft: "510px" }}><i>Password</i></label>
        <br />
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={passwordChange}
          onFocus={() => setPasswordTouched(true)}
          style={{ width: "90%", marginLeft: "30px", marginBottom: "10px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon style={{ color: "blue" }} />
              </InputAdornment>
            ),
          }}
        />
        <br />
        {passwordTouched && !isPasswordValid && (
          <span style={{ color: "red", marginLeft: "30px" ,fontSize:"20px" }}>
            Password must be at least 6 characters
          </span>
        )}
        <br />
        <br/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            width: "70%",
            marginLeft: "15%",
            height: "40px",
            borderRadius: "10px",
            backgroundColor: submitted ? "blue" : "green",
            color: "white",
            fontSize: "20px",
          }}
        >
          <i>SUBMIT</i>
        </Button>
      </form>
    </div>
  );
}



