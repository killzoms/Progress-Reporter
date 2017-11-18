chrome.runtime.onConnect.addListener(function(port) {
  console.log("Connected");
  console.assert(port.name == "Information");
  port.onMessage.addListener(function(msg) {
    
    var info = {"ClassName": classNames};
    chrome.storage.local.set(info);
    info = {"Progress": progress};
    chrome.storage.local.set(info);
  });		
});		

