if (window.self == window.top) {
  var tab = window.open('about:blank', '_blank');
  if (tab = null){
    document.documentElement.innerHTML = '<head><title>allow pop ups </title></head><body>ALLOW POP UPS</body>'
  }else{
    tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Google</title><link rel="icon" type="image/png" href="'+ window.location.href + "/hi.ico" +'"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
    window.location.replace("https://www.google.com/");
  };
};
