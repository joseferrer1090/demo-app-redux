import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById } from "./../actions";

class HeroesList extends Component {
  render() {
    console.log("this.props", this.props.heroes);
    return (
      <div>
        <h4> HeroesList </h4>
        <ul>
          {this.props.heroes.map(heroe => {
            return (
              <li key={heroe.id} className="list-group-item">
                <div className="list-item"> {heroe.name} </div>
                <div
                  className="list-item right-button"
                  onClick={() => {
                    this.props.removeCharacterById(heroe.id);
                  }}
                >
                  {" "}
                  x{" "}
                </div>
              </li>
            );
          })}
        </ul>
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
  { removeCharacterById }
)(HeroesList);
