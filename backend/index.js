const puppeteer = require('puppeteer-extra');
require('dotenv').config()
const email = process.env.email;
const password = process.env.password;

const login = async() => {

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
   
   await page.waitForSelector('.cal-event')
   // ok finally at blackbaud home page!! now trying to get info stuff

   const hw = await page.evaluate(() => {
    const hws = document.querySelectorAll("mwl-calendar-week-view-event");
    return Array.from(hws).map(hws => {
    
       return hws.children[0].children[0].children[0].innerHTML;
    })
   
});
console.log(hw);



  
    





    
}

const getAssignments = async(page) => {
    
}




login();
































