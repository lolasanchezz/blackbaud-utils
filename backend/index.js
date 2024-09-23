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
   await page.click('[icon = "list"]')
   // ok finally at blackbaud home page!! now trying to get info stuff

const hw = await page.evaluate(() => {
    const hws = document.getElementsByClassName('middle-block');

    let hw =  Array.from(hws).map(hws => {
       return {
            name: hws.children[0].children[0].children[0].children[0].innerHTML,
            dueDate: hws.children[1].textContent.trim().split('|')[0]
       }
    })
   return hw;
   
});
console.log(hw);




  
    





    
}






login();
































