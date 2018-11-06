var dict = {
  "lang":{
    en:"en", //dumb I know
    es:"es"
  },
  "name": {
    es: "José Quintero",
    en: "José Quintero"
  },
  "occupation": {
    es: "Ingeniero de software",
    en: "Software engineer"
  },
  "more": {
    es: "Conoce más",
    en: "Find Out More"
  },
  "aboutme": {
    es: "Sobre mi",
    en: "About Me"
  },
  "skills": {
    es: "Aptitudes",
    en: "Skills"
  },
  "contact-dtl": {
    es: "Me puedes escribir a (jdquintero arroba gmail punto com)",
    en: "You can reach me at (jdquintero at gmail dot com)"
  },
  "contact": {
    es: "Contacto",
    en: "Contact"
  },
  "aboutme-dtl": {
    es: "Soy un ingeniero y desarrollador de software interesado principalmente en desarrollar proyectos que involucran plataformas web y móviles. Tengo experiencia en desarrollo de software y sistemas, investigación científica y diseño de algoritmos para solucionar problemas. Conocimientos en múltiples lenguajes de programación, marcado y scripting. Mis habilidades van desde aplicaciones de escritorio y web hasta bases de datos y servidores Linux.",
    en: "I'm a software developer and engineer primarily interested in developing projects involving Web and Mobile platforms. Fluent in multiple programming, markup and scripting languages. With experience in software and systems development, scientific research, and algorithm design aimed at solving problems. My skills range from desktop to web apps, all the way to databases and linux servers."
  },
  "programming": {
    es: "Programación",
    en: "Code"
  },
  "programming-dtl": {
    es: "HTML, Java, Python y tecnologías relacionadas.",
    en: "HTML, Java, Python and related technologies."
  },
  "servers": {
    es: "Servidores",
    en: "Servers"
  },
  "servers-dtl": {
    es: "Linux y servidor web apache.",
    en: "Linux and apache web servers."
  },
  "db": {
    es: "Bases de datos",
    en: "Databases"
  },
  "db-dtl": {
    es: "Bases de datos relacionales, SQL, formularios, informes, etc.",
    en: "Relational Databases, SQL, forms, reports, etc."
  },
  "dedication": {
    es: "Dedicación",
    en: "Dedication"
  },
  "dedication-dtl": {
    es: "Me encanta lo que hago.",
    en: "I enjoy working as a developer."
  }
}


var langcodes = ["en", "es"]

var currentLanguage = 0;

var translated = false;

var languageinfo = navigator.language? navigator.language : navigator.userLanguage


for (i=0; i<langcodes.length; i++){
  if (languageinfo.substr(0,2)==langcodes[i]){
    var translator = $('body').translate({lang: langcodes[i], t: dict});
    currentLanguage = i;
    translated = true;
    break
  }
}

//use English by default
if(!translated) {
  var translator = $('body').translate({lang: "en", t: dict}); 
}

var switchLanguage = function(){
  currentLanguage = 1-currentLanguage;
  translator.lang(langcodes[currentLanguage]);
}
