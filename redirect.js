var default_url = "http://www.7-zip.org/a/7z1604.exe";

function redirect_location(url) {
  if (url === "") url = default_url;

  window.location.href = url;
}

function redirect_a(url) {
  if (url === "") url = default_url;
  
  var aTag = document.createElement('a');
  aTag.setAttribute('id', 'aTag');
  aTag.setAttribute('href', url);
  document.body.appendChild(aTag);

  aTag = document.getElementById('aTag');
  aTag.click();
}

function redirect_iframe(url) {
  if (url === "") url = default_url;
  
  var iframeTag = document.createElement('iframe');
  iframeTag.setAttribute('id', 'iframeTag');
  iframeTag.setAttribute('src', url);

  document.body.appendChild(iframeTag);
}