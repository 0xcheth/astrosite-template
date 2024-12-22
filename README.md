# ![icon128](https://github.com/user-attachments/assets/363dcd48-8354-4f49-8bed-604cccd87f2d) 

### Introduction:
Currently building using [Astro](https://astro.build/) but I have plans to integrate selfhosted [Tina](https://tina.io/) or something similar from scratch but before that I just want to clean up the code so I can use MD for everything!

![sample](https://github.com/user-attachments/assets/451117d0-6e38-4c11-8fdc-19d3ad02ab6c)

### Features so far:

- ***Minimal code*** required to set up content on the site. Just upload/edit .md or .md files based on how far you want to cusomize css styling in-line.
  
- Web assets text and links to socials can be changed from one place.

- Drop in your social links and it

- **config.js** Centralised infrustructure for changing minor global variables and background colors. Just replace hex or rgba color codes in whichever specified field in the config file located at root level.

## Usage:

### find the full guide [here](https://template.0xcheth.dev/blog/about-this-site/)
First, make sure to drop in all the required variables (name, socials, etc.) into the config.js file. The rest is just plain Markdown however there are a few added styling commands you can use.

### Special Styling-

Simply add the following classes in any markdown file to use


### box
```
<div class="box"></div>

Its a box that you can put text or images in!
```
### colorbox
```
<div class="colorbox"></div>

its a box that inherits whatever your header color is!
```
### leftbox
```
<div class="leftbox"></div>

It aligns text or images to the left!
```
### centerbox
```
<div class="centerbox"></div>

It centers text or images!
```

#### rowbox
```
<div class="rowbox"></div>

It puts things in a single row! Great if you want to display multiple images.
```

### Get started! Fork This repo today!
