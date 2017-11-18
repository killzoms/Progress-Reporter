var i;
if (location.href == "https://learner.ple.platoweb.com/secondary/lessonportfolio") {
  var port = chrome.runtime.connect({name: "Information"});
} else if (location.href == "https://learner.ple.platoweb.com/secondary/messages") {
  var NewMsg = document.getElementsByClassName("blueButton messageActionButton createNewMessage");

var v = false  
  NewMsg[0].addEventListener("click", function() {
    setTimeout(function() {
      var btnGrps = document.getElementsByClassName("k-tool-group k-button-group");
      var btnGrp = btnGrps[6].firstChild
      btnGrp.setAttribute("class", "k-tool k-group-start");

      var btn = document.createElement("a");
      btn.id = "ProgressReportButton";
    
      btnSpan = document.createElement("img");
      btnSpan.setAttribute("src", "https://killzoms.github.io/Progress-Reporter/icon.png");
      btnSpan.setAttribute("alt", "PR");
      btnSpan.setAttribute("class", "k-tool-icon k-reportProgress");
      btnSpan.innerHTML = "Report Progress";
      btn.appendChild(btnSpan);
      btnGrp.appendChild(btn);
      var Button = document.getElementById("ProgressReportButton")
      Button.setAttribute("class", "k-tool k-group-end");
      Button.setAttribute("href", "");
      Button.setAttribute("role", "button");
      Button.setAttribute("unselectable", "on");
      Button.setAttribute("title", "Report Progress");
      
      Button.addEventListener("mouseover", function() {
        Button.setAttribute("class", "k-tool k-group-end k-state-hover");
      });
    
      Button.addEventListener("mouseout", function() {
        Button.setAttribute("class", "k-tool k-group-end k-state-hover");
      });
    
      Button.addEventListener("click", function() {
      
        var eArea = document.getElementsByClassName("k-content")[4];
                  
          if (eArea.title == "Editable area. Press F10 for toolbar.") {
          
            chrome.storage.local.get({Progress:[], ClassName:[]}, function(Cstorage) {
            var content = "";
              textFrame = eArea.contentDocument.body;
              console.log(Cstorage.ClassName)
              for (v in Cstorage.ClassName) {
                if (content != "") {
                  content += "<tr><td>" + Cstorage.ClassName[v] + "</td><td>" + Cstorage.Progress[v] + "</td></tr>";
                } else {
                  content = "<tr><td>" + Cstorage.ClassName[v] + "</td><td>" + Cstorage.Progress[v] + "</td></tr>";
                };
              };
              textFrame.innerHTML = "<table class='k-table'><tbody><tr><td>Class Name</td><td>Progress</td></tr>"+ content +"</tbody></table>";
            
            });
          };
      });
    }, 500);
  });
};
