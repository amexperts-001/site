/* ════════════════════════════════════════════════════════════
   AMEXPERTS & PARTNERS — i18n.js  (fichier centralisé unique)
   Dictionnaire FR / EN complet pour toutes les pages.
   Auto-traduction Firestore via Claude API pour les contenus
   dynamiques (articles, réalisations, équipe, partenaires).
   ════════════════════════════════════════════════════════════ */
(function(global){
'use strict';

/* ── Dictionnaire statique ── */
var D = {
fr: {
  /* Navigation */
  nav_home:'Accueil',
  nav_about:'\u00c0 propos',
  nav_services:'Nos Services <i class="fas fa-chevron-down" style="font-size:.7em"></i>',
  nav_realisations:'R\u00e9alisations',
  nav_real:'R\u00e9alisations',
  nav_blog:'Actualit\u00e9s',
  nav_options:'Options <i class="fas fa-chevron-down" style="font-size:.7em"></i>',
  nav_cta:'Consultation',
  nav_s1:'R\u00e9daction de projets',
  nav_s2:'Mobilisation de ressources',
  nav_s3:'Formations professionnelles',
  nav_s4:'Structuration financi\u00e8re',
  nav_s5:'Expertise immobili\u00e8re',
  nav_s6:'Expertise industrielle',
  nav_s7:'Expertise en assurance',
  nav_s8:'Ing\u00e9nierie juridique',
  nav_drop1:'Projets en financement',
  nav_drop2:'Nos Partenaires',
  nav_drop3:'Brochure Corporate',

  /* Hero (index) */
  hero_badge:'Cabinet de Conseil &amp; Ing\u00e9nierie \u2014 Lom\u00e9, Togo',
  hero_h1:'L\'expertise <span>technique</span> et <span>financi\u00e8re</span><br>au service de vos projets',
  hero_desc:'AMEXPERTS &amp; PARTNERS accompagne entreprises, institutions et investisseurs dans la structuration, le financement et la r\u00e9alisation de leurs projets en Afrique et \u00e0 l\'international.',
  hero_cta1:'Demander une consultation',
  hero_cta2:'Nos services',

  /* Stats */
  stat1:'Projets structur\u00e9s',
  stat2:'Pays d\'intervention',
  stat3:'Financements mobilis\u00e9s',
  stat4:'D\'exp\u00e9rience',

  /* Partenaires strip */
  partners_title:'Nos partenaires &amp; certifications',
  partners_sub:'Banques \u00b7 Fonds d\'investissement \u00b7 Institutions financi\u00e8res \u00b7 ONG',

  /* Services section */
  svc_label:'Ce que nous faisons',
  svc_title:'Nos domaines d\'expertise',
  svc_sub:'Une offre compl\u00e8te de conseil et d\'ing\u00e9nierie de projets pour vos ambitions en Afrique et \u00e0 l\'international.',
  svc_btn:'Voir tous les services',
  svc_contact:'Demander une consultation',
  learn_more:'En savoir plus \u2192',
  s1_title:'R\u00e9daction de projets',
  s1_desc:'\u00c9tudes de faisabilit\u00e9, business plans, dossiers bancaires et bailleurs pour maximiser vos chances de financement.',
  s2_title:'Mobilisation de ressources',
  s2_desc:'Recherche de financement, structuration investisseurs, lev\u00e9e de fonds et instruments financiers (BG, SBLC, MT760).',
  s3_title:'Structuration financi\u00e8re',
  s3_desc:'Mod\u00e9lisation financi\u00e8re avanc\u00e9e, optimisation fiscale, structuration dette/equity et strat\u00e9gies de lev\u00e9e de fonds.',
  s4_title:'Expertise immobili\u00e8re',
  s4_desc:'\u00c9valuation d\'actifs, audit immobilier et due diligence pour s\u00e9curiser vos investissements immobiliers.',
  s5_title:'Ing\u00e9nierie juridique',
  s5_desc:'Structuration juridique de projets, montage de financement, due diligence et s\u00e9curisation contractuelle.',
  s6_title:'Formations professionnelles',
  s6_desc:'Finance structur\u00e9e, montage de projets, gestion des risques et assurance pour renforcer vos \u00e9quipes.',

  /* Pourquoi nous */
  why_label:'Pourquoi nous choisir',
  why_title:'Un cabinet \u00e0 votre mesure',
  why_intro:'AMEXPERTS &amp; PARTNERS allie expertise technique, rigueur financi\u00e8re et connaissance du terrain africain pour livrer des solutions sur-mesure.',
  why1_title:'Ancrage africain, vision internationale',
  why1_desc:'Bas\u00e9 \u00e0 Lom\u00e9, nous intervenons dans toute l\'Afrique de l\'Ouest, Centrale et \u00e0 l\'international avec une connaissance fine des r\u00e9alit\u00e9s locales.',
  why2_title:'R\u00e9seau d\'experts pluridisciplinaires',
  why2_desc:'Juristes, financiers, ing\u00e9nieurs et experts sectoriels collaborent pour vous offrir un conseil int\u00e9gr\u00e9 et coh\u00e9rent.',
  why3_title:'Accompagnement de bout en bout',
  why3_desc:'De la conception \u00e0 la mise en \u0153uvre, nous restons \u00e0 vos c\u00f4t\u00e9s \u00e0 chaque \u00e9tape du projet.',
  why4_title:'\u00c9thique &amp; confidentialit\u00e9',
  why4_desc:'Nous appliquons les plus hauts standards d\u00e9ontologiques. Chaque mission est trait\u00e9e avec discr\u00e9tion et int\u00e9grit\u00e9.',
  why_btn:'D\u00e9couvrir le cabinet',
  why_quote:'\u00ab Notre mission est de transformer vos ambitions en projets bankables, en mobilisant les meilleures ressources humaines, techniques et financi\u00e8res. \u00bb',
  why_dg:'Direction G\u00e9n\u00e9rale',
  why_years:'Ann\u00e9es',
  why_countries:'Pays',

  /* R\u00e9f\u00e9rences */
  ref_label:'Nos r\u00e9f\u00e9rences',
  ref_title:'R\u00e9alisations r\u00e9centes',
  ref_btn:'Voir toutes',
  ref_empty:'Aucune r\u00e9alisation publi\u00e9e pour le moment.',

  /* CTA band */
  cta_title:'Votre projet m\u00e9rite les meilleures expertises',
  cta_desc:'Contactez-nous pour une premi\u00e8re consultation gratuite et confidentielle.',
  cta_btn:'Prendre rendez-vous',

  /* Blog section */
  blog_label:'Actualit\u00e9s &amp; Blog',
  blog_title:'Nos derni\u00e8res analyses',
  blog_btn:'Tout voir',
  blog_read_more:'Lire la suite \u2192',
  blog_empty:'Aucun article publi\u00e9 pour le moment.',
  blog_ph_h1:'Actualit\u00e9s &amp; Analyses',
  blog_ph_p:'Nos derni\u00e8res analyses, \u00e9tudes de march\u00e9 et actualit\u00e9s du secteur.',
  blog_cat:'Cat\u00e9gories',
  blog_nl_title:'Newsletter',
  blog_follow:'Nous suivre',

  /* Contact */
  contact_label:'Nous contacter',
  contact_title:'Demandez une consultation',
  contact_sub:'Nos experts sont disponibles pour analyser votre projet et vous proposer les meilleures solutions.',
  ci_addr_h:'Adresse',
  ci_phone_h:'T\u00e9l\u00e9phone',
  ci_zone_h:'Zone d\'intervention',
  ci_zone:'Afrique de l\'Ouest, Centrale &amp; International',
  ci_wa:'Discuter sur WhatsApp',

  /* Formulaire */
  f_nom_label:'Nom complet *',
  f_nom_ph:'Votre nom',
  f_email_label:'Email *',
  f_tel_label:'T\u00e9l\u00e9phone',
  f_tel_ph:'+228 xx xx xx xx',
  f_org_label:'Organisation',
  f_org_ph:'Soci\u00e9t\u00e9 / Institution',
  f_svc_label:'Service souhait\u00e9',
  f_svc_default:'\u2014 S\u00e9lectionner un service \u2014',
  f_svc1:'R\u00e9daction de projets',
  f_svc2:'Mobilisation de ressources',
  f_svc3:'Structuration financi\u00e8re',
  f_svc4:'Expertise immobili\u00e8re',
  f_svc5:'Expertise industrielle',
  f_svc6:'Expertise en assurance',
  f_svc7:'Ing\u00e9nierie juridique et financi\u00e8re',
  f_svc8:'Formations professionnelles',
  f_svc9:'Autre',
  f_msg_label:'Votre message *',
  f_msg_ph:'D\u00e9crivez votre projet ou besoin...',
  f_send:'Envoyer',
  f_sending:'Envoi\u2026',
  f_sent:'Envoy\u00e9 !',
  f_error:'Erreur d\'envoi. Contactez-nous directement.',

  /* Footer */
  foot_tagline:'Cabinet de conseil et d\'ing\u00e9nierie de projets. Expertises industrielles, techniques, de n\u00e9goces et de repr\u00e9sentation.',
  foot_city:'Lom\u00e9, Togo \u00b7 Afrique de l\'Ouest &amp; International',
  foot_nl:'Newsletter \u2014 Analyses &amp; Opportunit\u00e9s',
  foot_nl_ph:'Votre email',
  foot_h_svc:'Services',
  foot_h_nav:'Navigation',
  foot_h_contact:'Contact',
  foot_s1:'R\u00e9daction de projets',
  foot_s2:'Mobilisation de ressources',
  foot_s3:'Structuration financi\u00e8re',
  foot_s4:'Expertise immobili\u00e8re',
  foot_s5:'Ing\u00e9nierie juridique',
  foot_s6:'Formations',
  foot_n_blog:'Actualit\u00e9s &amp; Blog',
  foot_n_part:'Nos Partenaires',
  foot_n_proj:'Projets en financement',
  foot_n_broch:'Brochure',
  foot_copy:'\u00a9 2026 AMEXPERTS AND PARTNERS \u2014 Tous droits r\u00e9serv\u00e9s | Ref. 71/62029/DG/AM&amp;P',

  /* \u00c0 propos */
  about_bc:'\u00c0 propos',
  about_ph_h1:'\u00c0 propos du cabinet',
  about_ph_p:'Un cabinet pluridisciplinaire fond\u00e9 sur l\'excellence, l\'int\u00e9grit\u00e9 et la vision internationale.',
  about_hist_label:'Notre histoire',
  about_hist_h2:'N\u00e9s de l\'Afrique, tourn\u00e9s vers le monde',
  about_hist_p1:'AMEXPERTS AND PARTNERS est un cabinet de conseil et d\'ing\u00e9nierie de projets bas\u00e9 \u00e0 Lom\u00e9, en R\u00e9publique du Togo. Fond\u00e9 par des experts chevronnés issus de la finance internationale, de l\'ing\u00e9nierie et du droit des affaires, le cabinet s\'est impos\u00e9 comme un acteur de r\u00e9f\u00e9rence dans l\'accompagnement de projets d\'envergure en Afrique de l\'Ouest, Centrale et \u00e0 l\'international.',
  about_hist_p2:'Notre approche combine rigueur analytique, cr\u00e9ativit\u00e9 strat\u00e9gique et ma\u00eetrise des r\u00e9alit\u00e9s locales pour offrir \u00e0 nos clients des solutions de financement et de structuration \u00e0 la hauteur de leurs ambitions.',
  about_stat1:'Ann\u00e9es d\'exp\u00e9rience',
  about_stat2:'Projets r\u00e9alis\u00e9s',
  about_stat3:'Pays d\'intervention',
  about_vision_h3:'Notre vision',
  about_vision_q:'\u00ab Devenir le cabinet de r\u00e9f\u00e9rence en ing\u00e9nierie de projets et en structuration financi\u00e8re pour le d\u00e9veloppement \u00e9conomique de l\'Afrique, en mobilisant les meilleures expertises humaines, techniques et financi\u00e8res. \u00bb',
  about_mission_h3:'Notre mission',
  about_mission_p:'Accompagner les entreprises, institutions et investisseurs dans la conception, la structuration et la r\u00e9alisation de leurs projets, en offrant un conseil expert, \u00e9thique et orient\u00e9 r\u00e9sultats.',
  about_val_label:'Ce qui nous guide',
  about_val_h2:'Nos valeurs fondamentales',
  about_v1_h:'Excellence',
  about_v1_p:'Nous visons la plus haute qualit\u00e9 dans chaque mission, en mobilisant les meilleurs experts et en appliquant les standards internationaux.',
  about_v2_h:'Int\u00e9grit\u00e9',
  about_v2_p:'L\'éthique professionnelle est au c\u0153ur de toutes nos interventions. Nous traitons chaque dossier avec transparence et honn\u00eatet\u00e9.',
  about_v3_h:'Innovation',
  about_v3_p:'Nous d\u00e9veloppons des solutions cr\u00e9atives et adapt\u00e9es aux d\u00e9fis sp\u00e9cifiques de chaque client, en anticipant les \u00e9volutions du march\u00e9.',
  about_v4_h:'Partenariat',
  about_v4_p:'Nous construisons des relations durables avec nos clients, fond\u00e9es sur la confiance, le respect mutuel et la cr\u00e9ation de valeur partag\u00e9e.',
  about_v5_h:'Impact africain',
  about_v5_p:'Nous contribuons activement au d\u00e9veloppement \u00e9conomique de l\'Afrique en catalysant des investissements structurants et cr\u00e9ateurs d\'emplois.',
  about_v6_h:'Confidentialit\u00e9',
  about_v6_p:'Toutes nos missions sont trait\u00e9es avec la plus stricte confidentialit\u00e9. La protection de vos informations strat\u00e9giques est notre priorit\u00e9.',
  about_team_label:'Notre \u00e9quipe',
  about_team_h2:'Des experts \u00e0 votre service',
  about_team_p:'Une \u00e9quipe pluridisciplinaire d\'experts en finance, droit, ing\u00e9nierie et strat\u00e9gie d\'entreprise au service de vos projets.',
  about_team1_h:'Direction G\u00e9n\u00e9rale',
  about_team1_role:'Directeur G\u00e9n\u00e9ral',
  about_team1_p:'Expert en ing\u00e9nierie financi\u00e8re et structuration de projets d\'investissement. Plus de 15 ans d\'exp\u00e9rience en Afrique et en Europe.',
  about_team2_h:'D\u00e9partement Juridique',
  about_team2_role:'Responsable Juridique &amp; Conformit\u00e9',
  about_team2_p:'Sp\u00e9cialiste du droit des affaires africain, des partenariats public-priv\u00e9 et de la structuration contractuelle d\'op\u00e9rations complexes.',
  about_team3_h:'D\u00e9partement Finance',
  about_team3_role:'Analyste Financier Senior',
  about_team3_p:'Expert en mod\u00e9lisation financi\u00e8re, analyse des risques et structuration de la dette. Issu des grandes \u00e9coles de commerce internationales.',
  about_team4_h:'D\u00e9partement Technique',
  about_team4_role:'Ing\u00e9nieur Expert',
  about_team4_p:'Sp\u00e9cialiste de l\'expertise industrielle et immobili\u00e8re. Certifi\u00e9 en \u00e9valuation d\'actifs et audit technique.',
  about_eth_label:'Notre engagement',
  about_eth_h2:'\u00c9thique &amp; Responsabilit\u00e9',
  about_eth_p:'AMEXPERTS &amp; PARTNERS s\'engage \u00e0 op\u00e9rer dans le strict respect des principes \u00e9thiques et des normes internationales en mati\u00e8re d\'anti-corruption, de protection des donn\u00e9es et de responsabilit\u00e9 sociale.',
  about_eth1:'Conformit\u00e9 r\u00e9glementaire',
  about_eth2:'Protection des donn\u00e9es',
  about_eth3:'Conflits d\'int\u00e9r\u00eats',
  about_eth4:'Responsabilit\u00e9 sociale',
  about_eth_btn:'Prendre contact',

  /* R\u00e9alisations */
  real_bc:'R\u00e9alisations',
  real_ph_h1:'Nos R\u00e9alisations',
  real_ph_p:'Un portefeuille de projets concrets illustrant notre expertise et notre engagement pour le d\u00e9veloppement de l\'Afrique.',
  real_stat1:'Projets r\u00e9alis\u00e9s',
  real_stat2:'Pays couverts',
  real_stat3:'Financements mobilis\u00e9s',
  real_stat4:'Secteurs couverts',
  real_portfolio_label:'Portfolio de projets',
  real_portfolio_h2:'\u00c9tudes de cas',
  real_f_all:'Tous',
  real_f_energy:'\u00c9nergie',
  real_f_immo:'Immobilier',
  real_f_agro:'Agro-industrie',
  real_f_finance:'Finance',
  real_f_infra:'Infrastructure',
  real_temoign_label:'Ce que disent nos clients',
  real_temoign_h2:'T\u00e9moignages',
  real_cta_h2:'Votre projet sera notre prochaine r\u00e9ussite',
  real_empty:'Aucune r\u00e9alisation publi\u00e9e pour le moment.',

  /* Services page */
  svc_bc:'Nos Services',
  svc_ph_h1:'Nos Services',
  svc_s01:'Service 01',
  svc_h01:'R\u00e9daction de projets',
  svc_vis01:'Un dossier qui convainc',
  svc_vis02:'Des financements sur mesure',
  svc_s02:'Service 02',
  svc_h02:'Mobilisation de ressources',
  svc_s03:'Service 03',
  svc_h03:'Formations professionnelles',
  svc_vis03:'Montez en comp\u00e9tences',
  svc_vis04:'Optimisation financi\u00e8re',
  svc_s04:'Service 04',
  svc_h04:'Structuration financi\u00e8re',
  svc_s05:'Service 05',
  svc_h05:'Expertise immobili\u00e8re',
  svc_vis05:'Valorisation certifi\u00e9e',
  svc_vis06:'Audit technique industriel',
  svc_s06:'Service 06',
  svc_h06:'Expertise industrielle',
  svc_s07:'Service 07',
  svc_h07:'Expertise en assurance',
  svc_vis07:'Prot\u00e9gez vos actifs',
  svc_vis08:'S\u00e9curit\u00e9 juridique totale',
  svc_s08:'Service 08',
  svc_h08:'Ing\u00e9nierie juridique',
  svc_extra_label:'Offres compl\u00e9mentaires',
  svc_extra_h2:'Services additionnels',
  svc_cta_h2:'Pr\u00eat \u00e0 structurer votre projet\u00a0?',

  /* Partenaires page */
  part_bc:'Nos Partenaires',
  part_ph_h1:'Partenariats Strat\u00e9giques',
  part_intro_label:'Notre approche partenariale',
  part_intro_h2:'Des alliances strat\u00e9giques au service du d\u00e9veloppement',
  part_types_label:'Formes de collaboration',
  part_types_h2:'Types de partenariats propos\u00e9s',
  part_t1:'Joint-Venture',
  part_t2:'Partenariat Public-Priv\u00e9 (PPP)',
  part_t3:'Memorandum of Understanding',
  part_t4:'Accords techniques',
  part_t5:'Accords financiers',
  part_t6:'R\u00e9seaux d\'experts',
  part_eco_label:'Notre \u00e9cosyst\u00e8me',
  part_p1:'Institutions Bancaires',
  part_p2:'Fonds d\'Investissement',
  part_p3:'Cabinets Juridiques',
  part_p4:'Bureaux d\'Ing\u00e9nierie',
  part_p6:'Compagnies d\'Assurance',
  part_join_label:'Nous rejoindre',
  part_join_h2:'Proposer un partenariat',
  part_empty:'Aucun partenaire publi\u00e9 pour le moment.',

  /* Projets en financement */
  proj_bc:'Projets en financement',
  proj_ph_h1:'Projets en Recherche de Financement',
  proj_submit_label:'Vous avez un projet\u00a0?',
  proj_submit_h2:'Soumettre un projet \u00e0 financer',
  proj_empty:'Aucun projet publi\u00e9 pour le moment.',

  /* Brochure */
  broch_bc:'Brochure Corporate',
  broch_ph_h1:'Brochure Corporate',
  broch_dl_label:'T\u00e9l\u00e9chargements',
  broch_contact_label:'Contact direct',
  broch_empty:'Aucun document publi\u00e9 pour le moment.',

  /* Footer court */
  foot_tagline_short:'Cabinet de conseil et d\'ing\u00e9nierie de projets. Lom\u00e9, Togo.',

  /* Service page — descriptions & boutons */
  svc_ph_p:'Une offre int\u00e9gr\u00e9e de conseil, d\'ing\u00e9nierie financi\u00e8re et d\'expertise technique pour concrétiser vos ambitions.',
  svc_desc01:'Nous \u00e9laborons des documents strat\u00e9giques solides et convaincants pour maximiser vos chances d\'obtenir un financement ou un partenariat.',
  svc_vis01p:'Nos experts r\u00e9digent des dossiers aux standards internationaux, adapt\u00e9s aux exigences des bailleurs, banques et investisseurs institutionnels.',
  svc_desc02:'Nous identifions et structurons les meilleures sources de financement pour vos projets, en nous appuyant sur notre r\u00e9seau en Afrique et \u00e0 l\'international.',
  svc_vis02p:'Acc\u00e9dez \u00e0 notre r\u00e9seau d\'investisseurs institutionnels, fonds d\'investissement et banques partenaires \u00e0 travers l\'Afrique et l\'Europe.',
  svc_desc03:'Des programmes de formation sur-mesure pour renforcer les comp\u00e9tences de vos \u00e9quipes en finance, gestion de projets et gestion des risques.',
  svc_vis03p:'Nos formateurs experts dispensent des programmes adapt\u00e9s aux r\u00e9alit\u00e9s du march\u00e9 africain et aux standards internationaux.',
  svc_vis04p:'Business plans dynamiques, cash-flow pr\u00e9visionnels, TRI et VAN pour d\u00e9cider en toute clart\u00e9.',
  svc_desc04:'Nous optimisons la structure financi\u00e8re et organisationnelle de vos projets et entreprises pour maximiser la performance et attirer les investisseurs.',
  svc_desc05:'Nos experts immobiliers certifi\u00e9s \u00e9valuent, auditent et analysent vos actifs immobiliers pour vous donner une image fid\u00e8le de leur valeur.',
  svc_vis05p:'Des expertises reconnues par les banques, compagnies d\'assurance et juridictions locales.',
  svc_desc06:'Nous r\u00e9alisons des audits techniques et \u00e9valuations d\'unit\u00e9s industrielles pour vous donner une vision claire de la valeur et des risques de vos actifs.',
  svc_vis06p:'Des \u00e9valuations rigoureuses pour s\u00e9curiser vos investissements dans les actifs industriels.',
  svc_desc07:'Nous accompagnons entreprises et institutions dans l\'analyse de leurs risques assurables et la mise en place de couvertures optimales.',
  svc_vis07p:'Des strat\u00e9gies de couverture adapt\u00e9es \u00e0 chaque type de projet et de structure d\'entreprise.',
  svc_vis08p:'De la structuration initiale \u00e0 la signature finale : chaque aspect juridique et contractuel est s\u00e9curis\u00e9.',
  svc_desc08:'Combinaison strat\u00e9gique du droit, de la finance et de la structuration contractuelle pour s\u00e9curiser vos op\u00e9rations.',
  svc_extra_p:'D\u00e9couvrez nos offres de services compl\u00e9mentaires publi\u00e9es par notre \u00e9quipe.',
  svc_cta_p:'Nos experts analysent gratuitement votre dossier lors d\'un premier entretien confidentiel.',
  svc_btn_start:'D\u00e9marrer un projet',
  svc_btn_expert:'Parler \u00e0 un expert',
  svc_btn_prog:'Demander un programme',
  svc_btn_anal:'Analyser mon projet',
  svc_btn_exp:'Demander une expertise',
  svc_btn_audit:'Commander un audit',
  svc_btn_risk:'\u00c9valuer mes risques',
  svc_btn_cons:'Consulter un expert',

  /* Blog page */
  blog_ph_p:'Analyses financi\u00e8res, opportunit\u00e9s d\'investissement, notes \u00e9conomiques et actualit\u00e9s du cabinet.',
  blog_featured_tag:'\u00c0 la une',
  blog_featured_title:'Guide 2026 : Financer son projet en Afrique de l\'Ouest',
  blog_featured_desc:'Notre guide complet des instruments de financement disponibles pour les entreprises et promoteurs.',
  blog_see_broch:'Voir nos brochures \u2192',
  blog_nl_desc:'Recevez nos analyses directement dans votre bo\u00eete mail.',
  blog_nl_btn:'S\'inscrire',
  blog_cta_h4:'Besoin d\'expertise\u00a0?',
  blog_cta_p:'Premier entretien gratuit et confidentiel avec un de nos experts.',
  blog_c1:'Finance &amp; Structuration',
  blog_c2:'Investissement',
  blog_c3:'PPP &amp; Infrastructure',
  blog_c4:'\u00c9nergie',
  blog_c5:'Immobilier',
  blog_c6:'Macro\u00e9conomie',

  /* Projets financement page */
  proj_ph_p:'Un portefeuille de projets s\u00e9lectionn\u00e9s, structur\u00e9s et accompagn\u00e9s par notre cabinet, ouverts \u00e0 l\'investissement.',
  proj_disclaimer_title:'Information importante :',
  proj_disclaimer:'Les projets pr\u00e9sent\u00e9s sont accompagn\u00e9s par AMEXPERTS &amp; PARTNERS dans leur processus de structuration et de recherche de financement. Toute expression d\'int\u00e9r\u00eat sera trait\u00e9e de mani\u00e8re confidentielle.',
  proj_loading:'Chargement du portefeuille\u2026',
  proj_submit_p:'Vous \u00eates porteur d\'un projet et recherchez un financement\u00a0? Soumettez-le \u00e0 notre \u00e9quipe pour une analyse pr\u00e9liminaire gratuite.',
  proj_f_nom:'Porteur du projet *',
  proj_f_sector:'Secteur',
  proj_f_amount:'Montant recherch\u00e9',
  proj_f_desc:'Description du projet *',
  proj_f_submit:'Soumettre mon projet',

  /* Brochure page */
  broch_ph_p:'T\u00e9l\u00e9chargez notre documentation officielle pour en savoir plus sur notre cabinet et nos services.',
  broch_docs_h2:'Notre documentation officielle',
  broch_docs_p:'Retrouvez l\'ensemble de notre documentation institutionnelle pour vous informer sur nos expertises, nos r\u00e9f\u00e9rences et nos offres de service.',
  broch_doc1_title:'Brochure G\u00e9n\u00e9rale',
  broch_doc1_desc:'Pr\u00e9sentation compl\u00e8te du cabinet, services et r\u00e9f\u00e9rences \u00b7 PDF',
  broch_doc2_title:'Pr\u00e9sentation Services',
  broch_doc2_desc:'D\u00e9tail de notre offre de services et m\u00e9thodologie \u00b7 PDF',
  broch_doc3_title:'Dossier de R\u00e9f\u00e9rences',
  broch_doc3_desc:'\u00c9tudes de cas et projets r\u00e9alis\u00e9s \u00b7 PDF',
  broch_doc4_title:'Guide : Financer son projet en Afrique',
  broch_doc4_desc:'Guide pratique sur les instruments de financement \u00b7 PDF',
  broch_btn_req:'Demander',
  broch_info:'Les documents sont transmis par email sur demande. Cliquez sur "Demander" pour envoyer une requ\u00eate \u00e0 notre \u00e9quipe.',
  broch_cta_h2:'Besoin d\'informations suppl\u00e9mentaires\u00a0?',
  broch_cta_p:'Notre \u00e9quipe est disponible pour r\u00e9pondre \u00e0 toutes vos questions et vous fournir les documents dont vous avez besoin.',
  broch_btn_email:'Envoyer un email',

  /* Divers */
  loading:'Chargement\u2026',
},

en: {
  /* Navigation */
  nav_home:'Home',
  nav_about:'About',
  nav_services:'Our Services <i class="fas fa-chevron-down" style="font-size:.7em"></i>',
  nav_realisations:'Projects',
  nav_real:'Projects',
  nav_blog:'News',
  nav_options:'More <i class="fas fa-chevron-down" style="font-size:.7em"></i>',
  nav_cta:'Consult',
  nav_s1:'Project writing',
  nav_s2:'Resource mobilization',
  nav_s3:'Professional training',
  nav_s4:'Financial structuring',
  nav_s5:'Real estate expertise',
  nav_s6:'Industrial expertise',
  nav_s7:'Insurance expertise',
  nav_s8:'Legal engineering',
  nav_drop1:'Projects for funding',
  nav_drop2:'Our Partners',
  nav_drop3:'Corporate Brochure',

  /* Hero (index) */
  hero_badge:'Consulting &amp; Engineering Firm \u2014 Lom\u00e9, Togo',
  hero_h1:'<span>Technical</span> and <span>financial</span> expertise<br>at the service of your projects',
  hero_desc:'AMEXPERTS &amp; PARTNERS supports businesses, institutions and investors in structuring, financing and delivering their projects across Africa and internationally.',
  hero_cta1:'Request a consultation',
  hero_cta2:'Our services',

  /* Stats */
  stat1:'Structured projects',
  stat2:'Countries covered',
  stat3:'Financing raised',
  stat4:'Of experience',

  /* Partenaires strip */
  partners_title:'Our partners &amp; certifications',
  partners_sub:'Banks \u00b7 Investment funds \u00b7 Financial institutions \u00b7 NGOs',

  /* Services section */
  svc_label:'What we do',
  svc_title:'Our areas of expertise',
  svc_sub:'A comprehensive advisory and project engineering offer for your ambitions in Africa and internationally.',
  svc_btn:'See all services',
  svc_contact:'Request a consultation',
  learn_more:'Learn more \u2192',
  s1_title:'Project writing',
  s1_desc:'Feasibility studies, business plans, banking and donor files to maximise your financing chances.',
  s2_title:'Resource mobilization',
  s2_desc:'Financing search, investor structuring, fundraising and financial instruments (BG, SBLC, MT760).',
  s3_title:'Financial structuring',
  s3_desc:'Advanced financial modelling, tax optimisation, debt/equity structuring and fundraising strategies.',
  s4_title:'Real estate expertise',
  s4_desc:'Asset valuation, property audit and due diligence to secure your real estate investments.',
  s5_title:'Legal engineering',
  s5_desc:'Legal project structuring, financing arrangements, due diligence and contractual security.',
  s6_title:'Professional training',
  s6_desc:'Structured finance, project design, risk management and insurance to strengthen your teams.',

  /* Pourquoi nous */
  why_label:'Why choose us',
  why_title:'A firm tailored to your needs',
  why_intro:'AMEXPERTS &amp; PARTNERS combines technical expertise, financial rigour and knowledge of the African landscape to deliver bespoke solutions.',
  why1_title:'African roots, international vision',
  why1_desc:'Based in Lom\u00e9, we operate throughout West and Central Africa and internationally with deep knowledge of local realities.',
  why2_title:'Multidisciplinary expert network',
  why2_desc:'Lawyers, financiers, engineers and sector experts collaborate to offer you integrated, coherent advice.',
  why3_title:'End-to-end support',
  why3_desc:'From design to implementation, we stay by your side at every stage of your project.',
  why4_title:'Ethics &amp; confidentiality',
  why4_desc:'We apply the highest ethical standards. Every assignment is handled with discretion and integrity.',
  why_btn:'Discover the firm',
  why_quote:'"Our mission is to transform your ambitions into bankable projects, by mobilising the best human, technical and financial resources."',
  why_dg:'General Management',
  why_years:'Years',
  why_countries:'Countries',

  /* R\u00e9f\u00e9rences */
  ref_label:'Our references',
  ref_title:'Recent projects',
  ref_btn:'See all',
  ref_empty:'No projects published yet.',

  /* CTA band */
  cta_title:'Your project deserves the best expertise',
  cta_desc:'Contact us for a first free and confidential consultation.',
  cta_btn:'Book an appointment',

  /* Blog section */
  blog_label:'News &amp; Blog',
  blog_title:'Our latest analyses',
  blog_btn:'View all',
  blog_read_more:'Read more \u2192',
  blog_empty:'No articles published yet.',
  blog_ph_h1:'News &amp; Analyses',
  blog_ph_p:'Our latest analyses, market studies and sector news.',
  blog_cat:'Categories',
  blog_nl_title:'Newsletter',
  blog_follow:'Follow us',

  /* Contact */
  contact_label:'Contact us',
  contact_title:'Request a consultation',
  contact_sub:'Our experts are available to analyse your project and offer the best solutions.',
  ci_addr_h:'Address',
  ci_phone_h:'Phone',
  ci_zone_h:'Area of intervention',
  ci_zone:'West Africa, Central Africa &amp; International',
  ci_wa:'Chat on WhatsApp',

  /* Formulaire */
  f_nom_label:'Full name *',
  f_nom_ph:'Your name',
  f_email_label:'Email *',
  f_tel_label:'Phone',
  f_tel_ph:'+228 xx xx xx xx',
  f_org_label:'Organisation',
  f_org_ph:'Company / Institution',
  f_svc_label:'Service required',
  f_svc_default:'\u2014 Select a service \u2014',
  f_svc1:'Project writing',
  f_svc2:'Resource mobilization',
  f_svc3:'Financial structuring',
  f_svc4:'Real estate expertise',
  f_svc5:'Industrial expertise',
  f_svc6:'Insurance expertise',
  f_svc7:'Legal and financial engineering',
  f_svc8:'Professional training',
  f_svc9:'Other',
  f_msg_label:'Your message *',
  f_msg_ph:'Describe your project or need...',
  f_send:'Send',
  f_sending:'Sending\u2026',
  f_sent:'Sent!',
  f_error:'Sending error. Please contact us directly.',

  /* Footer */
  foot_tagline:'Advisory and project engineering firm. Industrial, technical, trade and representation expertise.',
  foot_city:'Lom\u00e9, Togo \u00b7 West Africa &amp; International',
  foot_nl:'Newsletter \u2014 Analyses &amp; Opportunities',
  foot_nl_ph:'Your email',
  foot_h_svc:'Services',
  foot_h_nav:'Navigation',
  foot_h_contact:'Contact',
  foot_s1:'Project writing',
  foot_s2:'Resource mobilization',
  foot_s3:'Financial structuring',
  foot_s4:'Real estate expertise',
  foot_s5:'Legal engineering',
  foot_s6:'Training',
  foot_n_blog:'News &amp; Blog',
  foot_n_part:'Our Partners',
  foot_n_proj:'Projects for funding',
  foot_n_broch:'Brochure',
  foot_copy:'\u00a9 2026 AMEXPERTS AND PARTNERS \u2014 All rights reserved | Ref. 71/62029/DG/AM&amp;P',

  /* About */
  about_bc:'About',
  about_ph_h1:'About the firm',
  about_ph_p:'A multidisciplinary firm built on excellence, integrity and international vision.',
  about_hist_label:'Our story',
  about_hist_h2:'Born in Africa, open to the world',
  about_hist_p1:'AMEXPERTS AND PARTNERS is an advisory and project engineering firm based in Lom\u00e9, Republic of Togo. Founded by seasoned experts in international finance, engineering and business law, the firm has established itself as a reference player in supporting major projects across West and Central Africa and internationally.',
  about_hist_p2:'Our approach combines analytical rigour, strategic creativity and mastery of local realities to offer our clients financing and structuring solutions equal to their ambitions.',
  about_stat1:'Years of experience',
  about_stat2:'Projects completed',
  about_stat3:'Countries covered',
  about_vision_h3:'Our vision',
  about_vision_q:'"To become the reference firm in project engineering and financial structuring for Africa\'s economic development, by mobilising the best human, technical and financial expertise."',
  about_mission_h3:'Our mission',
  about_mission_p:'To support businesses, institutions and investors in designing, structuring and delivering their projects, offering expert, ethical and results-oriented advice.',
  about_val_label:'What guides us',
  about_val_h2:'Our core values',
  about_v1_h:'Excellence',
  about_v1_p:'We aim for the highest quality in every assignment, mobilising the best experts and applying international standards.',
  about_v2_h:'Integrity',
  about_v2_p:'Professional ethics is at the heart of all our work. We handle every file with transparency and honesty.',
  about_v3_h:'Innovation',
  about_v3_p:'We develop creative solutions tailored to each client\'s specific challenges, anticipating market developments.',
  about_v4_h:'Partnership',
  about_v4_p:'We build lasting relationships with our clients, based on trust, mutual respect and shared value creation.',
  about_v5_h:'African impact',
  about_v5_p:'We actively contribute to Africa\'s economic development by catalysing structural investments and job creation.',
  about_v6_h:'Confidentiality',
  about_v6_p:'All our assignments are handled with the strictest confidentiality. Protecting your strategic information is our priority.',
  about_team_label:'Our team',
  about_team_h2:'Experts at your service',
  about_team_p:'A multidisciplinary team of finance, legal, engineering and business strategy experts at the service of your projects.',
  about_team1_h:'General Management',
  about_team1_role:'Chief Executive Officer',
  about_team1_p:'Expert in financial engineering and investment project structuring. Over 15 years of experience in Africa and Europe.',
  about_team2_h:'Legal Department',
  about_team2_role:'Head of Legal &amp; Compliance',
  about_team2_p:'Specialist in African business law, public-private partnerships and contractual structuring of complex operations.',
  about_team3_h:'Finance Department',
  about_team3_role:'Senior Financial Analyst',
  about_team3_p:'Expert in financial modelling, risk analysis and debt structuring. International business school background.',
  about_team4_h:'Technical Department',
  about_team4_role:'Expert Engineer',
  about_team4_p:'Specialist in industrial and real estate expertise. Certified in asset valuation and technical auditing.',
  about_eth_label:'Our commitment',
  about_eth_h2:'Ethics &amp; Responsibility',
  about_eth_p:'AMEXPERTS &amp; PARTNERS is committed to operating in strict compliance with ethical principles and international standards regarding anti-corruption, data protection and social responsibility.',
  about_eth1:'Regulatory compliance',
  about_eth2:'Data protection',
  about_eth3:'Conflicts of interest',
  about_eth4:'Social responsibility',
  about_eth_btn:'Get in touch',

  /* R\u00e9alisations */
  real_bc:'Projects',
  real_ph_h1:'Our Projects',
  real_ph_p:'A portfolio of concrete projects illustrating our expertise and commitment to Africa\'s development.',
  real_stat1:'Projects completed',
  real_stat2:'Countries covered',
  real_stat3:'Financing raised',
  real_stat4:'Sectors covered',
  real_portfolio_label:'Project portfolio',
  real_portfolio_h2:'Case studies',
  real_f_all:'All',
  real_f_energy:'Energy',
  real_f_immo:'Real estate',
  real_f_agro:'Agro-industry',
  real_f_finance:'Finance',
  real_f_infra:'Infrastructure',
  real_temoign_label:'What our clients say',
  real_temoign_h2:'Testimonials',
  real_cta_h2:'Your project will be our next success',
  real_empty:'No projects published yet.',

  /* Services page */
  svc_bc:'Our Services',
  svc_ph_h1:'Our Services',
  svc_s01:'Service 01',
  svc_h01:'Project writing',
  svc_vis01:'A file that convinces',
  svc_vis02:'Tailored financing',
  svc_s02:'Service 02',
  svc_h02:'Resource mobilization',
  svc_s03:'Service 03',
  svc_h03:'Professional training',
  svc_vis03:'Build your skills',
  svc_vis04:'Financial optimisation',
  svc_s04:'Service 04',
  svc_h04:'Financial structuring',
  svc_s05:'Service 05',
  svc_h05:'Real estate expertise',
  svc_vis05:'Certified valuation',
  svc_vis06:'Industrial technical audit',
  svc_s06:'Service 06',
  svc_h06:'Industrial expertise',
  svc_s07:'Service 07',
  svc_h07:'Insurance expertise',
  svc_vis07:'Protect your assets',
  svc_vis08:'Full legal security',
  svc_s08:'Service 08',
  svc_h08:'Legal engineering',
  svc_extra_label:'Additional offerings',
  svc_extra_h2:'Additional services',
  svc_cta_h2:'Ready to structure your project?',

  /* Partenaires page */
  part_bc:'Our Partners',
  part_ph_h1:'Strategic Partnerships',
  part_intro_label:'Our partnership approach',
  part_intro_h2:'Strategic alliances in the service of development',
  part_types_label:'Forms of collaboration',
  part_types_h2:'Types of partnerships offered',
  part_t1:'Joint Venture',
  part_t2:'Public-Private Partnership (PPP)',
  part_t3:'Memorandum of Understanding',
  part_t4:'Technical agreements',
  part_t5:'Financial agreements',
  part_t6:'Expert networks',
  part_eco_label:'Our ecosystem',
  part_p1:'Banking Institutions',
  part_p2:'Investment Funds',
  part_p3:'Law Firms',
  part_p4:'Engineering Offices',
  part_p6:'Insurance Companies',
  part_join_label:'Join us',
  part_join_h2:'Propose a partnership',
  part_empty:'No partners published yet.',

  /* Projets en financement */
  proj_bc:'Projects for funding',
  proj_ph_h1:'Projects Seeking Financing',
  proj_submit_label:'Do you have a project?',
  proj_submit_h2:'Submit a project for financing',
  proj_empty:'No projects published yet.',

  /* Brochure */
  broch_bc:'Corporate Brochure',
  broch_ph_h1:'Corporate Brochure',
  broch_dl_label:'Downloads',
  broch_contact_label:'Direct contact',
  broch_empty:'No documents published yet.',

  /* Footer court */
  foot_tagline_short:'Advisory and project engineering firm. Lomé, Togo.',

  /* Service page — descriptions & buttons */
  svc_ph_p:'An integrated offer of advisory, financial engineering and technical expertise to make your ambitions a reality.',
  svc_desc01:'We produce solid, compelling strategic documents to maximise your chances of securing financing or a partnership.',
  svc_vis01p:'Our experts write files to international standards, tailored to the requirements of donors, banks and institutional investors.',
  svc_desc02:'We identify and structure the best financing sources for your projects, drawing on our network across Africa and internationally.',
  svc_vis02p:'Access our network of institutional investors, investment funds and partner banks across Africa and Europe.',
  svc_desc03:'Tailored training programmes to strengthen your teams\' skills in finance, project management and risk management.',
  svc_vis03p:'Our expert trainers deliver programmes adapted to African market realities and international standards.',
  svc_vis04p:'Dynamic business plans, cash-flow forecasts, IRR and NPV to make decisions with full clarity.',
  svc_desc04:'We optimise the financial and organisational structure of your projects and companies to maximise performance and attract investors.',
  svc_desc05:'Our certified real estate experts evaluate, audit and analyse your property assets to give you an accurate picture of their value.',
  svc_vis05p:'Valuations recognised by banks, insurance companies and local jurisdictions.',
  svc_desc06:'We carry out technical audits and valuations of industrial units to give you a clear view of the value and risks of your assets.',
  svc_vis06p:'Rigorous assessments to secure your investments in industrial assets.',
  svc_desc07:'We support businesses and institutions in analysing their insurable risks and putting in place optimal coverage.',
  svc_vis07p:'Coverage strategies tailored to each type of project and company structure.',
  svc_vis08p:'From initial structuring to final signature: every legal and contractual aspect is secured.',
  svc_desc08:'Strategic combination of law, finance and contractual structuring to secure your operations.',
  svc_extra_p:'Discover our complementary service offerings published by our team.',
  svc_cta_p:'Our experts analyse your file free of charge during a first confidential interview.',
  svc_btn_start:'Start a project',
  svc_btn_expert:'Speak to an expert',
  svc_btn_prog:'Request a programme',
  svc_btn_anal:'Analyse my project',
  svc_btn_exp:'Request an assessment',
  svc_btn_audit:'Order an audit',
  svc_btn_risk:'Assess my risks',
  svc_btn_cons:'Consult an expert',

  /* Blog page */
  blog_ph_p:'Our latest analyses, market studies, economic notes and firm news.',
  blog_featured_tag:'Featured',
  blog_featured_title:'2026 Guide: Financing your project in West Africa',
  blog_featured_desc:'Our comprehensive guide to financing instruments available for businesses and project developers.',
  blog_see_broch:'See our brochures \u2192',
  blog_nl_desc:'Receive our analyses directly in your inbox.',
  blog_nl_btn:'Subscribe',
  blog_cta_h4:'Need expertise?',
  blog_cta_p:'First interview free and confidential with one of our experts.',
  blog_c1:'Finance &amp; Structuring',
  blog_c2:'Investment',
  blog_c3:'PPP &amp; Infrastructure',
  blog_c4:'Energy',
  blog_c5:'Real estate',
  blog_c6:'Macroeconomics',

  /* Projets financement page */
  proj_ph_p:'A portfolio of selected, structured and supported projects open to investment.',
  proj_disclaimer_title:'Important information:',
  proj_disclaimer:'The projects presented are supported by AMEXPERTS &amp; PARTNERS in their structuring and fundraising process. Any expression of interest will be treated confidentially.',
  proj_loading:'Loading portfolio\u2026',
  proj_submit_p:'Are you a project developer seeking financing? Submit your project to our team for a free preliminary analysis.',
  proj_f_nom:'Project developer *',
  proj_f_sector:'Sector',
  proj_f_amount:'Amount sought',
  proj_f_desc:'Project description *',
  proj_f_submit:'Submit my project',

  /* Brochure page */
  broch_ph_p:'Download our official documentation to learn more about our firm and services.',
  broch_docs_h2:'Our official documentation',
  broch_docs_p:'Find all our institutional documentation to learn about our expertise, references and service offerings.',
  broch_doc1_title:'General Brochure',
  broch_doc1_desc:'Complete presentation of the firm, services and references \u00b7 PDF',
  broch_doc2_title:'Services Presentation',
  broch_doc2_desc:'Detail of our service offering and methodology \u00b7 PDF',
  broch_doc3_title:'References File',
  broch_doc3_desc:'Case studies and completed projects \u00b7 PDF',
  broch_doc4_title:'Guide: Financing your project in Africa',
  broch_doc4_desc:'Practical guide to financing instruments \u00b7 PDF',
  broch_btn_req:'Request',
  broch_info:'Documents are sent by email on request. Click "Request" to send a query to our team.',
  broch_cta_h2:'Need more information?',
  broch_cta_p:'Our team is available to answer all your questions and provide the documents you need.',
  broch_btn_email:'Send an email',

  /* Brochure page — clés EN manquantes */
  broch_cta_h2:'Need more information?',
  broch_cta_p:'Our team is available to answer all your questions and provide the documents you need.',
  broch_btn_email:'Send an email',

  /* Projets financement page — clés EN manquantes */
  proj_ph_p:'A portfolio of selected, structured and supported projects open to investment.',
  proj_disclaimer_title:'Important information:',
  proj_disclaimer:'The projects presented are supported by AMEXPERTS &amp; PARTNERS in their structuring and fundraising process. Any expression of interest will be treated confidentially.',
  proj_loading:'Loading portfolio\u2026',
  proj_submit_p:'Are you a project developer seeking financing? Submit your project to our team for a free preliminary analysis.',
  proj_f_nom:'Project developer *',
  proj_f_sector:'Sector',
  proj_f_amount:'Amount sought',
  proj_f_desc:'Project description *',
  proj_f_submit:'Submit my project',

  /* Divers */
  loading:'Loading\u2026',
}
};

/* ── Cache de traduction automatique (contenus Firestore) ── */
var _cache = {};
try { _cache = JSON.parse(localStorage.getItem('amp_trans_cache') || '{}'); } catch(e) { _cache = {}; }
function _saveCache() { try { localStorage.setItem('amp_trans_cache', JSON.stringify(_cache)); } catch(e) {} }

/**
 * autoTrans(txt) — traduit automatiquement un texte FR → EN
 * Utilisé pour les contenus dynamiques (articles, réalisations, équipe…)
 * postés depuis le back-office Firestore.
 */
async function autoTrans(txt) {
  if (!txt || typeof txt !== 'string' || txt.trim().length < 3) return txt || '';
  var key = txt.trim().substring(0, 120);
  if (_cache[key]) return _cache[key];
  try {
    var r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        system: 'You are a professional French to English translator specialised in African development finance and consulting. Return ONLY the English translation — no quotes, no explanation, no prefix.',
        messages: [{ role: 'user', content: txt }]
      })
    });
    var data = await r.json();
    var t = (data.content && data.content[0] && data.content[0].text) || txt;
    _cache[key] = t;
    _saveCache();
    return t;
  } catch(e) { return txt; }
}

