import React, { Component } from 'react';
// Components
import MoreInfo from '../../components/MoreInfo/MoreInfo';
// Styles
import { wrapper } from './MoreInfoPage.module.css';
import Forecast from '../../components/Forecast/ForecastContainer';

export default class MoreInfoPage extends Component {
  componentDidMount() {
    const { fetchWeather, match } = this.props;
    fetchWeather(match.params.id);
  }

  render() {
    const { moreInfoData, match } = this.props;
    return (
      <div className={wrapper}>
        {moreInfoData.sys && <MoreInfo data={moreInfoData} />}
        <Forecast id={match.params.id} />
      </div>
    );
  }
}
