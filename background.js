const urlPatterns = [
    '.slack.com/archives/',
    'slack.com/huddle/'
    // Add more URL patterns here
];
  
function shouldCloseTab(url) {
    return urlPatterns.some(pattern => url.includes(pattern));
}
  
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && shouldCloseTab(changeInfo.url)) {
        setTimeout(() => {
            chrome.tabs.remove(tabId);
        }, 1000);
}   
});