/* ── Langue courante ── */
var _lang = 'fr';
try { _lang = localStorage.getItem('amp_lang') || 'fr'; } catch(e) {}

/* ── Application des traductions statiques ── */
function applyStatic(l) {
  var d = D[l]; if (!d) return;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var k = el.getAttribute('data-i18n');
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var k = el.getAttribute('data-i18n-ph');
    if (d[k] !== undefined) el.placeholder = d[k];
  });
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  document.documentElement.lang = l;
}

/* ── Changement de langue (publique) ── */
function applyLang(l) {
  _lang = l;
  try { localStorage.setItem('amp_lang', l); } catch(e) {}
  applyStatic(l);
  global._ampLang = l;
  /* Déclenche le rechargement des contenus dynamiques si disponible */
  if (typeof global._reloadDynamic === 'function') global._reloadDynamic(l);
}

/* ── Initialisation au chargement de la page ── */
document.addEventListener('DOMContentLoaded', function() {
  /* Boutons langue */
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.addEventListener('click', function() { applyLang(this.dataset.lang); });
  });
  /* Navbar mobile toggle */
  var tog = document.getElementById('navToggle');
  var lnk = document.getElementById('navLinks');
  if (tog && lnk) {
    tog.addEventListener('click', function() { lnk.classList.toggle('open'); });
    lnk.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() { lnk.classList.remove('open'); });
    });
  }
  /* Application langue sauvegardée */
  applyStatic(_lang);
  global._ampLang = _lang;
});

