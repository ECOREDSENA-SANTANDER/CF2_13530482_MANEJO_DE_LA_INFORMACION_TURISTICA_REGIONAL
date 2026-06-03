<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Información turística regional y verificación del servicio',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos básicos relacionados con el destino turístico, la clasificación de atractivos turísticos, el inventario turístico, los itinerarios de viaje, la documentación turística, la normativa del sector y la gestión de la información, buscando fortalecer su capacidad para orientar al visitante, organizar información turística, aplicar procedimientos de servicio y reconocer la importancia de la calidad, la seguridad y la sostenibilidad en la actividad turística.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un destino turístico?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un lugar sin servicios de alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un sitio que solo cuenta con atractivos naturales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un espacio que recibe visitantes y ofrece productos, servicios y experiencias turísticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un lugar exclusivo para actividades comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos forma parte de un destino turístico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solamente los restaurantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo los monumentos históricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente los hoteles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Atractivos, alojamiento, alimentación, transporte, actividades y experiencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,
          texto:
            'Según la Ley 2068 de 2020, un atractivo turístico puede entenderse como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un recurso natural o cultural con capacidad de atraer visitantes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una empresa de transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una norma técnica turística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una base de datos hotelera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,
          texto: '¿Cuál es la función principal de los atractivos turísticos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la planificación turística.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar legalmente a los turistas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Motivar a las personas a conocer un destino y vivir experiencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar los servicios turísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,
          texto:
            '¿Cuál de los siguientes es un ejemplo de atractivo turístico natural?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Museo de historia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Restaurante típico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Galería de arte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Parque nacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 6,
          texto:
            '¿Qué tipo de atractivo turístico está relacionado con museos, monumentos, centros históricos y edificaciones patrimoniales?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gastronómico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Patrimonio cultural material.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Astronómico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recreativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,
          texto: '¿Para qué sirve un inventario turístico?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para vender paquetes turísticos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reemplazar la normativa turística.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para valorar y organizar los atractivos y recursos turísticos de un territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para eliminar atractivos poco conocidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,
          texto:
            '¿Qué información puede aportar un inventario turístico para orientar al visitante?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ubicación, acceso, servicios, recomendaciones y condiciones de visita de los atractivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El precio de los hoteles internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La historia de las agencias de viajes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Información que reemplaza la normativa turística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,
          texto:
            '¿Cuáles son los dos aspectos principales para evaluar atractivos turísticos?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gastronomía y alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Publicidad y ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calidad y significado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Precio y transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,
          texto:
            '¿Cuál es el uso más adecuado del inventario turístico durante la orientación al visitante?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usarlo únicamente como archivo interno sin relación con la atención turística.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Consultarlo para brindar información clara sobre atractivos, accesos, servicios, recomendaciones y condiciones del destino.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizarlo para promocionar destinos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar los itinerarios, las encuestas y la normativa turística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿A qué hace referencia el significado de un atractivo turístico?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al nivel de reconocimiento del atractivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Al costo de entrada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Al número de empleados del destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Al tipo de transporte usado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 12,
          texto: '¿Qué es un itinerario de viaje?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un formulario médico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una norma de confidencialidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una lista de hoteles sin fechas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una herramienta que organiza en orden cronológico las actividades de un recorrido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 13,
          texto:
            '¿Cuál de los siguientes elementos debe considerarse al elaborar un itinerario turístico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las fotografías del destino.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las redes sociales oficiales del destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Horarios, transporte, alojamiento, actividades y presupuesto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo nombres de restaurantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,
          texto:
            '¿Por qué es importante la asistencia médica para los viajeros?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque reemplaza la planificación del viaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque evita el uso de documentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque solo aplica para viajes internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permite actuar ante emergencias, accidentes o enfermedades durante el viaje.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,
          texto:
            '¿Cuál de las siguientes acciones hace parte de la orientación preventiva en una actividad turística?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entregar únicamente información comercial del destino.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Omitir recomendaciones para no preocupar al visitante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Informar sobre hidratación, clima, vestuario, nivel de dificultad, restricciones y elementos personales necesarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar la atención del personal de salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,
          texto:
            '¿Qué son los instrumentos de recolección de información en turismo?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas para construir hoteles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documentos que reemplazan las reservas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elementos decorativos del destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Herramientas para obtener datos sobre visitantes, destinos y servicios turísticos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,
          texto:
            '¿Cuál de los siguientes es un instrumento de recolección de información?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasaporte vencido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encuesta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Maleta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Señal de tránsito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,
          texto: '¿Qué es el consentimiento informado de riesgos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un folleto publicitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una base de datos de hoteles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un documento que informa al turista sobre condiciones, requisitos y posibles riesgos de una actividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una factura de pago.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,
          texto: '¿Qué es la normatividad turística?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una estrategia de publicidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conjunto de leyes, decretos, resoluciones, reglamentos y normas técnicas que regulan la actividad turística.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una lista de atractivos naturales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema de reservas hoteleras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,
          texto: '¿Qué busca la gestión de la información en turismo?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar el uso de tecnologías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar los informes de servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contar con información confiable, actualizada y útil para tomar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Guardar datos sin analizarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
