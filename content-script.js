chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
if (tabs.url == "https://learner.ple.platoweb.com/secondary/lessonportfolio") {
  chrome.tabs.connect(tabs[0].id, {name: "Information"});
}
