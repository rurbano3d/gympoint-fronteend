import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  plan: {},
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/PLAN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@plan/PLAN_UPDATE': {
        draft.loading = true;
        break;
      }

      case '@plan/PLAN_DELETE': {
        draft.loading = true;
        break;
      }

      case '@plan/PLAN_SUCCESS': {
        draft.loading = false;
        draft.plan = action.payload.data;
        break;
      }

      case '@plan/PLAN_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
