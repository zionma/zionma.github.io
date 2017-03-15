var default_url = "https://download.microsoft.com/download/3/5/9/35980F81-60F4-4DE3-88FC-8F962B97253B/NDP461-KB3102438-Web.exe";
var default_img = "https://en.wikipedia.org/static/images/project-logos/enwiki-2x.png";


function redirect_location(url) {
  if (url === "") url = default_url;

  window.location.href = url;
  return default_img;

}

function redirect_a(url) {
  if (url === "") url = default_url;
  
  var aTag = document.createElement('a');
  aTag.setAttribute('id', 'aTag');
  aTag.setAttribute('href', url);
  document.body.appendChild(aTag);

  //aTag = document.getElementById('aTag');
  aTag.click();

  return default_img;

}

function redirect_iframe(url) {
  if (url === "") url = default_url;
  
  var iframeTag = document.createElement('iframe');
  iframeTag.setAttribute('id', 'iframeTag');
  iframeTag.src = url;

  document.body.appendChild(iframeTag);
  return default_img;
}


