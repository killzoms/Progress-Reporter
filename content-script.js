var i;
if (location.href == "https://learner.ple.platoweb.com/secondary/lessonportfolio") {
  setTimeout(function() {
  var classNames = [];
  var progress = [];
  var pro = document.getElementsByClassName("progressStats");
  var claNames = document.getElementsByClassName("assignmentName media");
  var v = claNames.length;

  for (var i = 0; i < v; i++) {
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

var v;
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
        var contentLength = document.getElementsByClassName("k-content").length;
        for (var i = 0; i < contentLength; i++) {
          var eArea = document.getElementsByClassName("k-content")[i];
                  
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
        };
      });
    }, 600);
  });
  var tabsReplyContainer = document.getElementsByClassName("tabsReplyContainer")[0];
  tabsReplyContainer.style.width = "402px";
  var MessageContainer = document.getElementsByClassName("messageDetailsArea")[0];
  MessageContainer.style.left = "424.4px";
  var LastTab = document.getElementsByClassName("archive k-item k-last k-state-default")[0];
  var PRTab = LastTab.cloneNode(true);
  LastTab.className = "archive k-item k-state-default";
  PRTab.firstChild.nextSibling.firstChild.innerHTML = "Progress Reports";
  PRTab.className = "progress-report k-item k-last k-state-default";
  var curAriaCtrls = PRTab.getAttribute("aria-controls");
  var newAriaCtrls = curAriaCtrls.slice(0, -1) + "4";
  PRTab.setAttribute("aria-controls", newAriaCtrls);
  var tabsList = document.getElementsByClassName("k-tabstrip-items k-reset")[0];
  tabsList.appendChild(PRTab);
  var ArchTab = document.getElementsByClassName("archiveTab k-content")[0];
  var PRInfo = ArchTab.cloneNode(true);
  PRInfo.className = "progress-reportTab k-content";
  var curAriaCtrls = PRInfo.getAttribute("id");
  var newAriaCtrls = curAriaCtrls.slice(0, -1) + "4";
  PRInfo.setAttribute("id", newAriaCtrls);
  var tabsList = document.getElementsByClassName("tabs k-tabstrip k-widget k-header k-floatwrap k-tabstrip-top")[0];
  var msgList = document.getElementsByClassName("messagesList k-widget k-listview")[0];
  var msgListLength = msgList.children.length;
  var msgListChildren = msgList.children;
  for (var i = 0; i < msgListLength; i++) {
    console.log(msgListChildren[i]);
  }
  tabsList.appendChild(PRInfo);

};
