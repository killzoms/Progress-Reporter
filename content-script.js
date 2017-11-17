var i;
if (location.href == "https://learner.ple.platoweb.com/secondary/lessonportfolio") {
  var port = chrome.runtime.connect({name: "Information"});
} else if (location.href == "https://learner.ple.platoweb.com/secondary/messages") {
  var NewMsg = document.getElementsByClassName("blueButton messageActionButton createNewMessage");

  
  NewMsg[0].addEventListener("click", function() {
    var btnGrps = document.getElementsByClassName("k-tool-group k-button-group");
    for (i in btnGrps) {
      var x = i + 1
      if (btnGrps[x] == null) {
        var btnGrp = btnGrps[i]
      }
    }
    var btn = document.createElement("a");
    btn.id = "ProgressReportButton";
    btnGrp.children[0].setAttribute("class", "k-tool k-group-start");
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
      Button.setAttribute("class", "k-tool k-group-end-k-state-hover");
    });
    
    Button.addEventListener("click", function() {
      
      var eArea = document.getElementsByClassName("k-content");
      var i;
      
      for (i in eArea) {
        
        if (eArea[i].title == "Editable area. Press F10 for toolbar.") {
          
          chrome.storage.local.get(["Progress", "ClassName"], function(progress, className) {
            
            textFrame = eArea[i].contentDocument.body;
            
            for (v in className) {
              if (content != null) {
                content += "<tr><td>" + className[v] + "</td><td>" + progress[v] + "</td></tr>";
              } else {
                var content = "<tr><td>" + className[v] + "</td><td>" + progress[v] + "</td></tr>";
              };
            };
            
            textFrame.innerHTML = "<table><tbody><tr><td>Class Name</td><td>Progress</td></tr>"+ content +"</tbody></table>";
            
          });
        };
      };
    });
  });
};
