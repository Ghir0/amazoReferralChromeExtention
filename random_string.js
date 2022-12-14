// create array of strings to choose from
const strings = ["miketama-21","miketama-21","miketama-21","miketama-21","miketama-21"];
var andChar;
var questionChar;
var noTag;


// function to attach random string to URL
function attachStringToURL(url) {
  // choose random string from array
  const randString = strings[Math.floor(Math.random() * strings.length)];
  // attach random string to end of URL
  if(noTag===1){
    url = url + "&tag=" +randString;
  } else if(noTag===2){
    url = url + "?tag=" +randString;
  } else {
    url += randString;
  }
  
  return url;
}


let url = window.location.href;
// check if "tag=" occurs in URL
if (url.indexOf("tag=") !== -1) {
    noTag = 0;
  // check if previous character is "?"
  if (url[url.indexOf("tag=") - 1] === "?") {
    andChar = 0;
    questionChar = 1;
    // delete everything after "tag="
    let tagIndex = url.indexOf("tag=");
    if (tagIndex >= 0) {
        url = url.substring(0, tagIndex + "tag=".length);
    }
    // attach random string to end of URL
    url = attachStringToURL(url);

  } else if (url[url.indexOf("tag=") - 1] === "&"){
    andChar = 1;
    questionChar = 0;
    // delete everything after "tag="
    let tagIndex = url.indexOf("tag=");
    if (tagIndex >= 0) {
        url = url.substring(0, tagIndex + "tag=".length);
    }
   
    // attach random string to end of URL
    url = attachStringToURL(url);
 
  }

} else if (url.indexOf("?") !== -1){
  noTag = 1;
  url = attachStringToURL(url);
} else {
  noTag = 2;
  url = attachStringToURL(url);
}

// update URL of current page
window.history.pushState({}, null, url);
