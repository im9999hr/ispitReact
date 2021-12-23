import React from "react";

const handleSubmit = (e, user, submit) => {
  e.preventDefault();
  const trimEnd = user.trimEnd();
  if (trimEnd) {
    submit(user);
  }
};

export default function EnterUser(props) {
  return (
    <form className="mainContainer" onSubmit = {e => handleSubmit (e, props.user, props.onUserSubmit)}>
      <label > GitHub username: <br/>
        <input className = "wdt1" type="text" placeholder="e.g. facebook" value={props.user} onChange={props.onUserChange}/>
      </label> 
      <br/><br/>
      <input className = "wdt2 clr" type="submit" value="GO!"/>
    </form>
  )
}