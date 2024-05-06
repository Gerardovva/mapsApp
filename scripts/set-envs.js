// const { waitForAsync } = require('@angular/core/testing');
// const { mkdirSync } = require('fs');

const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();


const targetPaht = './src/environments/environment.ts';
const envFileContent = `
export const environment = {
    mapbox_key:"${process.env['MAPBOX_KEY']}",
    otra:"propiedad",
}
`;


mkdirSync('./src/environments'), { recursive: true };//se crea la carptea 
writeFileSync(targetPaht, envFileContent);
