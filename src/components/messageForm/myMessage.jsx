const MyMessage = ({ message }) => {
  // message defines the prop that will be passed to the message form component
  // Checks if the message is an image
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return <div className="message" style={{ float: "right", marginRight: "18px", color:"white", backgroundColor: "#3B2A50" }}>
      {message.text}
  </div>;
};

export default MyMessage;
