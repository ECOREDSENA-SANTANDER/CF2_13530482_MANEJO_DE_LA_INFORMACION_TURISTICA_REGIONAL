export default {
  global: {
    Name: 'Información turística regional y verificación del servicio',
    Description:
      'En cada recorrido turístico, la información adecuada puede transformar una visita en una experiencia segura, organizada y memorable. Este componente orienta al aprendiz en el manejo de información turística regional, itinerarios, documentación, normativa, instrumentos y datos del servicio para orientar al visitante y verificar la atención prestada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Información del destino turístico regional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Itinerarios, actividades y servicios complementarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Documentación, asistencia y normativa para la prestación del servicio turístico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Gestión de la información y verificación del servicio turístico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Actividad turística',
      significado:
        'Acción o experiencia que realiza el visitante durante su viaje o recorrido.',
    },
    {
      termino: 'Asistencia médica',
      significado:
        'Apoyo disponible ante emergencias, accidentes o enfermedades durante la actividad turística.',
    },
    {
      termino: 'Atractivo turístico',
      significado:
        'Recurso natural o cultural con capacidad de atraer visitantes.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Conjunto organizado de información para consulta, actualización y uso posterior.',
    },
    {
      termino: 'Ciclo vital del documento',
      significado:
        'Etapas desde la creación del documento hasta su conservación, eliminación o archivo.',
    },
    {
      termino: 'Consentimiento informado de riesgos',
      significado:
        'Documento que comunica condiciones, requisitos y posibles riesgos antes de una actividad.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'Territorio que recibe visitantes y ofrece atractivos, servicios y experiencias turísticas.',
    },
    {
      termino: 'Gestión de la información',
      significado:
        'Proceso de recolectar, organizar, proteger, analizar y comunicar datos útiles.',
    },
    {
      termino: 'Inventario turístico',
      significado:
        'Herramienta para identificar, organizar y valorar recursos y atractivos turísticos.',
    },
    {
      termino: 'Itinerario turístico',
      significado:
        'Plan que organiza lugares, horarios, actividades y recomendaciones del recorrido.',
    },
    {
      termino: 'Normativa turística',
      significado:
        'Conjunto de normas que regulan la actividad y prestación del servicio turístico.',
    },
    {
      termino: 'Recurso turístico',
      significado:
        'Elemento natural o cultural con potencial para integrarse a experiencias turísticas.',
    },
    {
      termino: 'Servicio complementario',
      significado:
        'Apoyo que mejora la experiencia, seguridad o comodidad del visitante.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'Conjunto de personas, procesos, datos y tecnologías para gestionar información.',
    },
    {
      termino: 'Verificación del servicio',
      significado:
        'Revisión del cumplimiento del servicio ofrecido según la solicitud del cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 1074 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. 26 de mayo de 2015. Diario Oficial No. 49.523.',
      link: '',
    },
    {
      referencia:
        'Ley 300 de 1996. Por la cual se expide la Ley General de Turismo y se dictan otras disposiciones. 26 de julio de 1996. Diario Oficial No. 42.845.',
      link: '',
    },
    {
      referencia:
        'Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones. 14 de julio de 2000. Diario Oficial No. 44.084.',
      link: '',
    },
    {
      referencia:
        'Ley 679 de 2001. Por medio de la cual se expide un estatuto para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores, en desarrollo del artículo 44 de la Constitución. 3 de agosto de 2001. Diario Oficial No. 44.509.',
      link: '',
    },
    {
      referencia:
        'Ley 1336 de 2009. Por medio de la cual se adiciona y robustece la Ley 679 de 2001, de lucha contra la explotación, la pornografía y el turismo sexual con niños, niñas y adolescentes. 21 de julio de 2009. Diario Oficial No. 47.417.',
      link: '',
    },
    {
      referencia:
        'Ley 1558 de 2012. Por la cual se modifica la Ley 300 de 1996 - Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones. 10 de julio de 2012. Diario Oficial No. 48.487.',
      link: '',
    },
    {
      referencia:
        'Ley Estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. 17 de octubre de 2012. Diario Oficial No. 48.587.',
      link: '',
    },
    {
      referencia:
        'Ley 2068 de 2020. Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. 31 de diciembre de 2020. Diario Oficial No. 51.544.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2020). Metodología para la elaboración del inventario de atractivos turísticos. Viceministerio de Turismo, Dirección de Calidad y Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). Normas técnicas sectoriales. MinCIT.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2019). Definiciones de turismo de la OMT. OMT.',
      link: '',
    },
    {
      referencia:
        'Zanfardini, M., Gutauskas, A., & Diez, R. (2013). Gestión de la información en turismo. Universidad Nacional del Comahue.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
