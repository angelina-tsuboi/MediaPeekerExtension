document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
  
        var f = d.createElement('form');
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        var i = d.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();
      });
    }, false);
  }, false);


function getMedia() {
    console.log("get media");
    lastStylesheet = null;
    chrome.experimental.devtools.inspectedWindow.getResources(function(resources) {
        var i = resources.length;
        while (i--) {
            var resource = resources[i];
            // if (resource.type === 'stylesheet' && resource.url !== 'about:blank') {
            //     resource.getContent(function(content) {
            //         lastStylesheet = {
            //             content: content,
            //             url: resource.url
            //         };
            //         console.log('lastStylesheet.url:', resource.url);
            //     });
            //     break;
            // }
            console.log("resource is", resource)
        }
    });
}

getMedia();

chrome.experimental.devtools.inspectedWindow.onResourceContent(function(resource) {
    console.log("goitten rds", resource);
})