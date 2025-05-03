export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });




  // async function ensureOffscreenDocument() {
  //   const exists = await browser.offscreen.hasDocument();
  //   if (!exists) {
  //     await browser.offscreen.createDocument({
  //       url: 'offscreen/offscreen.html',
  //       reasons: ['DOM_SCRAPING'],
  //       justification: 'Load an iframe for background work',
  //     });
  //   }
  // }

  // Example call
  // ensureOffscreenDocument();

  

});



