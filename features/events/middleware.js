import ax from 'axios';

const axios = ax.create({
  timeout: 10000,
});

export default store => next => action => {
  switch (action.type) {
    case 'LOAD_EVENTS_REQUEST': {
      next(action);
      return axios
        .get('https://motion-bristol.eventgenius.co.uk/index.json')
        .then(res => store.dispatch({ type: 'LOAD_EVENTS_SUCCESS', payload: res.data.events }))
        .catch(error => store.dispatch({ type: 'LOAD_EVENTS_FAILURE', error }));
    }
    default:
      next(action);
  }
};
