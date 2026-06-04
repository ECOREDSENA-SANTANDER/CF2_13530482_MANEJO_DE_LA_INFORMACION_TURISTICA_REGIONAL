<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Itinerarios, actividades y servicios complementarios


    .row.justify-content-center.align-items-stretch.mb-4.bg6(data-aos='fade-right')
        .col-lg-5.d-flex
          img.w-100.h-100.izq.d-none.d-lg-block(src='@/assets/curso/Tema2/IMG01.png', alt='', style='object-fit: cover;')
        .col-lg-7.align-items-center.p-5
          .row
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/Tema2/img02.png', alt='')
          br
          p El itinerario turístico permite organizar la información del destino y convertirla en una experiencia comprensible para el visitante. A través de este recurso, se define qué lugares se visitan, en qué orden, cuánto tiempo requiere cada actividad, qué recomendaciones deben tenerse en cuenta y qué servicios apoyan el desarrollo del recorrido. Por ello, el itinerario no debe verse solo como una lista de horarios, sino como una herramienta que facilita la orientación, la seguridad, la coordinación y la calidad del servicio turístico.
        
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Itinerario turístico

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/Tema2/img03.png', alt='')
    p Un itinerario turístico es una herramienta de planificación que organiza, de manera secuencial, las actividades previstas durante un viaje, recorrido o experiencia turística. Este documento permite orientar al visitante sobre los lugares que conocerá, los tiempos estimados, las actividades programadas, las condiciones del recorrido y los servicios incluidos o disponibles durante la experiencia.
    p En la prestación del servicio turístico, el itinerario cumple una función orientadora porque ayuda a responder preguntas frecuentes del visitante, como: qué lugares se visitan, cuánto dura el recorrido, dónde inicia y termina la actividad, qué elementos debe llevar, qué recomendaciones de seguridad debe seguir y qué servicios complementarios puede encontrar. De esta manera, contribuye a que la experiencia sea más organizada, clara y confiable.
    
    .cajon.color-primario.p-4.mb-4
      p Por otro lado, el itinerario permite verificar que el servicio ofrecido corresponda con lo solicitado por el cliente. Si una persona reserva un recorrido cultural, natural, gastronómico o religioso, el itinerario ayuda a comprobar que las actividades, tiempos, atractivos y servicios incluidos sean coherentes con esa solicitud.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Características del itinerario

    p Un itinerario turístico debe ser claro, ordenado y realista. Para cumplir su función, debe presentar información suficiente, pero no excesiva, de manera que el visitante pueda comprender fácilmente cómo se desarrollará la experiencia.
    p Entre las principales características de un itinerario turístico se encuentran:
    
    .row.justify-content-center
      .col-md-9.col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="fade-left")
          .tarjeta.bg8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/1.svg' alt='')
            h4.text-center Orden secuencial
            p.text-center Presenta las actividades en el orden en que se desarrollarán, desde el inicio hasta el cierre del recorrido.

          .tarjeta.bg8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/2.svg' alt='')
            h4.text-center Claridad en tiempos
            p.text-center Indica horarios, duración aproximada de las actividades, tiempos de desplazamiento y momentos de descanso.

          .tarjeta.bg8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/3.svg' alt='')
            h4.text-center Información del recorrido
            p.text-center Describe los lugares que se visitan, los atractivos incluidos y las actividades previstas.

          .tarjeta.bg8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/04.svg' alt='')
            h4.text-center Recomendaciones al visitante
            p.text-center Incluye orientaciones sobre vestuario, hidratación, documentos, elementos personales, comportamiento esperado y medidas de seguridad.

          .tarjeta.bg8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/4.svg' alt='')
            h4.text-center Accesibilidad y condiciones del lugar
            p.text-center Informa sobre pendientes, distancias, superficies, disponibilidad de baños, zonas de descanso, señalización y condiciones para personas con discapacidad o movilidad reducida.

          .tarjeta.bg8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/5.svg' alt='')
            h4.text-center Servicios disponibles
            p.text-center Relaciona servicios como transporte, alimentación, guianza, entradas, seguros, asistencia, alquiler de equipos o puntos de información.

          .tarjeta.bg8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/6.svg' alt='')
            h4.text-center Flexibilidad
            p.text-center Permite realizar ajustes razonables ante cambios climáticos, condiciones del destino, necesidades del grupo o situaciones imprevistas.

          .tarjeta.bg8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-6.col-md-4.col-lg-6
                img(src='@/assets/curso/Tema2/7.svg' alt='')
            h4.text-center Coherencia con la solicitud del cliente
            p.text-center Responde al tipo de experiencia esperada por el visitante y a las condiciones ofrecidas previamente por el prestador del servicio.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Elementos básicos de un itinerario turístico

    p Para que un itinerario sea útil en la orientación del visitante, debe contener información organizada y verificable. La siguiente tabla presenta algunos elementos que pueden considerarse en su elaboración o revisión.
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2.
        span Elementos básicos de un itinerario turístico

      .tabla-a.color-acento-contenido.mb-3
        table
          thead
            tr
              th.bg2.w-25.text-izq Elemento
              th.bg2.text-izq Descripción
              th.bg2.text-izq Ejemplo de información
          tbody
            tr
              td #[b Nombre del recorrido]
              td Identifica la experiencia turística ofrecida.
              td Ruta cultural por el centro histórico.

            tr
              td #[b Fecha y horario]
              td Indica día, hora de inicio, duración y hora aproximada de finalización.
              td Sábado, 8:00 a. m. a 12:00 m.

            tr
              td #[b Punto de encuentro]
              td Señala el lugar donde inicia la actividad.
              td Entrada principal del parque o punto de información turística.

            tr
              td #[b Atractivos incluidos]
              td Relaciona los lugares o recursos que harán parte del recorrido.
              td Museo local, iglesia patrimonial, mirador o sendero ecológico.

            tr
              td #[b Actividades programadas]
              td Describe lo que realizará el visitante durante la experiencia.
              td Caminata guiada, charla interpretativa, degustación o visita cultural.

            tr
              td #[b Tiempo estimado]
              td Permite organizar la duración de cada momento del recorrido.
              td 30 minutos por atractivo o 15 minutos de descanso.

            tr
              td #[b Recomendaciones]
              td Orienta sobre vestuario, hidratación, documentos, alimentación o comportamiento.
              td Usar calzado cómodo, llevar agua y protección solar.

            tr
              td #[b Condiciones de accesibilidad]
              td Informa si el recorrido cuenta con rampas, baños accesibles, zonas de descanso o apoyos para la movilidad.
              td Sendero con tramos irregulares y zonas de descanso cada 500 metros.

            tr
              td #[b Servicios complementarios]
              td Indica servicios de apoyo disponibles durante la experiencia.
              td Transporte, alimentación, guianza, seguro, asistencia médica o entradas.

            tr
              td #[b Contacto de apoyo]
              td Facilita la comunicación ante dudas, cambios o emergencias.
              td Número del guía, operador o punto de atención.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Actividades turísticas

    p Las actividades turísticas son las acciones que realiza el visitante durante su permanencia en el destino. Estas actividades deben estar relacionadas con los atractivos disponibles, las características del territorio, el perfil del visitante y las condiciones de seguridad del lugar. Su adecuada selección permite que la experiencia sea pertinente, organizada y coherente con las expectativas del turista.
    p Las actividades pueden variar según el tipo de destino y los intereses del visitante. Algunas se orientan al disfrute de la naturaleza, otras al reconocimiento cultural, al aprendizaje, al descanso, a la gastronomía, a la recreación o a la participación en eventos locales. Al orientar sobre estas actividades, es importante informar con claridad su duración, nivel de dificultad, requisitos, restricciones, recomendaciones y servicios de apoyo.
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Tipos de actividades turísticas

        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg2.w-25.text-izq Tipo de actividad
                th.bg2.text-izq Descripción
                th.bg2.text-izq Ejemplos
            tbody
              tr
                td #[b Cultural]
                td Permite conocer la historia, identidad, patrimonio y expresiones culturales de una comunidad.
                td Visitas a museos, centros históricos, talleres artesanales o recorridos patrimoniales.

              tr
                td #[b Natural o ecológica]
                td Se desarrolla en espacios naturales y promueve la valoración del ambiente.
                td Caminatas ecológicas, avistamiento de aves, visitas a reservas, ríos, cascadas o miradores.

              tr
                td #[b Gastronómica]
                td Se relaciona con la cocina local, los sabores tradicionales y los productos del territorio.
                td Degustaciones, rutas gastronómicas, visitas a mercados o experiencias de cocina tradicional.

              tr
                td #[b Religiosa o espiritual]
                td Se vincula con lugares, celebraciones o prácticas de valor religioso o espiritual.
                td Visitas a templos, peregrinaciones, fiestas patronales o recorridos de arte religioso.

              tr
                td #[b Recreativa]
                td Busca el descanso, el entretenimiento y el disfrute del tiempo libre.
                td Parques temáticos, actividades familiares, recorridos urbanos o espacios de ocio.

              tr
                td #[b De aventura]
                td Puede implicar mayor exigencia física y requiere condiciones de seguridad previamente definidas.
                td Senderismo, ciclomontañismo, rafting, escalada o actividades en altura.

              tr
                td #[b Educativa o interpretativa]
                td Favorece el aprendizaje sobre el territorio, la naturaleza, la cultura o la historia.
                td Charlas interpretativas, recorridos guiados, visitas pedagógicas o experiencias comunitarias.

      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/Tema2/img04.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Servicios complementarios
    
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los servicios complementarios son aquellos que apoyan la experiencia turística y facilitan que el visitante pueda disfrutar el recorrido en mejores condiciones. Aunque no siempre constituyen el atractivo principal, sí influyen en la calidad del servicio, la comodidad, la seguridad y la satisfacción del turista.
          br
          br
          | Entre estos servicios se encuentran el transporte, la alimentación, el alojamiento, la guianza, la asistencia médica, los seguros, la venta de entradas, el alquiler de equipos, los puntos de información, la señalización, la conectividad, los baños, las zonas de descanso y otros apoyos necesarios según el tipo de actividad. Por ejemplo, en una caminata ecológica pueden requerirse transporte, guía, hidratación, seguro, botiquín, permisos de ingreso y recomendaciones de vestuario. En una ruta gastronómica pueden necesitarse reservas, información sobre alergias alimentarias, medios de pago y tiempos de desplazamiento.

    p Al informar sobre servicios complementarios, se debe verificar que la información sea clara, actualizada y coherente con lo ofrecido. También es necesario indicar si algún servicio tiene costo adicional, requiere reserva previa, depende del clima, tiene restricciones de edad, exige condiciones físicas específicas o cuenta con condiciones de accesibilidad para personas con discapacidad.
    
    .cajon.color-primario.p-4.mb-4
      p Un buen itinerario no solo organiza lugares y horarios; también integra actividades, servicios complementarios, recomendaciones y condiciones del destino para orientar al visitante y verificar que la experiencia corresponda con lo solicitado.

    p En síntesis, los itinerarios, las actividades turísticas y los servicios complementarios permiten transformar la información del destino en una experiencia organizada para el visitante. Cuando estos elementos se presentan de forma clara, se facilita la orientación, se reducen dudas, se previenen riesgos y se fortalece la calidad del servicio turístico.























































































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
