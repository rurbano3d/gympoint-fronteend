export function planRequest(title, duration, price) {
  return {
    type: '@plan/PLAN_REQUEST',
    payload: { title, duration, price },
  };
}

export function planUpdate(id, title, duration, price) {
  return {
    type: '@plan/PLAN_UPDATE',
    payload: { id, title, duration, price },
  };
}

export function planDelete(id) {
  return {
    type: '@plan/PLAN_DELETE',
    payload: { id },
  };
}

export function planSuccess(plan) {
  return {
    type: '@plan/PLAN_SUCCESS',
    payload: { plan },
  };
}

export function planFailure() {
  return {
    type: '@plan/PLAN_FAILURE',
  };
}
