function getCookie(cookieName) {
  try {
    const cookie = document.cookie
      .split("; ")
      .filter((cookie) => {
        const [cName] = cookie.split("=");
        return cName === cookieName;
      })[0]
      .split("=")[1];
    return cookie;
  } catch (err) {
    return null;
  }
}

function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = `${cookieName}=${cookieValue}; expires=${expiryDate}`;
}

function deleteCookie(cookieName) {
  setCookie(cookieName, "", "Thu, 01 Jan 1970 00:00:00 UTC");
}

function allCookieList() {
  return document.cookie.split("; ");
}

function hasCookie(cookieName) {
  if (getCookie(cookieName)) {
    return true;
  } else {
    return false;
  }
}
