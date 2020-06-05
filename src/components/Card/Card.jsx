import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Utilities
import { getRequest } from '../../redux/operations';
import * as actions from '../../redux/actions';
// Styles
import {
  card,
  buttonsWrapper,
  cardWrapper,
  deleteButton,
  refreshButton,
  cardName,
} from './Card.module.css';

class Card extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
  };

  state = {
    data: null,
    shouldUpdate: false,
  };
  componentDidMount() {
    const { city } = this.props;
    getRequest(city).then(res => this.setState({ data: res.data }));
  }
  componentDidUpdate(prevProps, prevState) {
    const { city } = this.props;
    if (prevState.shouldUpdate !== this.state.shouldUpdate) {
      getRequest(city).then(res => this.setState({ data: res.data }));
    }
  }

  handleUpdate = () => {
    this.setState(prevState => ({ shouldUpdate: !prevState.shouldUpdate }));
  };

  render() {
    return (
      <>
        {this.state.data && (
          <div className={cardWrapper}>
            <Link to={`/${this.state.data.id}`}>
              <li key={this.state.data.id} className={card}>
                <img
                  src={`http://openweathermap.org/img/wn/${this.state.data.weather[0].icon}@4x.png`}
                  alt="weather"
                />
                <p className={cardName}>{this.state.data.name}</p>
                <p>{Math.floor(this.state.data.main.temp)}°C</p>
              </li>
            </Link>
            <div className={buttonsWrapper}>
              <button
                className={deleteButton}
                onClick={() => this.props.onDelete(this.state.data.name)}
              >
                &#128465;
              </button>
              <button className={refreshButton} onClick={this.handleUpdate}>
                &#8635;
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDelete: data => dispatch(actions.deleteCard(data)),
});

export default connect(null, mapDispatchToProps)(Card);
