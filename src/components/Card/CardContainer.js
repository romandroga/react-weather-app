import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import Card from './Card';

const mapDispatchToProps = dispatch => ({
  onDelete: data => dispatch(actions.deleteCard(data)),
});

export default connect(null, mapDispatchToProps)(Card);
