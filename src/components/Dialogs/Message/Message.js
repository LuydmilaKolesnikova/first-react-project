import s from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={`${s.message} ${s.messageAlignRight}`}>
      <img src="https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg"></img>
      {props.message}
    </div>
  );
};

export default Message;
