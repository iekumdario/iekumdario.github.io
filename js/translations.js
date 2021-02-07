var dict = {
  "lang":{
    en:"es",
    es:"en"
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
    es: "Me puedes escribir a (jdquinterov arroba gmail punto com)",
    en: "You can reach me at (jdquinterov at gmail dot com)"
  },
  "contact": {
    es: "Contacto",
    en: "Contact"
  },
  "aboutme-dtl": {
    es: "Soy un ingeniero de software interesado principalmente en desarrollar proyectos que involucran plataformas web y móviles. Tengo experiencia en desarrollo de software y sistemas, investigación científica y diseño de algoritmos para solucionar problemas. Conocimientos en múltiples lenguajes de programación, marcado y scripting.",
    en: "I'm a software engineer primarily interested in developing projects involving Web and Mobile platforms. Fluent in multiple programming, markup and scripting languages. With experience in software and systems development, scientific research, and algorithm design aimed at solving problems."
  },
  "programming": {
    es: "Programación",
    en: "Code"
  },
  "programming-dtl": {
    es: "HTML, Java, C# y tecnologías relacionadas.",
    en: "HTML, Java, C# and related technologies."
  },
  "servers": {
    es: "Servidores",
    en: "Servers"
  },
  "servers-dtl": {
    es: "Nginx, IIS, Apache.",
    en: "Nginx, IIS, Apache."
  },
  "db": {
    es: "Bases de datos",
    en: "Databases"
  },
  "db-dtl": {
    es: "Bases de datos relacionales, SQL, Search engines, etc.",
    en: "Relational Databases, SQL, Search engines, etc."
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
