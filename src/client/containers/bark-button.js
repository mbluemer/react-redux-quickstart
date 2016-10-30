import { connect } from 'react-redux';
import Button from '../components/button';
import { makeBark } from '../actions/dog-actions';

const mapDispathToProps = dispatch => ({
  action: () => { dispatch(makeBark()); },
  actionLabel: 'Bark',
});

export default connect(null, mapDispathToProps)(Button);
