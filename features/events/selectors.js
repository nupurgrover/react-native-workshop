export const selectEvents = state => state.events.items;
export const selectEventsLoading = state => state.events.loading > 0;
export const selectEventsRefreshing = state =>
  state.events.loading > 0 && selectEvents(state).length > 0;
