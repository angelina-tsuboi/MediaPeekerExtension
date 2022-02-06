// window.addEventListener('load', (event) => {
//     console.log('The page has fully loaded');
//     browser.devtools.panels.create(
//         "Media View",                      // title
//         "icon.png",                // icon
//         "devtools.html"      // content
//       ).then((newPanel) => {
//         newPanel.onShown.addListener(initialisePanel);
//         newPanel.onHidden.addListener(unInitialisePanel);
//       });
// });