import { getGravatarUrl } from '@/components/Gravatar';

const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: 'light',
  language: 'en',
  gravatarUrl: null,
};

const clientReducer = (state = initialState, action) => {
  console.log('Client Reducer - Action:', action.type);
  console.log('Client Reducer - Current State:', state);
  switch (action.type) {
    case 'SET_USER':
      
      return { 
        ...state, 
        user: action.payload,
        gravatarUrl: action.payload.email ? getGravatarUrl(action.payload.email) : null
      };
    case 'LOGOUT':  // Add this case
      return {
        ...initialState
      };
    case 'SET_ROLES':
      return { ...state, roles: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default clientReducer;