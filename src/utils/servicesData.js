
import {
  inmigracionprofesionales,
  inmigracioninversionistas,
  inmigracionparafamilias,
  defensaylitigios,
  corporatecompliance,
  importnexport,
  sportsinmigration,
  solucionestranfronterizas,
  gestionderiegsomigratoios,
} from "../assets";

export const services = [
  { 
    id: 1, 
    slug: "professionals", 
    imgUrl: inmigracionprofesionales, 
    titleKey: "service_professionals_title", 
    descKey: "service_professionals_desc",

    benefits: ["professionals_benefit_1", "professionals_benefit_2", "professionals_benefit_3"],
    eligibility: ["professionals_eligibility_1", "professionals_eligibility_2"],
    process: ["professionals_process_1", "professionals_process_2", "professionals_process_3"],
    timeframe: "professionals_timeframe",
    documents: ["professionals_document_1", "professionals_document_2", "professionals_document_3"],
    faq: [
      { question: "professionals_faq_1_q", answer: "professionals_faq_1_a" },
      { question: "professionals_faq_2_q", answer: "professionals_faq_2_a" }
    ]
  },
 {
  id: 2,
  slug: "investors",
  imgUrl: inmigracioninversionistas,
  titleKey: "service_investors_title",
  descKey: "service_investors_desc",

  benefits: [
    "investors_benefit_1",
    "investors_benefit_2",
    "investors_benefit_3"
  ],
  eligibility: [
    "investors_eligibility_1",
    "investors_eligibility_2"
  ],
  process: [
    "investors_process_1",
    "investors_process_2",
    "investors_process_3"
  ],
  timeframe: "investors_timeframe",
  documents: [
    "investors_document_1",
    "investors_document_2",
    "investors_document_3"
  ],
  faq: [
    { question: "investors_faq_1_q", answer: "investors_faq_1_a" },
    { question: "investors_faq_2_q", answer: "investors_faq_2_a" }
  ]
},


{
  id: 3,
  slug: "family",
  imgUrl: inmigracionparafamilias,
  titleKey: "service_family_title",
  descKey: "service_family_desc",

  benefits: [
    "family_benefit_1",
    "family_benefit_2",
    "family_benefit_3"
  ],
  eligibility: [
    "family_eligibility_1",
    "family_eligibility_2"
  ],
  process: [
    "family_process_1",
    "family_process_2",
    "family_process_3"
  ],
  timeframe: "family_timeframe",
  documents: [
    "family_document_1",
    "family_document_2",
    "family_document_3"
  ],
  faq: [
    { question: "family_faq_1_q", answer: "family_faq_1_a" },
    { question: "family_faq_2_q", answer: "family_faq_2_a" }
  ]
},

{
  id: 4,
  slug: "removal-defense",
  imgUrl: defensaylitigios,
  titleKey: "service_litigation_title",
  descKey: "service_litigation_desc",

  benefits: [
    "removal_benefit_1",
    "removal_benefit_2",
    "removal_benefit_3"
  ],
  eligibility: [
    "removal_eligibility_1",
    "removal_eligibility_2"
  ],
  process: [
    "removal_process_1",
    "removal_process_2",
    "removal_process_3"
  ],
  timeframe: "removal_timeframe",
  documents: [
    "removal_document_1",
    "removal_document_2",
    "removal_document_3"
  ],
  faq: [
    { question: "removal_faq_1_q", answer: "removal_faq_1_a" },
    { question: "removal_faq_2_q", answer: "removal_faq_2_a" }
  ]
},
{
  id: 5,
  slug: "corporate-compliance",
  imgUrl: corporatecompliance,
  titleKey: "service_corporate_title",
  descKey: "service_corporate_desc",

  benefits: [
    "corporate_benefit_1",
    "corporate_benefit_2",
    "corporate_benefit_3"
  ],
  eligibility: [
    "corporate_eligibility_1",
    "corporate_eligibility_2"
  ],
  process: [
    "corporate_process_1",
    "corporate_process_2",
    "corporate_process_3"
  ],
  timeframe: "corporate_timeframe",
  documents: [
    "corporate_document_1",
    "corporate_document_2",
    "corporate_document_3"
  ],
  faq: [
    { question: "corporate_faq_1_q", answer: "corporate_faq_1_a" },
    { question: "corporate_faq_2_q", answer: "corporate_faq_2_a" }
  ]
},
{
  id: 6,
  slug: "customs",
  imgUrl: importnexport,
  titleKey: "service_customs_title",
  descKey: "service_customs_desc",

  benefits: [
    "customs_benefit_1",
    "customs_benefit_2",
    "customs_benefit_3"
  ],
  eligibility: [
    "customs_eligibility_1",
    "customs_eligibility_2"
  ],
  process: [
    "customs_process_1",
    "customs_process_2",
    "customs_process_3"
  ],
  timeframe: "customs_timeframe",
  documents: [
    "customs_document_1",
    "customs_document_2",
    "customs_document_3"
  ],
  faq: [
    { question: "customs_faq_1_q", answer: "customs_faq_1_a" },
    { question: "customs_faq_2_q", answer: "customs_faq_2_a" }
  ]
},

{
  id: 7,
  slug: "sports",
  imgUrl: sportsinmigration,
  titleKey: "service_sports_title",
  descKey: "service_sports_desc",

  benefits: [
    "sports_benefit_1",
    "sports_benefit_2",
    "sports_benefit_3"
  ],
  eligibility: [
    "sports_eligibility_1",
    "sports_eligibility_2"
  ],
  process: [
    "sports_process_1",
    "sports_process_2",
    "sports_process_3"
  ],
  timeframe: "sports_timeframe",
  documents: [
    "sports_document_1",
    "sports_document_2",
    "sports_document_3"
  ],
  faq: [
    { question: "sports_faq_1_q", answer: "sports_faq_1_a" },
    { question: "sports_faq_2_q", answer: "sports_faq_2_a" }
  ]
},

{
  id: 8,
  slug: "cross-border",
  imgUrl: solucionestranfronterizas,
  titleKey: "service_crossborder_title",
  descKey: "service_crossborder_desc",

  benefits: [
    "crossborder_benefit_1",
    "crossborder_benefit_2",
    "crossborder_benefit_3"
  ],
  eligibility: [
    "crossborder_eligibility_1",
    "crossborder_eligibility_2"
  ],
  process: [
    "crossborder_process_1",
    "crossborder_process_2",
    "crossborder_process_3"
  ],
  timeframe: "crossborder_timeframe",
  documents: [
    "crossborder_document_1",
    "crossborder_document_2",
    "crossborder_document_3"
  ],
  faq: [
    { question: "crossborder_faq_1_q", answer: "crossborder_faq_1_a" },
    { question: "crossborder_faq_2_q", answer: "crossborder_faq_2_a" }
  ]
},

{
  id: 9,
  slug: "risk-management",
  imgUrl: gestionderiegsomigratoios,
  titleKey: "service_risk_title",
  descKey: "service_risk_desc",

  benefits: [
    "risk_benefit_1",
    "risk_benefit_2",
    "risk_benefit_3"
  ],
  eligibility: [
    "risk_eligibility_1",
    "risk_eligibility_2"
  ],
  process: [
    "risk_process_1",
    "risk_process_2",
    "risk_process_3"
  ],
  timeframe: "risk_timeframe",
  documents: [
    "risk_document_1",
    "risk_document_2",
    "risk_document_3"
  ],
  faq: [
    { question: "risk_faq_1_q", answer: "risk_faq_1_a" },
    { question: "risk_faq_2_q", answer: "risk_faq_2_a" }
  ]
},

]



