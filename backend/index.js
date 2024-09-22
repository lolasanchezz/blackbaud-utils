const puppeteer = require('puppeteer-extra');
require('dotenv').config()
const email = process.env.email;
const password = process.env.password;

const test = async() => {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    //signing in
    await page.goto(`https://app.blackbaud.com/signin/?`);
    await page.waitForSelector('[icon = "google"]')
    await page.click('[icon = "google"]')
    await page.waitForSelector('[type = "email"]')
    
    
    
    await page.type('[type = "email"]', email)
    await page.click('[id = "identifierNext"]')
   await page.waitForSelector('[type = "password"]', {visible: true})
   await page.type('[type="password"]', password);
   await page.waitForSelector('#passwordNext');
   await page.click("#passwordNext");
   await page.waitForNavigation();
   await page.waitForSelector('[eventbuttonname = "Portal link"]')
   await page.click('[eventbuttonname="Portal link"]')
   await page.waitForNavigation();
   console.log("logged in!!")


   //now trying to take all the text from each assignment
    






    
}
test();
































