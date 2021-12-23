import React, {Component} from "react";
import PropTypes from "prop-types"; 

export default class UserRepos extends Component {

  render() {
    const {data, repos, onReset} = this.props;
    return (
      <div className="mainContainer">
        <div>
          <img src={data.avatar_url} alt="avatar"></img>
          <span>{data.login}</span>
        </div>
        <div><b>BIO: </b>{data.bio}</div> <br/>
        <div><b>LOCATION: </b>{data.location}</div> <br/>
        <div><b>REPOSITORIES: </b></div> <br/>
        {repos.map((repo) => (
          <div className="tableContainer"
            key={repo.id}
          > {repo.name} 
          </div>
        ))}  <br/>
        <input className = "wdt3 clr" type="submit" value="Reset" onClick={onReset}/> 
      </div>
    );
  }
}

UserRepos.propTypes = {
  data: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired
}