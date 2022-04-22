function inFrame() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
if (inFrame() != true) {
  var tab = window.open('about:blank', '_blank');
  if (tab == null){

  } else {
  tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Google</title><link rel="icon" type="image/png" href="'+ window.location.href + "/hi.ico" +'"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
window.location.replace("https://www.google.com/");
  };
};
addEventListener("click", myFunction);
addEventListener('keypress', thing(e));
function myFunction(){
  if (inFrame() != true) {
  document.documentElement.innerHTML = '<head><title>allow pop ups </title></head><body>ALLOW POP UPS</body>'
  }
}
function thing(){
  if (inFrame() != true) {
    if (e.key === 'Enter'){
      document.documentElement.innerHTML = '<head><title>allow pop ups </title></head><body>ALLOW POP UPS</body>'
    }
  }
}