<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La información turística regional y la verificación del servicio requieren comprender el destino como un sistema integrado por atractivos, servicios, comunidad local, infraestructura, accesibilidad, seguridad e identidad territorial. Reconocer los recursos y atractivos turísticos, clasificarlos e interpretarlos a partir del inventario turístico permite orientar al visitante de manera clara, pertinente e incluyente, de acuerdo con sus intereses, necesidades y condiciones del entorno. Asimismo, la organización de itinerarios, actividades y servicios complementarios facilita la planeación de experiencias seguras, ordenadas y coherentes con lo ofrecido al cliente.
    P De igual forma, la documentación turística, la asistencia médica, los instrumentos de recolección de información, el consentimiento informado de riesgos y la normativa turística fortalecen la prestación responsable del servicio. La gestión de la información permite recolectar, organizar, proteger, analizar y utilizar datos para verificar la atención brindada, presentar resultados, realizar retroalimentación y definir acciones de mejora. En conjunto, estos elementos contribuyen a una atención turística más confiable, segura y orientada a la satisfacción del visitante y al fortalecimiento de la calidad del servicio.
  
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa titulado “Información turística regional y verificación del servicio”. Presenta cinco ejes principales del componente formativo: destino turístico, relacionado con atractivos, inventario y orientación; itinerarios, asociado con actividades, tiempos y servicios; documentación, vinculada con asistencia, instrumentos y normativa; gestión de información, relacionada con datos, confidencialidad y sistemas; y mejora del servicio, enfocada en verificación, retroalimentación y acciones de mejora.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
