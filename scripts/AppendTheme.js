import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Themecolors } from '../config.js';

// Get the current directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to your global.css file
const cssFilePath = path.resolve(__dirname, '../src/styles/global.css');

// Generate CSS variables from the theme config
const generateCSSVariables = (colors) => {
    let cssContent = '\n/* Appended Theme Variables */\n:root {\n';
    for (const [key, value] of Object.entries(colors)) {
        cssContent += `  --${key}: ${value};\n`;
    }
    cssContent += '}\n';
    return cssContent;
};

// Append to the CSS file
const appendToCSSFile = () => {
    const themeCSS = generateCSSVariables(Themecolors);

    // Read the existing file, append the theme CSS, and write back
    fs.appendFile(cssFilePath, themeCSS, (err) => {
        if (err) {
            console.error('Error appending to CSS file:', err);
        } else {
            console.log('Theme variables successfully appended to global.css');
        }
    });
};

appendToCSSFile();
