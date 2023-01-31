function fixTranslate() {
  var tags = document.querySelectorAll("*")
  for (var i = 0; i < tags.length; i++) {
    tags.item(i).dir = "auto"
  }

  var link = document.createElement("link")
  link.href = "https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
  link.rel = "stylesheet"
  link.type = "text/css"
  document.head.appendChild(link)

  var style = document.createElement("style")
  style.innerHTML = "*{font-family:'Vazirmatn' !important;}"
  document.head.appendChild(style)
}

chrome.action.onClicked.addListener((tab) => {
  chrome.action.setBadgeText({
    text: "FIX",
    tabId: tab.id,
  })
  chrome.action.setBadgeBackgroundColor({
    color: "green",
    tabId: tab.id,
  })
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      function: fixTranslate,
    })
  }
})
