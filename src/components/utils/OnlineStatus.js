export const onlineStatus = () => {
  if (!isOnline) {
    return `rgb(240, 63, 63)`;
  } else {
    return `rgb(14, 218, 41)`;
  }
};
