---
layout: default
title: "Car Repair Shop Manager/Web"
tags: project python flask en-us
---

just a free manager made in Python, with more features than earlier manager made in shell.

[![version](https://img.shields.io/badge/version-v_0.0.3-blue.svg)](https://h01000110.github.io/20161120/gerenciador-oficina-web)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/h01000110/gerenciador-oficina-web/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/h01000110/gerenciador-oficina-web.svg?branch=master)](https://travis-ci.org/h01000110/gerenciador-oficina-web)

## framework
[Flask](http://flask.pocoo.org/)

## installation
```bash
$ git clone https://github.com/h01000110/gerenciador-oficina-web.git  
$ pip3 install -r requirements.txt  
```

## run
```bash
$ python3 run.py runserver
```

## features
> multi-view  
 monthly statistics  
 DB SQLite3  
 customer backup/pdf  
 multi-language - pt-BR/en-US  
 client map(internet required)

## client localization
follow these steps to getting your Key: [GoogleMaps API](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#step_3_get_an_api_key) and [Geocoding](https://developers.google.com/maps/documentation/javascript/geocoding#GetStarted);  
paste your key in **app/templates/mapa.html**  
```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
```

## resources
[Font Awesome by Dave Gandy](http://fontawesome.io)  
[Circle Icons by Nick Roach](https://www.elegantthemes.com/blog/freebie-of-the-week/beautiful-flat-icons-for-free)

## changelog
> 20-11-2016 version 0.1  
25-11-2016 version 0.0.2 english language added, fields verification and bug fixes  
01-12-2016 version 0.0.3 clients localization added with google maps api and bug fixes

[source](https://github.com/h01000110/gerenciador-oficina-web)
