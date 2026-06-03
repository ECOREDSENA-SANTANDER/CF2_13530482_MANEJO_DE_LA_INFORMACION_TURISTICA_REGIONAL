<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    P Cuando una persona visita un destino turístico, no solo espera conocer lugares atractivos; también necesita orientación clara, información confiable y un servicio que le permita vivir una experiencia segura y organizada. Por eso, el manejo de la información turística regional se convierte en una herramienta fundamental para quienes atienden, orientan y acompañan a turistas o visitantes en diferentes contextos del sector.
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/INTRO.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente formativo aborda la información del destino turístico regional, los atractivos, los itinerarios, las actividades, los servicios complementarios, la documentación, la asistencia y la normativa necesaria para prestar un servicio pertinente. Su propósito es que el aprendiz comprenda cómo organizar y utilizar la información disponible para responder a las necesidades del visitante, resolver inquietudes y verificar que el servicio ofrecido corresponda con la solicitud realizada.

          br
          br
          | El contenido se desarrollará desde una mirada práctica, relacionada con situaciones propias de la atención turística. A través de conceptos, ejemplos y orientaciones aplicadas, el aprendiz reconocerá la importancia de recolectar, gestionar, proteger y analizar información del servicio, con el fin de fortalecer la calidad de la atención, presentar resultados, realizar retroalimentación y proponer acciones de mejora.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
