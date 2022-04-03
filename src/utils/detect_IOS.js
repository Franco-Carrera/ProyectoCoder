const is_iOS = () => {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iOS/i)
  )
    return true;
  else return false;
};
export default is_iOS;
