import React from "react";

const Inquiry = () => {
  const sendInquiry = () => {
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "elasticmailuser@mail.com",
      Password:
        "87E3378D32BFC823FA3ACBC23E8D167D790153EFFEA9A1C3A7EDC07CBE86793DA96032B07D823E544110CF521388802F",
      To: "belkaid.abdulah@gmail.com",
      From: "your username",
    }).then((message) => alert("Message send succesfully!"));
  };

  return (
    <div>
      <div>
        <label htmlFor="inquiry_name">Name</label>
        <input type="text" id="inquiry_name" />
      </div>
      <div>
        <label htmlFor="inquiry_message">Message</label>
        <textarea name="" id="inquiry_message" cols="30" rows="10"></textarea>
      </div>
      <button onClick={() => sendInquiry()}>Send email</button>
    </div>
  );
};

export default Inquiry;