import types from "./types";

export default {
    startFetching: () => ({
        type: types.START_FETCHING
    }),
    stopFetching: () => ({
        type: types.STOP_FETCHING
    }),
    showSussesLabel: message => ({
        type: types.SHOW_SUCCES_LABEL,
        payload: message
    }),
    hideSussesLabel: () => ({
        type: types.HIDE_SUCCES_LABEL
    }),
    showErrorFetching: message => ({
        type: types.SHOW_ERROR_FETCHING,
        payload: message
    }),
    hideErrorFetching: () => ({
        type: types.HIDE_ERROR_FETCHING
    })
};
