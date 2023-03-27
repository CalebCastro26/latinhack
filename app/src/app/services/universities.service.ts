import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  constructor() { }
  universities = [
    {
      id: 1,
      name: "UPC",
      completeName: "Universidad Peruana De Ciencias Aplicadas",
      image: "../../../assets/Imagenes/logos-universidades/Logos-14.png",
      coordinator: "Daniel Alejandro Subauste Oliden",
      email: "daniel.subauste@upc.pe",
      telephone: "+51999999999"
    },
    {
      id: 2,
      name: "UMAD",
      completeName: "Universidad Madero",
      image: "../../../assets/Imagenes/logos-universidades/Logos-05.png",
      coordinator: "Daniel Tenorio",
      email: "danieltenoriotellez@yahoo.com.mx",
      telephone: "+51999999999"
    },
    {
      id: 3,
      name: "Tec",
      completeName: "Tecnológico de Monterrey",
      image: "../../../assets/Imagenes/logos-universidades/Logos-10.png",
      coordinator: "Jesus Aguilar Gonzalez",
      email: "jaguilarg@tec.mx",
      telephone: "+51999999999"
    },
    {
      id: 4,
      name: "UAB",
      completeName: "Universidad Autónoma de Barcelona",
      image: "../../../assets/Imagenes/logos-universidades/Logos-08.png",
      coordinator: "Ramon Vilanova - Albert Gil Lopez",
      email: "Ramon.Vilanova@uab.cat - albert@albertgilopez.es",
      telephone: "+51999999999"
    },
    {
      id: 5,
      name: "Cenfotec",
      completeName: "Universidad Cenfotec",
      image: "../../../assets/Imagenes/logos-universidades/Logos-13.png",
      coordinator: "-",
      email: "-",
      telephone: "+51999999999"
    },
    {
      id: 6,
      name: "UDF",
      completeName: "Universidad de la Frontera",
      image: "../../../assets/Imagenes/logos-universidades/Logos-04.png",
      coordinator: "Ruth Elisabeth Novoa Troquián",
      email: "ruth.novoa@ufrontera.cl",
      telephone: "+51999999999"
    },
    {
      id: 7,
      name: "UAC",
      completeName: "Universidad Autónoma de Coahuila",
      image: "../../../assets/Imagenes/logos-universidades/Logos-11.png",
      coordinator: "Leonor Gutierrez Gonzalez",
      email: "leonorgutierrez@uadec.edu.mx",
      telephone: "+51999999999"
    },
    {
      id: 8,
      name: "UDLA",
      completeName: "Universidad de las Américas",
      image: "../../../assets/Imagenes/logos-universidades/Logos-03.png",
      coordinator: "Eddy Mauricio Armas",
      email: "eddy.armas@udla.edu.ec",
      telephone: "+51999999999"
    },
    {
      id: 9,
      name: "UDE",
      completeName: "Universidad Argentina de la Empresa",
      image: "../../../assets/Imagenes/logos-universidades/Logos-12.png",
      coordinator: "Federico Iñiguez- Federico Fasano",
      email: "finiguez@uade.edu.ar - ffasano@uade.edu.ar",
      telephone: "+51999999999"
    },
    {
      id: 10,
      name: "UST",
      completeName: "Universidad Santo Tomás",
      image: "../../../assets/Imagenes/logos-universidades/Logos-02.png",
      coordinator: "Carlos Artemio Calderón Díaz",
      email: "carloscalderondi@santotomas.cl",
      telephone: "+51999999999"
    },
    {
      id: 11,
      name: "UTF",
      completeName: "Universidad Nacional Tres de Febrero",
      image: "../../../assets/Imagenes/logos-universidades/Logos_01.png",
      coordinator: "Juan Ivanier",
      email: "jivanier@untref.edu.ar",
      telephone: "+51999999999"
    },
    {
      id: 12,
      name: "UDLA Colombia",
      completeName: "Universidad De los Andes Colombia",
      image: "../../../assets/Imagenes/logos-universidades/Logos-07.png",
      coordinator: "Oscar Javier Avila Cifuentes",
      email: "oj.avila@uniandes.edu.co",
      telephone: "+51999999999"
    },
    {
      id: 13,
      name: "Insper",
      completeName: "Insper",
      image: "../../../assets/Imagenes/logos-universidades/Logos-06.png",
      coordinator: "Luciano Pereira Soares",
      email: "RaulisonAR@insper.edu.br - lpsoares@insper.edu.br",
      telephone: "+51999999999"
    },
    {
      id: 14,
      name: "PUC-SP",
      completeName: "Pontificia Universidad Católica de Sao paulo",
      image: "../../../assets/Imagenes/logos-universidades/Logos-09.png",
      coordinator: "Carlos P -Flavio Morgado",
      email: "carlosp@pucsp.br - fmorgado@pucsp.br",
      telephone: "+51999999999"
    }
  ]
}
