import React, { Component } from "react";
import { connect } from "react-redux";

class HeroesList extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h4> Your Heroes Squad: </h4>
        <ul className="list-group" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(
  mapStateToProps,
  null
)(HeroesList);
