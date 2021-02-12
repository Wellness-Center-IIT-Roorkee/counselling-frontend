export const clientSecret = '5ZnCvJIKSx0tnblLjzXhWeLfuZDYHSofqDQwjul3';
export const redirectURI = 'http://127.0.0.1:3000/after_login';
export const oauthUrl = `https://internet.channeli.in/oauth/authorise/?client_id=${clientSecret}&redirect_uri=${redirectURI}`;

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
