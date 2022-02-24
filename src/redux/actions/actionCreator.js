import Actions from './actions';

const displayPhones = (phones) => ({
  type: Actions.GET_PHONE,
  payload: phones,
});

export default displayPhones;
