if (document.url == "https://learner.ple.platoweb.com/secondary/lessonportfolio") {
  var port = chrome.runtime.connect({name: "Information"});
} elseif (document.url == "https://learner.ple.platoweb.com/secondary/messages") {
  var NewMsg = document.getElementsByClassName("blueButton messageActionButton createNewMessage");
  NewMsg.addEventListener("click", function() {
    var Button = document.getElementById("ProgressReportButton")
    Button.addEventListener("click", function() {
      var eArea = document.getElementsByClassName("k-content");
      var i;
      for (i in eArea) {
        if (eArea[i].title == "Editable area. Press F10 for toolbar.") {
          chrome.storage.local.get({"Progress", "ClassName"}, function(progress, className) {
            textFrame = eArea[i].contentDocument.body;
            for (v in className) {
              if (content != null) {
                var content += "<tr><td>" + className[v] + "</td><td>" + progress[v] + "</td></tr>";
              } else {
              var content = "<tr><td>" + className[v] + "</td><td>" + progress[v] + "</td></tr>";
              };
            };
            textFrame.innerHTML = "<table><tbody><tr><td>Class Name</td><td>Progress</td></tr>"+ content +"</tbody></table>";
          };
        };
      };
    };
  };
};
