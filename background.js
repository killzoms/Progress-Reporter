chrome.runtime.onConnect.addListener(function(port) {
  console.log("Connected")
  console.assert(port.name == "Information");
  port.onMessage.addListener(function(msg) {
    chrome.storage.local.set(msg);
  });		
});		


var info = "ClassName": classNames;
chrome.storage.local.set(info);
info = "Progress": progress;
chrome.storage.local.set(info);
