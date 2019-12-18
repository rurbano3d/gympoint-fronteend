import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  student: {},
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/STUDENT_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/STUDENT_UPDATE': {
        draft.loading = true;
        break;
      }

      case '@student/STUDENT_DELETE': {
        draft.loading = true;
        break;
      }

      case '@student/STUDENT_SUCCESS': {
        draft.loading = false;
        draft.student = action.payload.data;
        break;
      }

      case '@student/STUDENT_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
