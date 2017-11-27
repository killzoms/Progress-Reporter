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
