import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Utilities
import { getRequest } from '../../redux/operations';
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
    const { data } = this.state;
    return (
      <>
        {data && (
          <div className={cardWrapper}>
            <Link to={`/forecast/${data.id}`}>
              <li key={data.id} className={card}>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                  alt="weather"
                />
                <p className={cardName}>{data.name}</p>
                <p>{Math.floor(data.main.temp)}°C</p>
              </li>
            </Link>
            <div className={buttonsWrapper}>
              <button
                className={deleteButton}
                onClick={() => this.props.onDelete(data.name)}
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

export default Card;
