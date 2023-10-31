export const tabStyle = {
  textTransform: 'none',
  minWidth: 0,
  fontSize: '20px',
  fontWeight: '400',
  color: 'var(--main-black-500)',
  fontFamily: [
    'YS Display',
  ].join(','),
  '&:hover': {
    color: 'var(--main-black-900)',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'black',
    fontWeight: '400',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}