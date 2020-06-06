import { fetchWeatherById } from '../../redux/operations';
import { connect } from 'react-redux';
import MoreInfoPage from './MoreInfoPage';

const mapStateToProps = state => ({
  moreInfoData: state.moreInfoData,
});

const mapDispatchToProps = {
  fetchWeather: fetchWeatherById,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfoPage);