/* ── Exports globaux ── */
global._i18n     = D;
global.applyLang = applyLang;
global.autoTrans = autoTrans;
global._ampLang  = _lang;

})(window);

/* ════════════════════════════════════════════════════════════
   AJOUT — nouvelles clés (service lists, partenaires, projets)
   ════════════════════════════════════════════════════════════ */
(function(global){
  var D = global._i18n;
  if (!D) return;
  var fr = D.fr, en = D.en;

  // ── Service lists FR ──
  Object.assign(fr, {
    svc_l01_1:'Études de faisabilité techniques et financières', svc_l01_2:'Plans d\'affaires dynamiques et structurés',
    svc_l01_3:'Dossiers bancaires et de crédit', svc_l01_4:'Dossiers bailleurs de fonds (ONG, Banques de développement)',
    svc_l01_5:'Mémorandums d\'information (IM)', svc_l01_6:'Notes de synthèse sectorielles',
    svc_l02_1:'Recherche et identification de financements', svc_l02_2:'Structuration de tours de table investisseurs',
    svc_l02_3:'Levée de fonds (private equity, dette)', svc_l02_4:'Instruments financiers : BG, SBLC, MT760',
    svc_l02_5:'Financement de projets (project finance)', svc_l02_6:'Accès aux fonds de développement régionaux',
    svc_l03_1:'Finance structurée et ingénierie financière', svc_l03_2:'Montage et rédaction de projets',
    svc_l03_3:'Gestion et analyse des risques', svc_l03_4:'Assurance et couverture de risques',
    svc_l03_5:'Droit des affaires africain', svc_l03_6:'Intra-entreprise ou inter-entreprises',
    svc_l04_1:'Modélisation financière avancée (TRI, VAN, stress tests)', svc_l04_2:'Optimisation structure dette / fonds propres',
    svc_l04_3:'Structuration mezzanine et quasi-equity', svc_l04_4:'Restructuration et assainissement financier',
    svc_l04_5:'Tableaux de bord financiers et KPI', svc_l04_6:'Gouvernance et contrôle interne',
    svc_l05_1:'Évaluation d\'actifs immobiliers', svc_l05_2:'Audit immobilier complet',
    svc_l05_3:'Due diligence technique et juridique', svc_l05_4:'Valorisation de portefeuilles immobiliers',
    svc_l05_5:'Conseil en investissement immobilier',
    svc_l06_1:'Audit technique d\'installations industrielles', svc_l06_2:'Évaluation d\'unités de production',
    svc_l06_3:'Structuration d\'investissements industriels', svc_l06_4:'Analyse de viabilité technique',
    svc_l07_1:'Audit de risques assurables', svc_l07_2:'Évaluation de sinistres',
    svc_l07_3:'Conseil en couverture assurantielle', svc_l07_4:'Gestion de portefeuilles de risques',
    svc_l08_1:'Structuration juridique de projets (SPV, pactes)', svc_l08_2:'Montage juridique d\'opérations de financement',
    svc_l08_3:'Due diligence juridique et financière', svc_l08_4:'Partenariats : JV, PPP, MoU',
    svc_l08_5:'Contrats EPC et industriels', svc_l08_6:'Sécurisation contractuelle complète',
    // Partenaires FR
    part_ph_p:'Construisons ensemble des alliances durables pour démultiplier l\'impact de vos projets en Afrique et à l\'international.',
    part_intro_p1:'AMEXPERTS &amp; PARTNERS croit profondément que la coopération stratégique est le levier le plus puissant pour accélérer le développement économique de l\'Afrique. Nous cultivons des partenariats solides et durables avec des acteurs complémentaires pour offrir à nos clients des solutions intégrées de haute valeur ajoutée.',
    part_intro_p2:'Que vous soyez une institution financière, un cabinet d\'experts, un fonds d\'investissement ou une ONG, nous sommes ouverts à explorer des formes de collaboration adaptées à vos objectifs.',
    part_btn_propose:'Proposer un partenariat',
    part_eco1_h:'Institutions financières', part_eco1_p:'Banques, fonds, assureurs, microfinance',
    part_eco2_h:'Investisseurs', part_eco2_p:'PE, VC, family offices, business angels',
    part_eco3_h:'Cabinets techniques', part_eco3_p:'Ingénierie, audit, juridique, conseil',
    part_eco4_h:'ONG &amp; Bailleurs', part_eco4_p:'Développement, coopération, aide technique',
    part_t1_p:'Création d\'entités communes pour structurer et réaliser des projets d\'envergure nécessitant des compétences pluridisciplinaires complémentaires.',
    part_t2_p:'Montage et accompagnement de PPP pour le développement d\'infrastructures, de services publics délégués et d\'équipements collectifs.',
    part_t3_p:'Formalisation d\'accords de coopération, d\'échanges de compétences et de référencement mutuel avec des partenaires stratégiques.',
    part_t4_p:'Collaboration sur des expertises techniques complémentaires : ingénierie, audit, conseil juridique, expertise sectorielle.',
    part_t5_p:'Structuration de co-financement, partage de risques et mise en commun de capacités de mobilisation financière.',
    part_t6_p:'Intégration dans notre réseau d\'experts référencés pour intervenir en appui sur des missions ponctuelles ou récurrentes.',
    part_eco_p:'Nous collaborons avec un réseau sélectionné d\'institutions et d\'experts partageant nos valeurs d\'excellence et d\'intégrité.',
    part_p1_p:'Partenariats avec des banques commerciales et de développement pour faciliter l\'accès au financement de nos clients.',
    part_p1_type:'Financement',
    part_p2_p:'Réseau de fonds africains et internationaux spécialisés dans les économies émergentes et les projets d\'infrastructure.',
    part_p2_type:'Capital',
    part_p3_p:'Partenariats avec des cabinets d\'avocats spécialisés en droit OHADA, droit des affaires et droit international.',
    part_p3_type:'Expertise juridique',
    part_p4_p:'Collaboration avec des bureaux d\'études techniques pour les expertises industrielles et les audits d\'infrastructure.',
    part_p4_type:'Technique',
    part_p5:'ONG &amp; Coopération',
    part_p5_p:'Partenariats avec des organisations de développement pour accéder aux financements concessionnels et aux appuis techniques.',
    part_p5_type:'Développement',
    part_p6_p:'Réseau d\'assureurs partenaires pour la couverture des risques de projets et la mise en place de garanties bancaires.',
    part_p6_type:'Assurance &amp; Garanties',
    part_join_p:'Vous souhaitez collaborer avec AMEXPERTS &amp; PARTNERS ? Décrivez votre organisation et votre proposition de valeur.',
    part_f_type:'Type de partenariat', part_f_msg:'Décrivez votre proposition *',
    // Projets financement FR
    proj_sec1:'Agro-industrie', proj_sec2:'Immobilier', proj_sec3:'Énergie',
    proj_sec4:'Infrastructure', proj_sec5:'Industrie', proj_sec6:'Services', proj_sec7:'Autre',
    proj_ph_nom:'Nom / Société', proj_ph_email:'votre@email.com',
    proj_ph_amount:'Ex: 2 M€', proj_ph_desc:'Décrivez votre projet : secteur, localisation, stade de développement, besoins spécifiques...',
  });

  // ── Service lists EN ──
  Object.assign(en, {
    svc_l01_1:'Technical and financial feasibility studies', svc_l01_2:'Dynamic and structured business plans',
    svc_l01_3:'Banking and credit files', svc_l01_4:'Donor files (NGOs, Development Banks)',
    svc_l01_5:'Information Memoranda (IM)', svc_l01_6:'Sector briefing notes',
    svc_l02_1:'Financing search and identification', svc_l02_2:'Investor round-table structuring',
    svc_l02_3:'Fundraising (private equity, debt)', svc_l02_4:'Financial instruments: BG, SBLC, MT760',
    svc_l02_5:'Project financing (project finance)', svc_l02_6:'Access to regional development funds',
    svc_l03_1:'Structured finance and financial engineering', svc_l03_2:'Project design and writing',
    svc_l03_3:'Risk management and analysis', svc_l03_4:'Insurance and risk coverage',
    svc_l03_5:'African business law', svc_l03_6:'In-company or inter-company programmes',
    svc_l04_1:'Advanced financial modelling (IRR, NPV, stress tests)', svc_l04_2:'Debt / equity structure optimisation',
    svc_l04_3:'Mezzanine and quasi-equity structuring', svc_l04_4:'Restructuring and financial rehabilitation',
    svc_l04_5:'Financial dashboards and KPIs', svc_l04_6:'Governance and internal control',
    svc_l05_1:'Real estate asset valuation', svc_l05_2:'Full property audit',
    svc_l05_3:'Technical and legal due diligence', svc_l05_4:'Real estate portfolio valuation',
    svc_l05_5:'Real estate investment advisory',
    svc_l06_1:'Technical audit of industrial installations', svc_l06_2:'Production unit valuation',
    svc_l06_3:'Industrial investment structuring', svc_l06_4:'Technical viability analysis',
    svc_l07_1:'Insurable risk audit', svc_l07_2:'Claims assessment',
    svc_l07_3:'Insurance coverage advisory', svc_l07_4:'Risk portfolio management',
    svc_l08_1:'Legal project structuring (SPV, shareholders\' agreements)', svc_l08_2:'Legal structuring of financing operations',
    svc_l08_3:'Legal and financial due diligence', svc_l08_4:'Partnerships: JV, PPP, MoU',
    svc_l08_5:'EPC and industrial contracts', svc_l08_6:'Full contractual security',
    // Partenaires EN
    part_ph_p:'Let us build lasting alliances together to multiply the impact of your projects in Africa and internationally.',
    part_intro_p1:'AMEXPERTS &amp; PARTNERS firmly believes that strategic cooperation is the most powerful lever for accelerating Africa\'s economic development. We cultivate solid, lasting partnerships with complementary players to offer our clients integrated, high-value solutions.',
    part_intro_p2:'Whether you are a financial institution, an expert firm, an investment fund or an NGO, we are open to exploring forms of collaboration suited to your objectives.',
    part_btn_propose:'Propose a partnership',
    part_eco1_h:'Financial institutions', part_eco1_p:'Banks, funds, insurers, microfinance',
    part_eco2_h:'Investors', part_eco2_p:'PE, VC, family offices, business angels',
    part_eco3_h:'Technical firms', part_eco3_p:'Engineering, audit, legal, advisory',
    part_eco4_h:'NGOs &amp; Donors', part_eco4_p:'Development, cooperation, technical assistance',
    part_t1_p:'Creating joint entities to structure and deliver large-scale projects requiring complementary multidisciplinary skills.',
    part_t2_p:'Structuring and supporting PPPs for the development of infrastructure, delegated public services and public facilities.',
    part_t3_p:'Formalising cooperation agreements, skills exchanges and mutual referencing with strategic partners.',
    part_t4_p:'Collaboration on complementary technical expertise: engineering, audit, legal advisory, sectoral expertise.',
    part_t5_p:'Co-financing structuring, risk sharing and pooling of financial mobilisation capabilities.',
    part_t6_p:'Integration into our network of referenced experts to provide support on one-off or recurring assignments.',
    part_eco_p:'We work with a selected network of institutions and experts who share our values of excellence and integrity.',
    part_p1_p:'Partnerships with commercial and development banks to facilitate access to financing for our clients.',
    part_p1_type:'Financing',
    part_p2_p:'Network of African and international funds specialised in emerging economies and infrastructure projects.',
    part_p2_type:'Capital',
    part_p3_p:'Partnerships with law firms specialising in OHADA law, business law and international law.',
    part_p3_type:'Legal expertise',
    part_p4_p:'Collaboration with technical consulting firms for industrial expertise and infrastructure audits.',
    part_p4_type:'Technical',
    part_p5:'NGOs &amp; Cooperation',
    part_p5_p:'Partnerships with development organisations to access concessional financing and technical support.',
    part_p5_type:'Development',
    part_p6_p:'Network of partner insurers for project risk coverage and the arrangement of bank guarantees.',
    part_p6_type:'Insurance &amp; Guarantees',
    part_join_p:'Would you like to collaborate with AMEXPERTS &amp; PARTNERS? Describe your organisation and your value proposition.',
    part_f_type:'Type of partnership', part_f_msg:'Describe your proposal *',
    // Projets financement EN
    proj_sec1:'Agro-industry', proj_sec2:'Real estate', proj_sec3:'Energy',
    proj_sec4:'Infrastructure', proj_sec5:'Industry', proj_sec6:'Services', proj_sec7:'Other',
    proj_ph_nom:'Name / Company', proj_ph_email:'your@email.com',
    proj_ph_amount:'e.g. €2M', proj_ph_desc:'Describe your project: sector, location, development stage, specific needs...',
    // Brochure EN (manquantes dans bloc principal si surchargées ici)
    broch_cta_h2:'Need more information?',
    broch_cta_p:'Our team is available to answer all your questions and provide the documents you need.',
    broch_btn_email:'Send an email',
  });
})(window);
