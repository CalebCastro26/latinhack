import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseCasesService {

  constructor() { }
  useCases = [
    {
      id: 0,
      name: "Ciberseguridad",
      logo:"../../../assets/Imagenes/Mundo.png",
      description:"1",
      desafioTitle1:"D001: Comercio Electrónico",
      desafioTitle2:"D002: Gestión de Obligaciones",
      desafioDescription1:"En Perú desde el año 2020 el comercio electrónico se incrementó  más de 200%, pero la participación del mismo fuera de la ciudad  capital es sólo del 10%. Plantear una iniciativa para mejorar la inserción del E-Commerce al interior del país.",
      desafioDescription2: "Dentro de la gestión empresarial existen distintas actividades de mucha importancia (Informes, Reportes, Inspecciones, Certificaciones, etc) que pueden generar altos costos en caso no realizarse de manera anticipada, muchas veces los medios tradicionales (Agendas, calendarios, recordatorios por correo) no son suficientes para asegurarnos de que estas actividades importantes se lleguen a realizar. Este desafío conciste en contar con una herramienta donde se planifique diferentes eventos que pueda alertar su fecha de vencimiento a una lista de usuarios responsables, así como monitorear eventos que no se hayan cumplido. ",
    },
  ]
}
