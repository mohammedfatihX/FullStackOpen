const Notification = (props) => {
  const { isError, message } = { ...props.notification };
  if (message === null) {
    return null;
  }
  const classCss = isError ? "errorNotification" : "notification";
  return (
    <div className={classCss}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
