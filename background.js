function fixTranslate() {
  let allElement = document.body.getElementsByTagName("*")
  let array = []
  for (let i = 0; i <= allElement.length - 1; i++) {
    if (!array.includes(allElement[i].tagName)) {
      array[i] = allElement[i].tagName

      const listTag = document.getElementsByTagName(allElement[i].tagName)

      for (let key = 0; key <= listTag.length - 1; key++) {
        if (listTag[key].tagName != "SCRIPT") {
          listTag[key].setAttribute("dir", "auto")
        }
      }
    }
  }
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
