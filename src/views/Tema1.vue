<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Información del destino turístico regional

      .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La información del destino turístico regional permite reconocer los elementos que hacen valioso un territorio para la actividad turística. No se trata únicamente de identificar lugares atractivos, sino de comprender qué experiencias ofrece el destino, qué servicios están disponibles, qué condiciones deben tenerse en cuenta y cómo esa información puede usarse para orientar de manera clara, segura e incluyente al turista o visitante. Este tema aporta al reconocimiento del destino, sus atractivos y su inventario turístico, aspectos necesarios para suministrar información pertinente de acuerdo con la necesidad del cliente y del entorno turístico.
            br
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-start
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Destino turísticos
        

      .row.justify-content-center.align-items-stretch.mb-4.bg6(data-aos='fade-right')
        .col-lg-5.d-flex
          img.w-100.h-100.izq.d-none.d-lg-block(src='@/assets/curso/Tema1/img02.png', alt='', style='object-fit: cover;')
        .col-lg-7.align-items-center.p-5
          br
          br
          p Un destino turístico es un espacio físico, con límites definidos o no, en el cual una persona visitante puede realizar actividades, acceder a servicios y vivir experiencias relacionadas con el viaje. Este espacio puede corresponder a un municipio, una región, un parque natural, una zona rural, un centro histórico o un territorio con valor cultural, natural, social o recreativo. De acuerdo con la Organización Mundial del Turismo (ONU Turismo), un destino reúne productos, servicios, actividades y experiencias que hacen parte de la cadena de valor turística, y también posee elementos intangibles como imagen, identidad y reputación, los cuales influyen en la forma en que es percibido por los visitantes (Organización Mundial del Turismo, 2019).
          p Por esta razón, un destino turístico no debe entenderse únicamente como un lugar geográfico. También incluye los atractivos, la infraestructura, los servicios de alojamiento, alimentación, transporte, guianza, comercio, actividades complementarias, condiciones de seguridad, accesibilidad y formas de interacción con la comunidad local. En este sentido, la información del destino permite orientar mejor al visitante, resolver inquietudes y ofrecer recomendaciones acordes con sus intereses, necesidades y condiciones particulares.

      p En el contexto regional, conocer el destino implica identificar qué lo hace valioso, qué experiencias ofrece, qué servicios están disponibles y qué recomendaciones deben comunicarse para favorecer una visita segura, respetuosa e incluyente. Por ejemplo, al orientar a una persona mayor, a una familia con niños y niñas, o a una persona con discapacidad o movilidad reducida, es necesario informar sobre accesibilidad, tiempos de recorrido, pendientes, disponibilidad de baños, zonas de descanso, transporte, señalización y posibles riesgos del lugar.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-start
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white El destino turístico como sistema
      
      p Antes de orientar a un visitante, es necesario comprender que el destino turístico funciona como un sistema. Esto significa que no está conformado únicamente por los atractivos naturales o culturales, sino también por los servicios, la comunidad local, la infraestructura, las condiciones de accesibilidad, la seguridad y la identidad del territorio. Reconocer estos elementos permite organizar mejor la información y brindar recomendaciones pertinentes, seguras e incluyentes de acuerdo con las necesidades del visitante.
      p A continuación, se relacionan los elementos del destino turístico como sistema:
        

      SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="fade-left")
        .tarjeta.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-6
              img(src='@/assets/curso/Tema1/1.svg' alt='')
          h4.text-center Atractivos turísticos
          p.text-center Motivan la visita y permiten reconocer el valor natural, cultural, histórico, recreativo o simbólico del territorio.

        .tarjeta.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-6
              img(src='@/assets/curso/Tema1/2.svg' alt='')
          h4.text-center Servicios turísticos
          p.text-center Facilitan la permanencia del visitante mediante alojamiento, alimentación, transporte, guianza, información y actividades complementarias.

        .tarjeta.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-6
              img(src='@/assets/curso/Tema1/3.svg' alt='')
          h4.text-center Comunidad local
          p.text-center Aporta identidad, saberes, tradiciones, hospitalidad y sentido cultural a la experiencia turística.

        .tarjeta.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-6
              img(src='@/assets/curso/Tema1/4.svg' alt='')
          h4.text-center Infraestructura
          p.text-center Permite el acceso y disfrute del destino mediante vías, señalización, espacios públicos, servicios básicos y conectividad.

        .tarjeta.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-6
              img(src='@/assets/curso/Tema1/5.svg' alt='')
          h4.text-center Accesibilidad
          p.text-center Favorece la participación de personas con discapacidad, personas mayores, familias y visitantes con diferentes necesidades de movilidad, comunicación u orientación.

        .tarjeta.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-6
              img(src='@/assets/curso/Tema1/6.svg' alt='')
          h4.text-center Seguridad
          p.text-center Contribuye a prevenir riesgos y orientar al visitante sobre recomendaciones, rutas, condiciones del lugar y medidas de cuidado.

        .tarjeta.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-6
              img(src='@/assets/curso/Tema1/7.svg' alt='')
          h4.text-center Identidad del destino
          p.text-center Reúne los elementos culturales, naturales, históricos y simbólicos que diferencian al territorio frente a otros destinos.

        .tarjeta.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-6
              img(src='@/assets/curso/Tema1/8.svg' alt='')
          h4.text-center Imagen y reputación
          p.text-center Influye en la percepción del visitante y en la decisión de recomendar, regresar o valorar positivamente la experiencia.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-start
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Atractivos turísticos

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          img(src='@/assets/curso/Tema1/img04.png', alt='')
      p Los atractivos turísticos son recursos naturales o culturales que tienen el potencial y la capacidad de atraer visitantes. Esta definición se encuentra en la Ley 2068 de 2020, que actualiza disposiciones de la Ley General de Turismo en Colombia (Congreso de Colombia, 2020). Un atractivo puede motivar el desplazamiento de personas hacia un destino por su belleza, historia, valor ambiental, importancia cultural, tradición, arquitectura, gastronomía, recreación, espiritualidad, memoria colectiva o singularidad.

      .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 No todos los atractivos son reconocidos a gran escala. Algunos tienen importancia internacional, como un parque arqueológico o un patrimonio declarado; otros tienen valor nacional, regional o local. En el servicio turístico, lo importante es reconocer qué atractivo responde mejor al interés del visitante y qué información debe entregarse para que la experiencia sea clara, segura y significativa.
            br
            br
            | También es necesario diferenciar entre recurso turístico y atractivo turístico. Según la metodología de inventario turístico del Ministerio de Comercio, Industria y Turismo, el recurso corresponde a factores físicos o culturales que pueden ser aprovechados por el turismo, mientras que el atractivo reúne condiciones para integrarse de manera más inmediata a productos turísticos (Ministerio de Comercio, Industria y Turismo, 2020). Por ejemplo, una cascada poco señalizada y sin condiciones de acceso puede ser un recurso con potencial; en cambio, una cascada con sendero habilitado, información, medidas de seguridad y servicios básicos puede funcionar como atractivo turístico.
    
      .cajon.color-primario.p-4.mb-4
        p Un atractivo turístico no se valora solo por ser “bonito” o conocido. También debe analizarse según su estado de conservación, accesibilidad, seguridad, significado para la comunidad y capacidad para ofrecer una experiencia responsable al visitante.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-start
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Clasificación de atractivos


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/Tema1/img06.png', alt='')
        .col-lg-7
          .row 
            .col-lg-2
              img(src='@/assets/curso/Tema1/img07.png', alt='')
            .col-lg-10
              p La clasificación de atractivos permite organizar la información del destino y orientar al visitante de acuerdo con el tipo de experiencia que busca. Algunos visitantes prefieren espacios naturales, otros se interesan por la historia, la gastronomía, la arquitectura, las festividades, las expresiones culturales o las actividades recreativas. Por ello, clasificar los atractivos facilita seleccionar información pertinente y responder de manera más precisa a las solicitudes del turista.
          p De acuerdo con la metodología para la elaboración del inventario turístico del Ministerio de Comercio, Industria y Turismo, los recursos y atractivos susceptibles de uso turístico se organizan principalmente en dos grandes grupos: patrimonio cultural y sitios naturales (Ministerio de Comercio, Industria y Turismo, 2020).
    
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 1.
              span Clasificación general de atractivos turísticos

            .tabla-a.color-acento-contenido.mb-3
              table
                thead
                  tr
                    th.bg2.w-25.text-izq Grupo
                    th.bg2.text-izq Descripción
                    th.bg2.text-izq Ejemplos
                tbody
                  tr
                    td #[b Patrimonio cultural material]
                    td Bienes físicos que tienen valor histórico, arquitectónico, artístico o simbólico para una comunidad.
                    td Centros históricos, iglesias, monumentos, museos, obras de arte, edificaciones patrimoniales.

                  tr
                    td #[b Patrimonio cultural inmaterial]
                    td Expresiones vivas transmitidas por las comunidades, relacionadas con saberes, prácticas, celebraciones, música, gastronomía, oralidad o tradiciones.
                    td Fiestas tradicionales, cocina local, música, danza, relatos, oficios, prácticas artesanales.

                  tr
                    td #[b Festividades y eventos]
                    td Actividades programadas que convocan a la comunidad o a visitantes por su contenido cultural, artístico, religioso, deportivo o recreativo.
                    td Ferias, festivales, celebraciones religiosas, eventos gastronómicos, encuentros culturales.

                  tr
                    td #[b Grupos de especial interés]
                    td Comunidades con identidad cultural propia, cuya participación en actividades turísticas debe darse desde el respeto, la autonomía y la decisión de la comunidad.
                    td Comunidades indígenas, negras, afrocolombianas, raizales, palenqueras o campesinas, según el contexto territorial.

                  tr
                    td #[b Sitios naturales]
                    td Áreas, paisajes o recursos naturales con valor ambiental, paisajístico, recreativo o educativo.
                    td Parques naturales, ríos, cascadas, montañas, senderos, miradores, reservas, cuevas, playas.
        .col-lg-3
          img(src='@/assets/curso/Tema1/img08.png', alt='')

      p Al orientar sobre atractivos turísticos, es importante evitar presentar a las comunidades como objetos de observación. La información debe comunicarse con respeto por la cultura local, la privacidad, las normas comunitarias y la autorización de las personas o colectivos involucrados. También se deben considerar criterios de accesibilidad para personas con discapacidad, condiciones de seguridad, capacidad del lugar y recomendaciones de conservación ambiental.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-start
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Inventario turístico

      .bloque-texto-g.bloque-texto-g--inverso.bg10.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img09.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El inventario turístico es una herramienta que permite identificar, organizar, describir y valorar los recursos y atractivos de un territorio. Su utilidad trasciende el registro de información, pues constituye un insumo para la planificación, la promoción, el diseño de productos turísticos, la orientación de visitantes y la toma de decisiones sobre el desarrollo turístico regional. 
          br
          br
          | En Colombia, la elaboración y actualización del inventario turístico es una obligación legal a cargo del Ministerio de Comercio, Industria y Turismo (MinCIT), en cumplimiento del artículo 23, parágrafo 2, de la Ley 300 de 1996 (Ley General de Turismo), modificado por el artículo 4 de la Ley 2068 de 2020, que establece que dicho inventario servirá de base para la planificación, el ordenamiento territorial de la actividad, la orientación de la promoción turística y la determinación de las condiciones de uso de los atractivos declarados.

      p Para comprender su uso, es útil reconocer tres conceptos básicos:
      
      .row.mb-5
        .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/Tema1/01.svg', alt='')
              .col-lg-10
                h4.text-center Inventario turístico
                p.mb-0.text-center Registro organizado de recursos y atractivos de un territorio, útil para planificar, orientar y gestionar la actividad turística.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/Tema1/02.svg', alt='')
              .col-lg-10
                h4.text-center Recurso turístico
                p.mb-0.text-center Elemento natural o cultural con potencial para ser aprovechado por el turismo, pero que puede requerir adecuaciones, gestión o fortalecimiento.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/Tema1/03.svg', alt='')
              .col-lg-10
                h4.text-center Atractivo turístico
                p.mb-0.text-center Recurso natural o cultural que reúne condiciones para atraer visitantes y hacer parte de una experiencia o producto turístico.
              
      .row.justify-content-center.align-items-stretch.mb-4.bg11(data-aos='fade-right')
        .col-lg-5.d-flex
          img.w-100.h-100.izq.d-none.d-lg-block(src='@/assets/curso/Tema1/img10.png', alt='', style='object-fit: cover;')
        .col-lg-7.align-items-center.p-5
          br
          br
          p La elaboración de un inventario turístico puede incluir diferentes momentos, como la revisión de información previa, la identificación de recursos y atractivos, la clasificación, el trabajo de campo, el registro en formatos, la valoración y la actualización de la información. Sin embargo, para la prestación del servicio turístico, lo más importante es saber interpretar esa información y utilizarla de manera responsable al orientar al visitante.
          p Para profundizar en el proceso técnico de identificación, clasificación, registro y valoración de los atractivos turísticos, puede consultarse el Anexo 1. Metodología para la elaboración del inventario de atractivos turísticos, del Ministerio de Comercio, Industria y Turismo. Este documento amplía los criterios, formularios y orientaciones utilizados para elaborar inventarios turísticos en los territorios; en este componente se retoman únicamente los aspectos necesarios para comprender el inventario como herramienta de orientación al visitante y apoyo a la gestión turística regional (Ministerio de Comercio, Industria y Turismo, 2020).

      .cajon.color-secundario.p-4.mb-4
        p En la metodología del MinCIT, la valoración de atractivos considera aspectos como la calidad y el significado. La calidad se relaciona con el estado de conservación, organización, representatividad o condiciones del atractivo, según su naturaleza. El significado se refiere al nivel de reconocimiento del atractivo en el ámbito local, regional, nacional o internacional. Esta información ayuda a priorizar atractivos, diseñar recorridos y brindar recomendaciones más pertinentes al visitante (Ministerio de Comercio, Industria y Turismo, 2020).
        p Por ejemplo, si una persona solicita información sobre una experiencia cultural en la región, el inventario puede ayudar a identificar festividades, museos, centros históricos, prácticas gastronómicas o expresiones artísticas disponibles. Si la solicitud está relacionada con naturaleza, puede orientar sobre senderos, miradores, reservas, cascadas o parques, junto con recomendaciones de acceso, horarios, clima, seguridad y cuidado del entorno.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-start
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Del recurso turístico a la orientación del visitante

      p El inventario turístico cobra sentido cuando la información registrada se transforma en orientación útil para el visitante. Por ello, no basta con identificar los recursos y atractivos de un territorio; también es necesario clasificarlos, reconocer sus condiciones de acceso, valorar su estado, revisar las recomendaciones de visita y comunicar la información de manera clara, segura e incluyente.
      p Para comprender esta relación, el proceso puede organizarse en cinco momentos:
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          LineaTiempoE.color-primario
            .row.justify-content-center(titulo="Paso 1" subtitulo="")
              .col-lg-3
                figure
                  img(src='@/assets/curso/Tema1/pas1.png', alt='')     
              .col-lg-8.mb-4.mb-lg-0
                h5 Identificar
                p Reconocer los recursos y atractivos presentes en el territorio, teniendo en cuenta su valor natural, cultural, histórico, recreativo o simbólico.
            .row.justify-content-center(titulo="Paso 2" subtitulo="")
              .col-lg-3
                figure
                  img(src='@/assets/curso/Tema1/pas2.png', alt='')

              .col-lg-8.mb-4.mb-lg-0
                h5 Clasificar
                p Organizar los atractivos según su naturaleza, por ejemplo, patrimonio cultural material, patrimonio cultural inmaterial, festividades y eventos, grupos de especial interés o sitios naturales.

            .row.justify-content-center(titulo="Paso 3" subtitulo="")
              .col-lg-3
                figure
                  img(src='@/assets/curso/Tema1/pas3.png', alt='')

              .col-lg-8.mb-4.mb-lg-0
                h5 Registrar
                p Reunir información sobre ubicación, acceso, horarios, servicios disponibles, recomendaciones, restricciones, condiciones de seguridad y accesibilidad.

            .row.justify-content-center(titulo="Paso 4" subtitulo="")
              .col-lg-3
                figure
                  img(src='@/assets/curso/Tema1/pas4.png', alt='')

              .col-lg-8.mb-4.mb-lg-0
                h5 Valorar
                p Revisar aspectos como calidad, significado, estado de conservación, nivel de reconocimiento y condiciones de visita.

            .row.justify-content-center(titulo="Paso 5" subtitulo="")
              .col-lg-3
                figure
                  img(src='@/assets/curso/Tema1/pas5.png', alt='')

              .col-lg-8.mb-4.mb-lg-0
                h5 Orientar
                p Suministrar al visitante información clara, actualizada y pertinente, de acuerdo con su necesidad, el entorno turístico y las condiciones del atractivo.

      p Esta secuencia permite pasar del simple registro de información a una atención más organizada. Así, el inventario turístico se convierte en una herramienta para recomendar experiencias, resolver inquietudes, prevenir riesgos y verificar que la información entregada corresponda con las condiciones reales del destino.
      .cajon.color-primario.p-4.mb-4
        .h5 El destino turístico como sistema
        p Un destino no se compone solo de atractivos. También integra servicios, comunidad local, infraestructura, accesibilidad, seguridad, identidad, imagen y reputación. Estos elementos permiten organizar la información necesaria para orientar al visitante de manera clara, segura e incluyente.





































  </template>

<script>
export default {
  name: 'Tema1',
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
