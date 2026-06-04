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
