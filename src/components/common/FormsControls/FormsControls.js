import React from "react";
import s from "./FormsControls.module.css";

export const FormControl = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className={hasError && s.error}>
      <props.child {...props} {...input} {...meta} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

/* export const Textarea = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className={hasError && s.error}>
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className={hasError && s.error}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}; */
