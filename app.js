const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('https://www.worldometers.info/coronavirus/');

  page.waitForSelector('.maincounter-number')
   .then(async function () {
       const totalCases = await page.$eval('.maincounter-number span' , element => element.innerHTML);
       console.log('total cases' , totalCases);

   })
})();