export function registrationRequest(student_id, plan_id, start_date) {
  return {
    type: '@registration/REGISTRATION_REQUEST',
    payload: { student_id, plan_id, start_date },
  };
}

export function registrationUpdate(id, student_id, plan_id, start_date) {
  return {
    type: '@registration/REGISTRATION_UPDATE',
    payload: { id, student_id, plan_id, start_date },
  };
}

export function registrationDelete(id) {
  return {
    type: '@registration/REGISTRATION_DELETE',
    payload: { id },
  };
}

export function registrationSuccess(registration) {
  return {
    type: '@registration/REGISTRATION_SUCCESS',
    payload: { registration },
  };
}

export function registrationFailure() {
  return {
    type: '@registration/REGISTRATION_FAILURE',
  };
}
