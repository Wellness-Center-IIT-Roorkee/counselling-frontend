export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
export const redirectURI = `${process.env.REACT_APP_BASE_URL}/after_login`;
export const oauthUrl = `https://channeli.in/oauth/authorise/?client_id=${clientSecret}&redirect_uri=${redirectURI}`;

export const counsellingMedium = [
  { value: '1', label: 'Face to Face' },
  { value: '2', label: 'Online' },
  { value: '3', label: 'Telephonic' },
];

export const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
