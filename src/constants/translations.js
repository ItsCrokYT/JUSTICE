export const translations = {
  es: {
    nav: {
      about: "La Firma",
      stats: "Legado",
      process: "Metodología",
      team: "El Consejo",
      feedbacks: "Veredictos",
      contact: "Alianza",
    },
    hero: {
      scroll: "Siguiente",
      discover: "Descubrir",
      loading: "CARGANDO EXPERIENCIA",
      slides: [
        {
          id: 1,
          phrase: "Donde la razón prevalece.",
          mainTitle: "AND JUSTICE FOR ALL",
          subtext: "Estrategia legal pensada con precisión quirúrgica.",
        },
        {
          id: 2,
          phrase: "El peso de la verdad.",
          subtext: "Cada argumento medido, cada detalle cuenta a tu favor.",
        },
        {
          id: 3,
          phrase: "Defensa Absoluta.",
          subtext: "Compromiso total con tu legado y tu libertad.",
        },
      ]
    },
    about: {
      intro: "Introducción",
      title: "Quiénes Somos.",
      description: "En Justice & Partners, no solo practicamos la ley; redefinimos la estrategia legal. Con más de dos décadas de experiencia combinada, fusionamos el conocimiento jurídico tradicional con análisis de datos modernos para ofrecer una defensa inquebrantable.",
      services: [
        {
          id: "01",
          title: "Derecho Corporativo",
          description: "Arquitectura legal para fusiones, adquisiciones y reestructuraciones complejas.",
        },
        {
          id: "02",
          title: "Litigio de Alto Nivel",
          description: "Defensa estratégica en tribunales y arbitrajes internacionales.",
        },
        {
          id: "03",
          title: "Propiedad Intelectual",
          description: "Blindaje de activos intangibles, patentes y derechos de marca en la era digital.",
        },
        {
          id: "04",
          title: "Gestión de Crisis",
          description: "Resolución rápida y discreta de conflictos que amenazan la reputación.",
        },
      ]
    },
    stats: {
      title: "Resultados",
      subtitle: "Tangibles.",
      audit: "Métricas de desempeño auditadas 2024-2025",
      items: [
        { label: "Tasa de Éxito", description: "En litigios corporativos.", value: 98, suffix: "%" },
        { label: "Capital Protegido", description: "Activos recuperados.", value: 500, suffix: "M+" },
        { label: "Años de Legado", description: "Definiendo precedentes.", value: 25, suffix: "+" },
        { label: "Premios Globales", description: "Excelencia reconocida.", value: 120, suffix: "" },
      ]
    },
    process: {
      kicker: "Metodología",
      title: "Arquitectura Legal.",
      steps: [
        { 
          id: "01", title: "Diagnóstico Forense", description: "Análisis profundo de la situación legal y de reputación.",
          caseStudy: { client: "Multinacional Farmacéutica", result: "Identificación temprana de brechas de cumplimiento." }
        },
        { 
          id: "02", title: "Arquitectura Estratégica", description: "Diseño de una ruta de defensa personalizada y blindaje de activos.",
          caseStudy: { client: "Grupo Financiero Alpha", result: "Estructuración de defensa preventiva ante fusión hostil." }
        },
        { 
          id: "03", title: "Ejecución Quirúrgica", description: "Despliegue de acciones legales y mediáticas de alto impacto.",
          caseStudy: { client: "Tech Giant Silicon Valley", result: "Litigio ganado en tiempo récord (3 meses)." }
        },
        { 
          id: "04", title: "Resolución & Legado", description: "Cierre del conflicto y restauración de la normalidad operativa.",
          caseStudy: { client: "Familia Empresaria Forbes", result: "Acuerdo confidencial y protección patrimonial total." }
        },
      ],
      caseLabel: "Caso de Estudio",
    },
    team: {
      kicker: "Estructura",
      title: "El Consejo.",
      btn: "Ver organigrama completo",
      modal: { bio: "Biografía", achievements: "Hitos & Logros" },
      members: [
        {
          name: "Dr. Alejandro Vance",
          role: "Socio Fundador",
          specialty: "Litigio Corporativo",
          bio: "Con más de 25 años de trayectoria, el Dr. Vance ha redefinido el litigio corporativo en Latinoamérica. Su enfoque combina una agresividad estratégica en tribunales con una diplomacia impecable en mesas de negociación.",
          achievements: ["Recuperación de activos por $500M+ en caso 'Alpha'.", "Nombrado 'Abogado del Año' por Legal 500 (2023).", "Autor de 'La Nueva Era del Litigio Comercial'."]
        },
        {
          name: "Elena R. Sterling",
          role: "Socia Senior",
          specialty: "Derecho Penal Económico",
          bio: "Especialista en delitos de cuello blanco y cumplimiento normativo. Elena Sterling es conocida por su capacidad para desmantelar acusaciones complejas con una precisión quirúrgica.",
          achievements: ["Defensa exitosa en 3 casos federales de alto perfil.", "Asesora de la Comisión de Reformas Penales.", "Estrategia de defensa con 0% de condenas en 5 años."]
        },
        {
          name: "Marcus Thorne",
          role: "Jefe de Estrategia",
          specialty: "Gestión de Crisis & PR",
          bio: "Cuando la reputación está en juego, Marcus toma el control. Su experiencia fusiona el marco legal con la gestión de medios, asegurando que la narrativa pública juegue a favor del cliente.",
          achievements: ["Contención de crisis mediática para Fortune 100.", "Estratega principal en fusiones hostiles.", "Experto en Derecho al Olvido Digital."]
        },
        {
          name: "Sarah J. Connor",
          role: "Consultora",
          specialty: "Propiedad Intelectual",
          bio: "Protegiendo la innovación en la era digital. Sarah lidera la división tecnológica, asegurando patentes y derechos de autor en un mercado global cada vez más volátil.",
          achievements: ["Registro de 200+ patentes internacionales.", "Litigio ganado contra Big Tech en Silicon Valley.", "Mentora en TechLaw Summit Global."]
        }
      ]
    },
    feedbacks: {
      kicker: "Veredictos",
      items: [
        { text: "En un momento crítico, su estrategia no solo contuvo el daño, sino que revirtió la situación a nuestro favor.", name: "Roberto S. Mendoza", role: "Director General", company: "Grupo Alpha" },
        { text: "Precisión quirúrgica en propiedad intelectual. Protegieron nuestro activo más valioso con una eficacia absoluta.", name: "Elena V. Kogan", role: "CEO", company: "BioTech Innovations" },
        { text: "Operaron con una discreción que superó cualquier expectativa. Mi confianza en ellos es total e inquebrantable.", name: "Confidencial", role: "Cliente Privado", company: "Sector Financiero" },
      ]
    },
    contact: {
      kicker: "Iniciar Protocolo",
      title: "Defendamos",
      subtitle: "Tu Legado.",
      btn: "Agendar Consulta",
      hq: "Sede",
      address: "Torre Virreyes, Piso 24",
      city: "Ciudad de México",
      contactinfo: "Contacto",
      legal: "Aviso Legal"
    },
    footer: {
      slogan: "Redefiniendo el estándar legal con precisión estratégica y compromiso absoluto.",
      explore: "Explorar",
      legal: "Legal",
      connect: "Conectar",
      privacy: "Aviso de Privacidad",
      terms: "Términos de Servicio",
      confidentiality: "Confidencialidad",
      rights: "Todos los derechos reservados.",
      designed: "Diseñado para la excelencia."
    }
  },
  en: {
    nav: {
      about: "The Firm",
      stats: "Legacy",
      process: "Methodology",
      team: "The Board",
      feedbacks: "Verdicts",
      contact: "Alliance",
    },
    hero: {
      scroll: "Next",
      discover: "Discover",
      loading: "LOADING EXPERIENCE",
      slides: [
        {
          id: 1,
          phrase: "Where reason prevails.",
          mainTitle: "AND JUSTICE FOR ALL",
          subtext: "Legal strategy thought out with surgical precision.",
        },
        {
          id: 2,
          phrase: "The weight of truth.",
          subtext: "Every argument measured, every detail counts in your favor.",
        },
        {
          id: 3,
          phrase: "Absolute Defense.",
          subtext: "Total commitment to your legacy and freedom.",
        },
      ]
    },
    about: {
      intro: "Introduction",
      title: "Who We Are.",
      description: "At Justice & Partners, we don't just practice law; we redefine legal strategy. With over two decades of combined experience, we merge traditional legal knowledge with modern data analysis to offer unwavering defense.",
      services: [
        {
          id: "01",
          title: "Corporate Law",
          description: "Legal architecture for complex mergers, acquisitions, and restructurings.",
        },
        {
          id: "02",
          title: "High-Stakes Litigation",
          description: "Strategic defense in international courts and arbitrations.",
        },
        {
          id: "03",
          title: "Intellectual Property",
          description: "Shielding intangible assets, patents, and trademark rights in the digital age.",
        },
        {
          id: "04",
          title: "Crisis Management",
          description: "Rapid and discreet resolution of conflicts threatening reputation.",
        },
      ]
    },
    stats: {
      title: "Results",
      subtitle: "Tangible.",
      audit: "Audited performance metrics 2024-2025",
      items: [
        { label: "Success Rate", description: "In corporate litigation.", value: 98, suffix: "%" },
        { label: "Protected Capital", description: "Recovered assets.", value: 500, suffix: "M+" },
        { label: "Years of Legacy", description: "Defining precedents.", value: 25, suffix: "+" },
        { label: "Global Awards", description: "Recognized excellence.", value: 120, suffix: "" },
      ]
    },
    process: {
      kicker: "Methodology",
      title: "Legal Architecture.",
      steps: [
        { 
          id: "01", title: "Forensic Diagnosis", description: "Deep analysis of the legal and reputational situation.",
          caseStudy: { client: "Pharmaceutical Multinational", result: "Early identification of compliance gaps." }
        },
        { 
          id: "02", title: "Strategic Architecture", description: "Design of a personalized defense route and asset shielding.",
          caseStudy: { client: "Alpha Financial Group", result: "Structuring preventive defense against hostile takeover." }
        },
        { 
          id: "03", title: "Surgical Execution", description: "Deployment of high-impact legal and media actions.",
          caseStudy: { client: "Tech Giant Silicon Valley", result: "Litigation won in record time (3 months)." }
        },
        { 
          id: "04", title: "Resolution & Legacy", description: "Closure of the conflict and restoration of operational normalcy.",
          caseStudy: { client: "Forbes Business Family", result: "Confidential agreement and total asset protection." }
        },
      ],
      caseLabel: "Case Study",
    },
    team: {
      kicker: "Structure",
      title: "The Board.",
      btn: "View full chart",
      modal: { bio: "Biography", achievements: "Milestones & Achievements" },
      members: [
        {
          name: "Dr. Alejandro Vance",
          role: "Founding Partner",
          specialty: "Corporate Litigation",
          bio: "With over 25 years of experience, Dr. Vance has redefined corporate litigation in Latin America. His approach combines strategic aggressiveness in courts with impeccable diplomacy in negotiation tables.",
          achievements: ["Asset recovery of $500M+ in 'Alpha' case.", "Named 'Lawyer of the Year' by Legal 500 (2023).", "Author of 'The New Era of Commercial Litigation'."]
        },
        {
          name: "Elena R. Sterling",
          role: "Senior Partner",
          specialty: "Economic Criminal Law",
          bio: "Specialist in white-collar crimes and regulatory compliance. Elena Sterling is known for her ability to dismantle complex accusations with surgical precision.",
          achievements: ["Successful defense in 3 high-profile federal cases.", "Advisor to the Criminal Reform Commission.", "Defense strategy with 0% conviction rate in 5 years."]
        },
        {
          name: "Marcus Thorne",
          role: "Head of Strategy",
          specialty: "Crisis Management & PR",
          bio: "When reputation is at stake, Marcus takes control. His experience merges the legal framework with media management, ensuring the public narrative plays in the client's favor.",
          achievements: ["Media crisis containment for Fortune 100.", "Lead strategist in hostile takeovers.", "Expert in Digital Right to be Forgotten."]
        },
        {
          name: "Sarah J. Connor",
          role: "Consultant",
          specialty: "Intellectual Property",
          bio: "Protecting innovation in the digital age. Sarah leads the tech division, securing patents and copyrights in an increasingly volatile global market.",
          achievements: ["Registration of 200+ international patents.", "Litigation won against Big Tech in Silicon Valley.", "Mentor at Global TechLaw Summit."]
        }
      ]
    },
    feedbacks: {
      kicker: "Verdicts",
      items: [
        { text: "At a critical moment, their strategy not only contained the damage but reversed the situation in our favor.", name: "Roberto S. Mendoza", role: "General Director", company: "Alpha Group" },
        { text: "Surgical precision in intellectual property. They protected our most valuable asset with absolute efficiency.", name: "Elena V. Kogan", role: "CEO", company: "BioTech Innovations" },
        { text: "They operated with discretion that exceeded any expectation. My trust in them is total and unwavering.", name: "Confidential", role: "Private Client", company: "Financial Sector" },
      ]
    },
    contact: {
      kicker: "Initiate Protocol",
      title: "Defend",
      subtitle: "Your Legacy.",
      btn: "Schedule Consultation",
      hq: "HQ",
      address: "Virreyes Tower, 24th Floor",
      city: "Mexico City",
      contactinfo: "Contact",
      legal: "Legal Notice",
      formTitle: "Consultation Request",
  formName: "Full Name",
  formEmail: "Corporate Email",
  formMessage: "Case Details",
  formBtn: "Submit Request",
  formSubmitting: "Processing...",
  formSuccessTitle: "Request Confirmed",
  formSuccess: "Request received. The board will review your case.",
  formNewRequest: "Send New Request"
    },
    footer: {
      slogan: "Redefining the legal standard with strategic precision and absolute commitment.",
      explore: "Explore",
      legal: "Legal",
      connect: "Connect",
      privacy: "Privacy Notice",
      terms: "Terms of Service",
      confidentiality: "Confidentiality",
      rights: "All rights reserved.",
      designed: "Designed for excellence."
    }
  },
  tr: {
    nav: {
      about: "Firma",
      stats: "Miras",
      process: "Metodoloji",
      team: "Konsey",
      feedbacks: "Kararlar",
      contact: "İttifak",
    },
    hero: {
      scroll: "İleri",
      discover: "Keşfet",
      loading: "DENEYİM YÜKLENİYOR",
      slides: [
        {
          id: 1,
          phrase: "Aklın hüküm sürdüğü yer.",
          mainTitle: "VE HERKES İÇİN ADALET",
          subtext: "Cerrahi hassasiyetle düşünülmüş yasal strateji.",
        },
        {
          id: 2,
          phrase: "Gerçeğin ağırlığı.",
          subtext: "Her argüman ölçüldü, her detay lehinize.",
        },
        {
          id: 3,
          phrase: "Mutlak Savunma.",
          subtext: "Mirasınıza ve özgürlüğünüze tam bağlılık.",
        },
      ]
    },
    about: {
      intro: "Giriş",
      title: "Biz Kimiz.",
      description: "Justice & Partners'da sadece hukuk uygulamıyoruz; yasal stratejiyi yeniden tanımlıyoruz. Yirmi yılı aşkın birleşik deneyimle, sarsılmaz bir savunma sunmak için geleneksel hukuk bilgisini modern veri analiziyle birleştiriyoruz.",
      services: [
        {
          id: "01",
          title: "Şirketler Hukuku",
          description: "Karmaşık birleşmeler, satın almalar ve yeniden yapılandırmalar için yasal mimari.",
        },
        {
          id: "02",
          title: "Yüksek Riskli Davalar",
          description: "Uluslararası mahkemelerde ve tahkimlerde stratejik savunma.",
        },
        {
          id: "03",
          title: "Fikri Mülkiyet",
          description: "Dijital çağda maddi olmayan varlıkların, patentlerin ve marka haklarının korunması.",
        },
        {
          id: "04",
          title: "Kriz Yönetimi",
          description: "İtibarı tehdit eden çatışmaların hızlı ve gizli çözümü.",
        },
      ]
    },
    stats: {
      title: "Sonuçlar",
      subtitle: "Somut.",
      audit: "Denetlenmiş performans ölçümleri 2024-2025",
      items: [
        { label: "Başarı Oranı", description: "Kurumsal davalarda.", value: 98, suffix: "%" },
        { label: "Korunan Sermaye", description: "Kurtarılan varlıklar.", value: 500, suffix: "M+" },
        { label: "Miras Yılları", description: "Emsalleri belirlemek.", value: 25, suffix: "+" },
        { label: "Küresel Ödüller", description: "Tanınmış mükemmellik.", value: 120, suffix: "" },
      ]
    },
    process: {
      kicker: "Metodoloji",
      title: "Yasal Mimari.",
      steps: [
        { 
          id: "01", title: "Adli Teşhis", description: "Hukuki ve itibar durumunun derinlemesine analizi.",
          caseStudy: { client: "Çok Uluslu İlaç Firması", result: "Uyum açıklarının erken tespiti." }
        },
        { 
          id: "02", title: "Stratejik Mimari", description: "Kişiselleştirilmiş bir savunma rotasının ve varlık korumasının tasarımı.",
          caseStudy: { client: "Alpha Finans Grubu", result: "Düşmanca devralmaya karşı önleyici savunma yapılandırması." }
        },
        { 
          id: "03", title: "Cerrahi İcra", description: "Yüksek etkili yasal ve medya eylemlerinin konuşlandırılması.",
          caseStudy: { client: "Silikon Vadisi Teknoloji Devi", result: "Rekor sürede (3 ay) kazanılan dava." }
        },
        { 
          id: "04", title: "Çözüm ve Miras", description: "Çatışmanın kapatılması ve operasyonel normalliğin geri yüklenmesi.",
          caseStudy: { client: "Forbes İş Ailesi", result: "Gizli anlaşma ve tam varlık koruması." }
        },
      ],
      caseLabel: "Vaka Çalışması",
    },
    team: {
      kicker: "Yapı",
      title: "Konsey.",
      btn: "Tam şemayı görüntüle",
      modal: { bio: "Biyografi", achievements: "Kilometre Taşları & Başarılar" },
      members: [
        {
          name: "Dr. Alejandro Vance",
          role: "Kurucu Ortak",
          specialty: "Kurumsal Dava",
          bio: "25 yılı aşkın deneyimiyle Dr. Vance, Latin Amerika'da kurumsal davaları yeniden tanımladı. Yaklaşımı, mahkemelerdeki stratejik saldırganlığı müzakere masalarında kusursuz bir diplomasiyle birleştiriyor.",
          achievements: ["'Alpha' davasında 500M$+ varlık kurtarımı.", "Legal 500 tarafından 'Yılın Avukatı' seçildi (2023).", "'Ticari Davaların Yeni Çağı' kitabının yazarı."]
        },
        {
          name: "Elena R. Sterling",
          role: "Kıdemli Ortak",
          specialty: "Ekonomik Ceza Hukuku",
          bio: "Beyaz yakalı suçlar ve mevzuata uygunluk konusunda uzman. Elena Sterling, karmaşık suçlamaları cerrahi bir hassasiyetle çürütme yeteneğiyle tanınır.",
          achievements: ["3 yüksek profilli federal davada başarılı savunma.", "Ceza Reformları Komisyonu Danışmanı.", "5 yılda %0 mahkumiyet oranıyla savunma stratejisi."]
        },
        {
          name: "Marcus Thorne",
          role: "Strateji Başkanı",
          specialty: "Kriz Yönetimi & PR",
          bio: "İtibar söz konusu olduğunda kontrol Marcus'ta. Deneyimi, yasal çerçeveyi medya yönetimiyle birleştirerek kamuoyu algısının müvekkilin lehine olmasını sağlar.",
          achievements: ["Fortune 100 için medya krizinin kontrol altına alınması.", "Düşmanca devralmalarda baş stratejist.", "Dijital Unutulma Hakkı Uzmanı."]
        },
        {
          name: "Sarah J. Connor",
          role: "Danışman",
          specialty: "Fikri Mülkiyet",
          bio: "Dijital çağda inovasyonu korumak. Sarah, giderek daha değişken hale gelen küresel pazarda patentleri ve telif haklarını güvence altına alarak teknoloji bölümüne liderlik ediyor.",
          achievements: ["200+ uluslararası patent tescili.", "Silikon Vadisi'nde Büyük Teknoloji'ye karşı kazanılan dava.", "Küresel TechLaw Zirvesi'nde Mentor."]
        }
      ]
    },
    feedbacks: {
      kicker: "Kararlar",
      items: [
        { text: "Kritik bir anda, stratejileri sadece hasarı sınırlamakla kalmadı, durumu lehimize çevirdi.", name: "Roberto S. Mendoza", role: "Genel Müdür", company: "Alpha Grubu" },
        { text: "Fikri mülkiyette cerrahi hassasiyet. En değerli varlığımızı mutlak bir verimlilikle korudular.", name: "Elena V. Kogan", role: "CEO", company: "BioTech Innovations" },
        { text: "Her türlü beklentiyi aşan bir gizlilikle çalıştılar. Onlara olan güvenim tam ve sarsılmaz.", name: "Gizli", role: "Özel Müşteri", company: "Finans Sektörü" },
      ]
    },
    contact: {
      kicker: "Protokolü Başlat",
      title: "Savun",
      subtitle: "Mirasını.",
      btn: "Konsültasyon Planla",
      hq: "Merkez",
      address: "Torre Virreyes, Kat 24",
      city: "Mexico City",
      contactinfo: "İletişim",
      legal: "Yasal Uyarı",
      formTitle: "Danışma Talebi",
  formName: "Ad Soyad",
  formEmail: "Kurumsal E-posta",
  formMessage: "Vaka Detayları",
  formBtn: "Talebi Gönder",
  formSubmitting: "İşleniyor...",
  formSuccessTitle: "Talep Onaylandı",
  formSuccess: "Talep alındı. Kurul vakanızı inceleyecek.",
  formNewRequest: "Yeni Talep Gönder"
}
    },
    footer: {
      slogan: "Yasal standardı stratejik hassasiyet ve mutlak bağlılıkla yeniden tanımlıyoruz.",
      exploreTitle: "Keşfet",
      exploreLinks: ["Firma", "Miras", "Metodoloji", "Konsey", "Kararlar"],
      legalTitle: "Yasal",
      legalLinks: ["Gizlilik Bildirimi", "Hizmet Şartları", "Gizlilik"],
      connectTitle: "Bağlan",
      rights: "Tüm hakları saklıdır.",
      designed: "Mükemmellik için tasarlandı."
    }
  }
