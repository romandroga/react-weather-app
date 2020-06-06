import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import Forecast from './Forecast'


const mapStateToProps = state => ({
  data: state.moreInfoData,
});

const mapDispatchToProps = {
  onLoad: data => actions.showDiagram(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
