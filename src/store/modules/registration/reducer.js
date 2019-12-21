import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  registration: {},
};

export default function registration(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@registration/REGISTRATION_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@registration/REGISTRATION_UPDATE': {
        draft.loading = true;
        break;
      }

      case '@registration/REGISTRATION_DELETE': {
        draft.loading = true;
        break;
      }

      case '@registration/REGISTRATION_SUCCESS': {
        draft.loading = false;
        draft.registration = action.payload.data;
        break;
      }

      case '@registration/REGISTRATION_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
