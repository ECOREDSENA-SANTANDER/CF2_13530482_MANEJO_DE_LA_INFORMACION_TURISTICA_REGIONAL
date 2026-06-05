<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de la información y verificación del servicio turístico

    .row.justify-content-center.align-items-stretch.mb-4.bg6(data-aos='fade-right')
        .col-lg-5.d-flex
          img.w-100.h-100.izq.d-none.d-lg-block(src='@/assets/curso/Tema4/img01.png', alt='', style='object-fit: cover;')
        .col-lg-7.align-items-center.p-5
          .row
            .col-lg-2.mb-4
              img.d-none.d-lg-block(src='@/assets/curso/Tema4/img02.png', alt='')
            .col-lg-12
              p La gestión de la información permite organizar los datos que se generan antes, durante y después de la prestación del servicio turístico. Esta información puede provenir de reservas, formularios, encuestas, registros de novedades, bases de datos, informes, sistemas de atención o comentarios de los visitantes. Cuando se administra de manera adecuada, se convierte en un insumo para orientar mejor al cliente, verificar la calidad del servicio y tomar decisiones de mejora.
              p En el turismo, la información no debe recolectarse solo por cumplir un requisito. Su valor está en que permite comprender qué ocurrió durante la experiencia, identificar si el servicio respondió a la solicitud del cliente, reconocer aspectos positivos, detectar fallas y proponer acciones correctivas o preventivas. Por ello, este proceso se relaciona directamente con la verificación del servicio ofrecido y con la mejora continua de la atención.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Gestión de la información

    p La gestión de la información consiste en recolectar, organizar, conservar, analizar y comunicar datos útiles para apoyar la toma de decisiones. En el contexto turístico, permite administrar información sobre visitantes, reservas, atractivos, servicios, proveedores, quejas, encuestas, incidentes, rutas, actividades y resultados de la atención prestada.
    p Una adecuada gestión de la información facilita que los prestadores de servicios turísticos trabajen con datos claros, actualizados y confiables. Esto contribuye a responder mejor a las solicitudes de los visitantes, planear recorridos, verificar compromisos adquiridos, proteger información personal y generar evidencias sobre la calidad del servicio.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Proceso de gestión de la información en turismo

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
        .col-lg-12
          LineaTiempoE.color-secundario
            .row.justify-content-center(titulo="Paso 1" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas1.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Identificación
                p Reconocer qué información se necesita para prestar y verificar el servicio, por ejemplo: datos del visitante, solicitud realizada, condiciones del recorrido, servicios incluidos, novedades o nivel de satisfacción.

            .row.justify-content-center(titulo="Paso 2" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas2.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Recolección
                p Obtener la información mediante instrumentos como formularios, encuestas, entrevistas, listas de chequeo, registros de novedades, observación o sistemas de atención.

            .row.justify-content-center(titulo="Paso 3" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas3.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Organización y almacenamiento
                p Clasificar y guardar la información de forma ordenada, ya sea en archivos físicos, carpetas digitales, bases de datos, hojas de cálculo o sistemas de información.

            .row.justify-content-center(titulo="Paso 4" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas4.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Análisis
                p Revisar los datos para identificar tendencias, necesidades frecuentes, incumplimientos, quejas, aspectos positivos, riesgos o situaciones que requieren seguimiento.

            .row.justify-content-center(titulo="Paso 5" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas5.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Comunicación
                p Presentar los resultados de manera clara al equipo de trabajo o a las personas responsables de tomar decisiones, mediante informes, reportes, reuniones o registros internos.

            .row.justify-content-center(titulo="Paso 6" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas6.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Mejora
                p Definir acciones de mejora a partir de los resultados obtenidos y realizar seguimiento a su cumplimiento.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Tipos de información en turismo

    p En la prestación del servicio turístico se manejan diferentes tipos de información. Cada una cumple una función específica y debe ser tratada con responsabilidad, especialmente cuando incluye datos personales o información sensible del visitante.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.col-10.mb-4.col-md-8
        img(src="@/assets/curso/Tema4/img03.png")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Información del visitante")
            .col-md-12.mb-4.mb-md-0
              p Incluye nombres, datos de contacto, nacionalidad, edad, preferencias, necesidades particulares, condiciones de accesibilidad, datos de emergencia o restricciones informadas por la persona.
          .row(numero="2" titulo="Información del servicio")
            .col-md-12.mb-4.mb-md-0
              p Comprende reservas, itinerarios, horarios, actividades contratadas, servicios incluidos, costos, condiciones, recomendaciones y compromisos adquiridos con el cliente.

          .row(numero="3" titulo="Información del destino")
            .col-md-12.mb-4.mb-md-0
              p Reúne datos sobre atractivos turísticos, rutas, accesos, servicios disponibles, restricciones, capacidad del lugar, condiciones climáticas, seguridad y recomendaciones de visita.

          .row(numero="4" titulo="Información operativa")
            .col-md-12.mb-4.mb-md-0
              p Se relaciona con proveedores, transporte, guías, permisos, equipos, seguros, puntos de encuentro, logística y recursos necesarios para prestar el servicio.

          .row(numero="5" titulo="Información de evaluación")
            .col-md-12.mb-4.mb-md-0
              p Incluye encuestas de satisfacción, quejas, reclamos, sugerencias, registros de novedades, comentarios del visitante y resultados de seguimiento.

          .row(numero="6" titulo="Información documental")
            .col-md-12.mb-4.mb-md-0
              p Corresponde a formatos, autorizaciones, consentimientos informados, reportes, comprobantes, listas de chequeo, informes y demás documentos que sirven como evidencia del servicio prestado.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Métodos de recolección

    .bloque-texto-g.bg9.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los métodos de recolección permiten obtener información útil para planear, prestar y verificar el servicio turístico. Su elección depende del tipo de dato que se necesita, el momento de la atención y el propósito de uso.
          br

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-11
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema4/1.png", alt="alt").img100
            .col
              h5 Encuestas
              p Permiten conocer la percepción del visitante sobre la experiencia, el cumplimiento del itinerario, la atención recibida, la claridad de la información y el nivel de satisfacción mediante preguntas estructuradas.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema4/2.png", alt="alt").img100
            .col
              h5 Entrevistas
              p Facilitan obtener información más detallada a partir de una conversación guiada, orientada a conocer expectativas, necesidades específicas, intereses o experiencias del visitante.

        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema4/3.png", alt="alt").img100
            .col
              h5 Observación
              p Ayuda a registrar comportamientos, condiciones del entorno, flujo de visitantes, cumplimiento de normas, tiempos de espera o situaciones que ocurren durante la prestación del servicio.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema4/6.png", alt="alt").img100
            .col
              h5 Registro de novedades
              p Permite documentar incidentes, retrasos, quejas, cambios de ruta, dificultades operativas o situaciones especiales durante la actividad turística, con fines de seguimiento y mejora.

        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema4/4.png", alt="alt").img100
            .col
              h5 Revisión documental
              p Consiste en analizar documentos como itinerarios, formularios, registros o informes para verificar información, cumplimiento del servicio y coherencia con lo ofrecido.

        .crd.crd--avatarHorizontal2.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/Tema4/5.png", alt="alt").img100
            .col
              h5 Retroalimentación del equipo de trabajo
              p Consiste en recopilar información a partir de la experiencia del equipo que presta el servicio, con el fin de identificar aciertos, dificultades y mejoras.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Bases de datos en turismo

    .bloque-texto-g.bloque-texto-g--inverso.bg12.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema4/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una base de datos es un conjunto organizado de información que puede ser consultado, actualizado y utilizado cuando la organización lo requiera. En turismo, las bases de datos permiten registrar y consultar información sobre visitantes, reservas, atractivos, proveedores, inventarios turísticos, encuestas, quejas, rutas, servicios y resultados de atención.
          br
          br
          | Su utilidad está en que facilitan el acceso ordenado a la información y evitan la pérdida de datos importantes. Además, apoyan la toma de decisiones, la personalización de la atención, el seguimiento de solicitudes y la verificación de la calidad del servicio.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Tipos de bases de datos utilizadas en turismo


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-3.col-7.mb-4.col-md-5
        img(src="@/assets/curso/Tema4/img06.png")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Bases de datos de visitantes")
            p Registran información básica de turistas, preferencias, historial de servicios, solicitudes y datos de contacto.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Bases de datos de reservas")
            p Permiten organizar fechas, horarios, servicios contratados, pagos, cambios, cancelaciones y disponibilidad.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Bases de datos de atractivos turísticos")
            p Reúnen información sobre ubicación, características, acceso, horarios, recomendaciones, restricciones y servicios cercanos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Bases de datos documentales")
            p Almacenan informes, formatos, inventarios, consentimientos, registros de novedades, encuestas y soportes del servicio.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Bases de datos geográficas")
            p Organizan información relacionada con mapas, rutas, coordenadas, zonas turísticas, puntos de interés y recorridos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Bases de datos multimedia")
            p Conservan fotografías, videos, audios, piezas promocionales y material de apoyo para informar o promocionar el destino.    

       
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Ciclo vital del documento

    .bloque-texto-g.bg9.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Corresponde a las etapas por las que pasa un documento desde su creación o recepción hasta su conservación, eliminación o disposición final. En Colombia, la Ley 594 de 2000, Ley General de Archivos, reconoce la función archivística como el proceso que comprende desde la elaboración del documento hasta su eliminación o conservación permanente. 
          br
          br
          | En turismo, los documentos permiten dejar evidencia de reservas, itinerarios, autorizaciones, consentimientos informados, novedades, encuestas, quejas, informes y demás registros asociados a la prestación del servicio. Por ello, deben organizarse de manera que puedan consultarse cuando sea necesario y protegerse según su valor administrativo, legal, histórico o informativo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Etapas del ciclo vital del documento
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
        .col-lg-12
          LineaTiempoE.color-secundario
            .row.justify-content-center(titulo="Etapa 1" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas7.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Creación o recepción
                p El documento se produce o se recibe durante la prestación del servicio. Puede ser una ficha de inscripción, una reserva, un consentimiento informado, una encuesta o un reporte de novedad.

            .row.justify-content-center(titulo="Etapa 2" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas8.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Clasificación y organización
                p El documento se ordena según su tipo, fecha, tema, cliente, actividad o proceso. Esta organización facilita su búsqueda posterior.

            .row.justify-content-center(titulo="Etapa 3" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas9.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Uso o trámite
                p El documento se utiliza para prestar el servicio, tomar decisiones, verificar información o responder solicitudes.

            .row.justify-content-center(titulo="Etapa 4" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas10.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Almacenamiento y conservación
                p El documento se guarda de forma segura, en medio físico o digital, para proteger su contenido y permitir su consulta.

            .row.justify-content-center(titulo="Etapa 5" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas11.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Consulta y recuperación
                p La información se localiza cuando se requiere para seguimiento, verificación, respuesta a una solicitud o mejora del servicio.

            .row.justify-content-center(titulo="Etapa 6" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas12.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Disposición final
                p Se define si el documento se conserva, se transfiere, se elimina o se archiva de acuerdo con su valor y con los lineamientos de gestión documental aplicables.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Confidencialidad

    .row.justify-content-center.align-items-stretch.mb-4.bg6(data-aos='fade-right')
        .col-lg-5.d-flex
          img.w-100.h-100.izq.d-none.d-lg-block(src='@/assets/curso/Tema4/img09.png', alt='', style='object-fit: cover;')
        .col-lg-7.align-items-center.p-5
          .row
            .col-lg-2.mb-4
              img.d-none.d-lg-block(src='@/assets/curso/Tema4/11.png', alt='')
            .col-lg-10
              p La confidencialidad de la información consiste en proteger los datos personales, comerciales, administrativos y operativos que se recolectan durante la prestación del servicio turístico. Esto incluye información de visitantes, turistas, huéspedes, proveedores, colaboradores y empresas relacionadas con la actividad.
            p En turismo se pueden manejar datos como nombres, números de identificación, teléfonos, correos electrónicos, nacionalidad, fechas de viaje, reservas, pagos, preferencias, condiciones de accesibilidad, información médica básica para emergencias, restricciones alimentarias, encuestas, quejas y reclamos. Por esta razón, la información debe tratarse con reserva, seguridad y responsabilidad.
            p La Constitución Política de Colombia reconoce el derecho de las personas a conocer, actualizar y rectificar la información que se haya recogido sobre ellas en bases de datos o archivos. Además, la Ley 1581 de 2012 establece el régimen general de protección de datos personales y regula el tratamiento de esta información en Colombia.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Buenas prácticas para proteger la información

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')

      .row.justify-content-center(titulo="Solicitar autorización previa")
        .col-lg-5.mb-4.mb-md-0
          p Antes de recolectar datos personales, se debe informar al visitante el propósito de uso de la información y solicitar la autorización correspondiente.
        .col-lg-6.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/aco1.png', alt='')

      .row.justify-content-center(titulo="Explicar el uso de la información")
        .col-lg-5.mb-4.mb-md-0
          p La persona debe conocer para qué se recolectan sus datos, cómo se usarán y quién podrá acceder a ellos.
        .col-lg-6.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/aco2.png', alt='')

      .row.justify-content-center(titulo="Recolectar solo datos necesarios")
        .col-lg-5.mb-4.mb-md-0
          p No se deben solicitar datos que no tengan relación con la prestación o verificación del servicio turístico.
        .col-lg-6.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/aco3.png', alt='')

      .row.justify-content-center(titulo="No compartir con terceros no autorizados")
        .col-lg-5.mb-4.mb-md-0
          p La información del visitante no debe entregarse a personas o entidades que no estén autorizadas para tratarla.
        .col-lg-6.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/aco4.png', alt='')

      .row.justify-content-center(titulo="Proteger archivos y sistemas")
        .col-lg-5.mb-4.mb-md-0
          p Los documentos físicos y digitales deben conservarse en lugares seguros, con acceso restringido y medidas básicas de protección.
        .col-lg-6.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/aco5.png', alt='')

      .row.justify-content-center(titulo="Capacitar al personal")
        .col-lg-5.mb-4.mb-md-0
          p Las personas que manejan información deben conocer sus responsabilidades frente al tratamiento de datos personales.
        .col-lg-6.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/aco6.png', alt='')

      .row.justify-content-center(titulo="Mantener reserva profesional")
        .col-lg-5.mb-4.mb-md-0
          p La información conocida durante la prestación del servicio debe manejarse con discreción y respeto.
        .col-lg-6.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/aco7.png', alt='')

      .row.justify-content-center(titulo="Evitar publicaciones sin autorización")
        .col-lg-5.mb-4.mb-md-0
          p No se deben publicar fotografías, videos, testimonios o datos de visitantes sin autorización expresa.
        .col-lg-6.col-10.col-md-8
          figure
            img(src='@/assets/curso/Tema4/aco8.png', alt='')
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Sistemas de información
    
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-9.col-md-6
        img(src='@/assets/curso/Tema4/img10.png', alt='')
      .col-lg-8.bg8.p-5
        .row
          .col-lg-2.d-none.d-lg-block.mb-3
            img(src='@/assets/curso/Tema4/img11.png', alt='')
          .col-lg-12
            p Un sistema de información en turismo está conformado por personas, procesos, datos, herramientas y tecnologías que permiten recolectar, organizar, almacenar, analizar y comunicar información relacionada con la actividad turística. Su propósito es apoyar la toma de decisiones, mejorar la atención al visitante y facilitar la gestión de los servicios turísticos.
            p Estos sistemas ayudan a trabajar de manera más ordenada, rápida y segura. Gracias a ellos es posible consultar reservas, hacer seguimiento a solicitudes, registrar quejas, controlar servicios ofrecidos, analizar datos de satisfacción, revisar información del destino y fortalecer la calidad de la atención.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Tipos de sistemas de información en turismo


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
        .col-lg-12
          LineaTiempoE.color-secundario
            .row.justify-content-center(titulo="Paso 1" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas13.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Sistemas de reservas
                p Permiten registrar, consultar y gestionar reservas de alojamiento, transporte, paquetes turísticos, actividades, restaurantes o eventos.

            .row.justify-content-center(titulo="Paso 2" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas14.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Sistemas de gestión hotelera
                p Apoyan la administración de hoteles y alojamientos en procesos como recepción, habitaciones, facturación, inventario, pagos, reservas y atención al huésped.

            .row.justify-content-center(titulo="Paso 3" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas15.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Sistemas de información geográfica
                p Organizan información relacionada con ubicación de atractivos, rutas, senderos, zonas turísticas, hoteles, restaurantes y puntos de interés.

            .row.justify-content-center(titulo="Paso 4" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas16.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Sistemas de atención al cliente
                p Permiten registrar solicitudes, quejas, reclamos, sugerencias, encuestas de satisfacción y seguimiento a los visitantes.

            .row.justify-content-center(titulo="Paso 5" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas17.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Sistemas de promoción y comercialización turística
                p Apoyan la divulgación de productos, servicios y destinos a través de páginas web, redes sociales, plataformas de venta, correos electrónicos o campañas digitales.

            .row.justify-content-center(titulo="Paso 6" subtitulo="")
              .col-lg-3.col-7.mb-3.col-md-6
                figure
                  img(src='@/assets/curso/Tema4/pas18.png', alt='')
              .col-lg-8.mb-4.mb-lg-0
                h5 Sistemas estadísticos y de análisis turístico
                p Permiten analizar datos sobre visitantes, ocupación hotelera, gasto turístico, temporadas, preferencias, comportamiento del mercado y resultados del servicio.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Verificación del servicio turístico

    .bloque-texto-g.bg9.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La verificación del servicio turístico consiste en revisar si la atención prestada correspondió con la solicitud del cliente, las condiciones ofrecidas, el itinerario definido, los procedimientos establecidos y la normativa aplicable. Esta verificación permite identificar si el visitante recibió información clara, si se cumplieron los servicios pactados, si las actividades se desarrollaron de manera segura y si la experiencia respondió a sus expectativas.
          br
          br
          | Para verificar el servicio se pueden utilizar métodos e instrumentos como encuestas de satisfacción, entrevistas breves, observación directa, análisis de quejas y sugerencias, revisión documental, listas de chequeo, registros de novedades y reportes de incidentes. Lo importante es que la información recolectada se analice y se convierta en decisiones de mejora.

    .cajon.color-primario.p-4.mb-4
      p Para comprender mejor cómo la información recolectada durante la prestación del servicio turístico puede convertirse en decisiones y acciones de mejora, se invita a explorar el pódcast “De los datos a la mejora del servicio turístico”. En este recurso se presenta una situación cotidiana relacionada con la atención al visitante y se explica cómo una encuesta, una lista de chequeo o un registro de novedades puede ayudar a verificar el servicio, identificar oportunidades de mejora y fortalecer la calidad de la experiencia turística.

    .row.justify-content-center.mb-4
        .col-lg-12
          img.w-100(
            src='@/assets/curso/Tema4/podcast.svg'
            alt='Texto que describa la imagen'
            data-aos="zoom-in-left"
          )
        .col-lg-12
          .tarjeta.color-primario.p-4.rounded-0.h-100.bg12
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-primario(
                texto="Pódcast: De los datos a la mejora del servicio turístico"
                :audio="require('@/assets/curso/Tema4/podcast.svg')"
              )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mt-3
                em 
                |  Después de revisar el pódcast, se recomienda reconocer qué información fue recolectada, qué situación se analizó y qué acción de mejora podría aplicarse en un servicio turístico regional.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Retroalimentación y acciones de mejora

    p La retroalimentación es el proceso mediante el cual se revisan los resultados del servicio y se comunican hallazgos al equipo de trabajo o a las personas responsables. Su propósito es reconocer fortalezas, identificar oportunidades de mejora y definir acciones que permitan prestar un servicio más pertinente, seguro y satisfactorio.
    p Las acciones de mejora deben surgir de la información recolectada. Por ejemplo, si varias personas indican que no recibieron información clara sobre el nivel de dificultad de una caminata, la acción de mejora puede ser ajustar el itinerario, fortalecer las recomendaciones previas y explicar mejor las condiciones del recorrido antes de iniciar la actividad.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Ruta para convertir información en mejora del servicio

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        LineaTiempoE.color-secundario
          .row.justify-content-center(titulo="Paso 1" subtitulo="")
            .col-lg-3.col-7.mb-3.col-md-6
              figure
                img(src='@/assets/curso/Tema4/pas19.png', alt='')
            .col-lg-8.mb-4.mb-lg-0
              h5 Recolectar información
              p Aplicar instrumentos como encuestas, registros, entrevistas o listas de chequeo.

          .row.justify-content-center(titulo="Paso 2" subtitulo="")
            .col-lg-3.col-7.mb-3.col-md-6
              figure
                img(src='@/assets/curso/Tema4/pas20.png', alt='')
            .col-lg-8.mb-4.mb-lg-0
              h5 Organizar los datos
              p Agrupar la información por temas: atención, seguridad, puntualidad, claridad de la información, accesibilidad, servicios complementarios o satisfacción.

          .row.justify-content-center(titulo="Paso 3" subtitulo="")
            .col-lg-3.col-7.mb-3.col-md-6
              figure
                img(src='@/assets/curso/Tema4/pas21.png', alt='')
            .col-lg-8.mb-4.mb-lg-0
              h5 Analizar resultados
              p Identificar tendencias, problemas frecuentes, aspectos positivos y situaciones que requieren seguimiento.

          .row.justify-content-center(titulo="Paso 4" subtitulo="")
            .col-lg-3.col-7.mb-3.col-md-6
              figure
                img(src='@/assets/curso/Tema4/pas22.png', alt='')
            .col-lg-8.mb-4.mb-lg-0
              h5 Presentar resultados
              p Comunicar los hallazgos mediante informes breves, reuniones, reportes o gráficos sencillos.

          .row.justify-content-center(titulo="Paso 5" subtitulo="")
            .col-lg-3.col-7.mb-3.col-md-6
              figure
                img(src='@/assets/curso/Tema4/pas23.png', alt='')
            .col-lg-8.mb-4.mb-lg-0
              h5 Definir acciones de mejora
              p Proponer ajustes concretos, responsables, tiempos y recursos necesarios.

          .row.justify-content-center(titulo="Paso 6" subtitulo="")
            .col-lg-3.col-7.mb-3.col-md-6
              figure
                img(src='@/assets/curso/Tema4/pas24.png', alt='')
            .col-lg-8.mb-4.mb-lg-0
              h5 Realizar seguimiento
              p Verificar si las acciones implementadas mejoraron la prestación del servicio.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .d-flex.align-items-start
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg3.py-2.w-card-text.text-white Ejemplo aplicado

    .row.justify-content-center.align-items-stretch.mb-4.bg6(data-aos='fade-right')
        .col-lg-5.d-flex
          img.w-100.h-100.izq.d-none.d-lg-block(src='@/assets/curso/Tema4/img13.png', alt='', style='object-fit: cover;')
        .col-lg-7.align-items-center.p-5
          br
          p Durante un recorrido regional, varios visitantes manifiestan en la encuesta de satisfacción que el punto de encuentro no fue claro y que algunas recomendaciones fueron enviadas de manera tardía. Al revisar los resultados, la persona o entidad prestadora del servicio identifica una oportunidad de mejora en la comunicación previa al recorrido. Como acción de mejora, se actualiza el itinerario, se envía la información con mayor anticipación, se incluye un mapa sencillo y se confirma la recepción de las recomendaciones antes de iniciar la actividad. En una siguiente experiencia, se verifica si disminuyen las dudas y los retrasos relacionados con el punto de encuentro.
          p Este ejemplo muestra cómo la información recolectada durante la prestación del servicio puede convertirse en una acción concreta para mejorar la orientación al visitante y fortalecer la calidad de la atención.
    
    .cajon.color-primario.p-4.mb-4
      p En síntesis, la gestión de la información permite recolectar, organizar, proteger, analizar y utilizar datos para verificar la calidad del servicio turístico. Cuando la información se maneja de manera responsable, es posible presentar resultados, realizar retroalimentación y aplicar acciones de mejora orientadas a responder mejor a las necesidades del visitante y fortalecer la confianza en el servicio prestado.






































</template>

<script>
export default {
  name: 'Tema4',
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
