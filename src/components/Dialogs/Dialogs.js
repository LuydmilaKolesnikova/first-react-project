import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { maxLengthCreator } from "../../utils/validators/validators";

const Dialogs = (props) => {
  const onSubmit = (formData) => {
    props.sendMessage(formData.messageText);
  };
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message messages={m} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.addNewMessage}></div>
        <DialogsReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const DialogsForm = (props) => {
  const maxLength10 = maxLengthCreator(10);
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={FormControl}
        child="textarea"
        name="messageText"
        placeholder="write message..."
        validate={[required, maxLength10]}
      />
      <div>
        <button>send message</button>
      </div>
    </form>
  );
};

const DialogsReduxForm = reduxForm({ form: "dialogs" })(DialogsForm);

export default Dialogs;
