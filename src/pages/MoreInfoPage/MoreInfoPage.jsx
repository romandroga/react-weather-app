import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import { fetchWeatherById } from '../../redux/operations';
import {wrapper} from './MoreInfoPage.module.css'

export class MoreInfoPage extends Component {
  componentDidMount() {
    this.props.fetchWeather(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <div className={wrapper}>
        {this.props.moreInfoData && <MoreInfo data={this.props.moreInfoData} />}
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
