import React, { Component } from 'react';
import { connect } from 'react-redux';
// Utilities
import { fetchWeatherById } from '../../redux/operations';
// Components
import MoreInfo from '../../components/MoreInfo/MoreInfo';
// Styles
import { wrapper } from './MoreInfoPage.module.css';

export class MoreInfoPage extends Component {
  componentDidMount() {
    const { fetchWeather, match } = this.props;
    fetchWeather(match.params.id);
  }

  render() {
    const { moreInfoData } = this.props;
    return (
      <div className={wrapper}>
        {moreInfoData && <MoreInfo data={moreInfoData} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moreInfoData: state.moreInfoData,
});

const mapDispatchToProps = {
  fetchWeather: fetchWeatherById,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfoPage);
