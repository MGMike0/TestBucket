import { connect } from 'react-redux';
import * as actions from './actions/developers';

const actionsKeys = Object.keys(actions);

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  const dispatchActions = {};
  actionsKeys.forEach((a) => {
    const action = actions[a];
    dispatchActions[a] = (...args) => {
      dispatch(action(...args));
    };
  });
  return dispatchActions;
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  rdx: { state: stateProps, ...dispatchProps },
  ...ownProps,
});

const Connect = connect(mapStateToProps, mapDispatchToProps, mergeProps);

export default (component) => Connect(component);
