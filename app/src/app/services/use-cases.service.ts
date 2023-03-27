import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseCasesService {

  constructor() { }
  useCases = [
    {
      id: 0,
      name: "Empresarial",
      logo:"../../../assets/Imagenes/Iconos Hackaton_Mesa de trabajo 1.png",
      description:"1",
      desafioTitle1:"D001: Comercio Electrónico",
      desafioTitle2:"D002: Gestión de Obligaciones",
      desafioDescription1:"En Perú desde el año 2020 el comercio electrónico se incrementó  más de 200%, pero la participación del mismo fuera de la ciudad  capital es sólo del 10%. Plantear una iniciativa para mejorar la inserción del E-Commerce al interior del país.",
      desafioDescription2: "Dentro de la gestión empresarial existen distintas actividades de mucha importancia (Informes, Reportes, Inspecciones, Certificaciones, etc) que pueden generar altos costos en caso no realizarse de manera anticipada, muchas veces los medios tradicionales (Agendas, calendarios, recordatorios por correo) no son suficientes para asegurarnos de que estas actividades importantes se lleguen a realizar. Este desafío conciste en contar con una herramienta donde se planifique diferentes eventos que pueda alertar su fecha de vencimiento a una lista de usuarios responsables, así como monitorear eventos que no se hayan cumplido. ",
    },
    {
      id: 1,
      name: "Educativo",
      logo:"../../../assets/Imagenes/Iconos Hackaton-02.png",
      description:"1.-Estrategias para fortalecer el 'engagement' del estudiante con el profesor, universidad, clases, materias relacionado sobre todo al aprendizaje híbrido. ​\n2. -Desarrollo de soluciones vinculadas a la solución de la fatiga digital o burn-out en los estudiantes​ \n3. -Fomento del aprendizaje colaborativo​",
      desafioTitle1:"D003: Fortalecimiento del compromiso del Alumno en clases virtuales/híbridas",
      desafioTitle2:"D004: Mitigación de Burn-Out",
      desafioDescription1:"En la nueva normalidad aún tenemos instituciones educativas que conservarán clases virtuales o clases híbridas, sabiendo que existen estudiantes que les cuesta un poco más adaptarse a este tipo de educación, se le desafía a proponer una solución que permita fortalecer el 'engagement' del estudiante con el profesor, universidad, clases y materias relacionado.",
      desafioDescription2: "Uno de los principales retos de la educación virtual es la fatiga digital o burn-out en los estudiantes y docentes, este desafío consiste en diseñar una solución que permiti mitigar este problema de tal forma que los docentes y alumnos puedan continuar sus clases con menor interrupción."
    },
    {
      id: 2,
      name: "Responsabilidad social",
      logo:"../../../assets/Imagenes/Iconos Hackaton-03.png",
      description:"Violencia contra la Mujer en el ámbioto de la prevención del feminicidio.​\nSoluciones digitales para enfrentar los problemas del transporte público en grandes ciudades de América Latina.​",
      desafioTitle1:"D005:Feminicidio.",
      desafioTitle2:"",
      desafioDescription1:"El feminicidio es entendido como el asesinato de una mujer por su condición de género.  Existe, pese a ser un atentado contra los derechos humanos, una falta de reacción ciudadana efectiva frente a las denuncias que se realizan debido a que se requiere de acción mucho antes de que este sea cometido. Invitamos a proponer herramientas digitales que pudieran prevenir feminicidios y que pueda significar una reducción de la violencia contra la mujer.",
      desafioDescription2: " "
    },
    {
      id: 3,
      name: "Sostenibilidad",
      logo:"../../../assets/Imagenes/Iconos Hackaton-04.png",
      description:"Pendiente",
      desafioTitle1:"D006: Medir y gestionar las emisiones de carbono de todo el ecosistema, no solo del negocio",
      desafioTitle2:"",
      desafioDescription1:"La transparencia sobre las emisiones de carbono de un producto en toda la cadena de valor, incluida la producción, las materias primas, el uso de energía y el transporte es esencial para poder cuantificar la huella de carbono y reducirla. Muchas empresas sostenibles optan por establecer un precio interno al carbono para “internalizar” los costos externos del cambio climático. Esta métrica da claridad financiera para la toma de decisiones y las inversiones necesarias para acelerar la acción empresarial sostenible y la innovación. Controlar las emisiones de la cadena de suministro es especialmente importante. Hay estudios que muestran que las emisiones de la cadena de suministro son en promedio 11.4 veces más altas que las emisiones operativas.",
      desafioDescription2: ""
    },

  ]
}
