function openStoreByOS() {
  const mobileType = navigator.userAgent.toLowerCase();
  console.log(mobileType);
  if (mobileType.indexOf('android') > -1) {
    return window.open(
      'https://play.google.com/store/apps/details?id=com.app_pool_frontend',
      '_blank',
    );
  } else if (
    mobileType.indexOf('iphone') > -1 ||
    mobileType.indexOf('ipad') > -1 ||
    mobileType.indexOf('ipod') > -1
  ) {
    return window.open(
      'https://apps.apple.com/kr/app/pool/id1640180474',
      '_blank',
    );
  } else {
    return window.open(
      'https://play.google.com/store/apps/details?id=com.app_pool_frontend',
      '_blank',
    );
  }
}
export default openStoreByOS;
