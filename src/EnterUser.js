import React from "react";
import PropTypes from "prop-types"; 
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

EnterUser.propTypes = {
  user: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired,
  onUserSubmit: PropTypes.func.isRequired
}