import * as FileSystem from 'expo-file-system';

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
    case 'LOAD_EVENTS_SUCCESS': {
      return Promise.all(
        action.payload.map(event =>
          FileSystem.downloadAsync(
            event.image,
            `${FileSystem.documentDirectory}${event.image.split('/').reverse()[0]}`
          ).then(() => console.log(`Downloaded ${event.image.split('/').reverse()[0]}`))
        )
      ).then(() => next(action));
    }
    default:
      next(action);
  }
};
