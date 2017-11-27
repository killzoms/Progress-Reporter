var i;

function progressReportList() {
  var tabsReplyContainer = document.getElementsByClassName("tabsReplyContainer")[0];
  tabsReplyContainer.style.width = "402px";
  var MessageContainer = document.getElementsByClassName("messageDetailsArea")[0];
  MessageContainer.style.left = "424.4px";
}

if (location.href == "https://learner.ple.platoweb.com/secondary/lessonportfolio") {
  setTimeout(function() {
  var classNames = [];
  var progress = [];
  var pro = document.getElementsByClassName("progressStats");
  var claNames = document.getElementsByClassName("assignmentName media");
  var v = claNames.length;

  for (i = 0; i < v; i++) {
    clasNames = claNames[i].firstChild.nextSibling;
    classNames[i] = clasNames.outerText;
    var b = pro[i].firstChild.nextSibling.nextSibling.nextSibling;
    if (b == null) {
      progress[i] = "0%";
    } else {
    var t = pro[i].firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
    if (t.className == "progressBarContainer") {
      progress[i] = "100%";
    } else {
      console.log(t.innerHTML);
      progress[i] = t.innerHTML;
    };
    };
  };
  var info = {"ClassName": classNames};
  chrome.storage.local.set(info);
  info = {"Progress": progress};
  chrome.storage.local.set(info);
}, 500);
} else if (location.href == "https://learner.ple.platoweb.com/secondary/messages") {
  var NewMsg = document.getElementsByClassName("blueButton messageActionButton createNewMessage");

  var v = false
  progressReportList();
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
