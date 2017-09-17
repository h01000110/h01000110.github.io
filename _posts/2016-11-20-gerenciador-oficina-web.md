---
layout: post
title: "Gerenciador de Oficina/Web"
tags: projeto flask python pt-br
---

seguindo a ideia do gerenciador feito em shell, mas com outros recursos e opções melhores. 
sem data para conclusão, melhoria contínua é o limite :D

[![version](https://img.shields.io/badge/version-v_0.0.3-blue.svg)](https://h01000110.github.io/20161120/gerenciador-oficina-web)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/h01000110/gerenciador-oficina-web/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/h01000110/gerenciador-oficina-web.svg?branch=master)](https://travis-ci.org/h01000110/gerenciador-oficina-web)  

## framework
[Flask](http://flask.pocoo.org/)  

## instalação
```bash
$ git clone https://github.com/h01000110/gerenciador-oficina-web.git
$ pip3 install -r requirements.txt
```

## executar
```bash
$ python3 run.py runserver
```

## características
> filtro visual para pagamentos em aberto  
estatísticas mensais  
banco de dados sqlite3  
backup de serviços completos em pdf  
multilinguagens (pt-BR, en-US)  
localização de clientes(necessário internet)

## localização de clientes
siga esses passos para gerar sua key: [GoogleMaps API](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#step_3_get_an_api_key) and [Geocoding](https://developers.google.com/maps/documentation/javascript/geocoding#GetStarted);  
coloque a key no seguinte arquivo **app/templates/mapa.html**  
```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
```

## recursos de terceiros
[Font Awesome by Dave Gandy](http://fontawesome.io/)  
[Circle Icons by Nick Roach](https://www.elegantthemes.com/blog/freebie-of-the-week/beautiful-flat-icons-for-free)  

## changelog
> 20-11-2016 versão 0.1  
25-11-2016 versão 0.0.2 adicionado idioma inglês, verificação de campos e correção de bugs  
01-12-2016 versão 0.0.3 adicionado localização de clientes usando google maps api e correção de bugs

[código fonte](https://github.com/h01000110/gerenciador-oficina-web)
