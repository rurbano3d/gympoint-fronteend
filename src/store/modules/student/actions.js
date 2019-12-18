export function studentRequest(name, email, age, weight, height) {
  return {
    type: '@student/STUDENT_REQUEST',
    payload: { name, email, age, weight, height },
  };
}

export function studentUpdate(id, name, email, age, weight, height) {
  return {
    type: '@student/STUDENT_UPDATE',
    payload: { id, name, email, age, weight, height },
  };
}

export function studentDelete(id) {
  return {
    type: '@student/STUDENT_DELETE',
    payload: { id },
  };
}

export function studentSuccess(student) {
  return {
    type: '@student/STUDENT_SUCCESS',
    payload: { student },
  };
}

export function studentFailure() {
  return {
    type: '@student/STUDENT_FAILURE',
  };
}
