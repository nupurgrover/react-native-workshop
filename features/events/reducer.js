const INITIAL_STATE = {
  loading: 0,
  items: [],
};

export default function(state = INITIAL_STATE, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case 'LOAD_EVENTS_REQUEST': {
      return { ...state, loading: state.loading + 1 };
    }

    case 'LOAD_EVENTS_FAILURE': {
      return { ...state, loading: state.loading - 1 };
    }

    case 'LOAD_EVENTS_SUCCESS': {
      return { ...state, items: payload, loading: state.loading - 1 };
    }

    default:
      return state;
  }
}
