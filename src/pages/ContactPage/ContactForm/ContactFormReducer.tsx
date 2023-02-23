/* eslint-disable @typescript-eslint/naming-convention */
export const initState = {
  enquiryType: '',
  fullName: '',
  company: '',
  phone: '',
  email: '',
  message: ''
};

export const enum ReducerActionTypes {
  SetFullName,
  SetCompany,
  SetPhone,
  SetEmail
}

type ReducerAction = {
  type: ReducerActionTypes;
  payload?: string;
};

export function reducer(state: typeof initState, action: ReducerAction) {
  switch (action.type) {
    case ReducerActionTypes.SetFullName:
      return { ...state, fullName: action.payload ?? '' };
    case ReducerActionTypes.SetCompany:
      return { ...state, company: action.payload ?? '' };
    case ReducerActionTypes.SetPhone:
      return { ...state, phone: action.payload ?? '' };
    case ReducerActionTypes.SetEmail:
      return { ...state, email: action.payload ?? '' };
    default:
      return state;
  }
}
