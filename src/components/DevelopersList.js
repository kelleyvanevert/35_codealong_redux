import React from "react";
import { connect } from "react-redux";

import { developersFetched } from "../store/developersActions";

class DevelopersList extends React.Component {
  // state = {
  //   developers: []
  // };

  componentDidMount() {
    fetch(
      "https://codaisseur-coders-network.herokuapp.com/developers?offset=10&limit=20"
    )
      .then(res => res.json())
      .then(data => {
        this.props.dispatch(developersFetched(data.rows));
      });
  }

  render() {
    if (!this.props.developers) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <p>
          We have nourished {this.props.developers.length} developers by now!
        </p>
        <ul>
          {this.props.developers.map(dev => {
            return (
              <li>
                {dev.name} ({dev.email})
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    developers: reduxState.developers
  };
}

export default connect(mapStateToProps)(DevelopersList);
