browser.devtools.panels.create(
    "Media View",                      // title
    "icon.png",                // icon
    "devtools.html"      // content
  ).then((newPanel) => {
    newPanel.onShown.addListener(initialisePanel);
    newPanel.onHidden.addListener(unInitialisePanel);
  });