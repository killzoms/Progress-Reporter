//placeholder
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "Information");
  port.onMessage.addListener(function(msg) {
    chrome.storage.local.set(msg);
  });
});
