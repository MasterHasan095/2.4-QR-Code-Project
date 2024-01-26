/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "node:fs";

import qr from "qr-image";


inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Please provide us the URL',
    },
  ])
  .then((URL) => {
    var qr_svg = qr.image(URL['url'], { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

})
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt could not be rendered in the current environment.');
    } else {
      console.log('An unexpected error occurred:', error);
    }
  });
