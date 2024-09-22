const puppeteer = require('puppeteer');
const email = process.env.email;
const password = process.env.password;
const test = async() => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(`https://app.blackbaud.com/signin/?login_hint=${email}`);
    await page.locator('#identifierNext > div > button > span').click();
   await page.locator('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input').fill(password)

   
    
}
test();
































