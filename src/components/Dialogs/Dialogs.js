import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Alina</div>
        <div className={s.dialog}>Slava</div>
        <div className={s.dialog}>Karolina</div>
        <div className={s.dialog}>Vlad</div>
        <div className={s.dialog}>Anna</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>What's up!</div>
      </div>
    </div>
  );
};

export default Dialogs;
