import s from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={`${s.message} ${s.messageAlignRight}`}>
      <img src={props.messages.avatar}></img>
      {props.messages.message}
    </div>
  );
};

export default Message;
