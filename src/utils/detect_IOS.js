const is_IOS = () => {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iOS/i)
  )
    return true;
};
export default is_IOS;
