---
title: "Font Explorer"
date: "January 2025"
description: "Weekend project"
categories: ["personal"]
tags: [""]
cover: "font_explorer/fontcov.png"
banner: "font_explorer/croppage.png"
maincol: "#201220c0"
---

**[LINK TO DEPLOYED APP](https://fontexplorer.vercel.app/)**

**[LINK TO SOURCE CODE](https://github.com/teodosin/fontexplorer)**

Font Explorer was a weekend project I made to learn the basics of [NextJs](https://nextjs.org/) and to do some hands-on thinking on this app concept. 

The motivation came from me not liking the process of choosing fonts from a massive list of all available options. Some basic filtering exists on most font sites, but in my experience, they're not enough to really be able to distinguish and categorise or really _explore_ fonts. 

From a starting point, I want to be able to move along some dimensions. I might have a vague feeling that a font doesn't quite capture the aesthetic or vibe in some scenario, but I can't quite determine what it is. So I need to see, next to my current font, fonts that are similar in most ways but differ in some specific way. And that difference is a dimension I want to move along to find more fonts that differ in that same way, only to varying degrees. So sort of like variable fonts, only across all fonts. 

While this proof of concept _can_ be used to explore and favorite fonts, this sort of dimensionality was too much to implement in a weekend. I do think the concept is possible to implement, with the help of some vector embeddings and user participation. In this prototype, a user can manually type in how a suggested font differs from the current one. Conceivably a large amount of such data could be used to semantically define and differentiate fonts or train a neural network to do so. 

NextJs was pleasant to work with, though I didn't get too deep into its features. Also I'm glad I got to learn how to import Google Fonts on demand. Maybe that will be useful some day.