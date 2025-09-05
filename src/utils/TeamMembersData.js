import { 
  abogados1, 
  abogados2, 
  abogados3, 
  abogados4, 
  abogados5, 
  abogados6 
} from '../assets';


export const teamMembersCard = [
{
  id: 1,
  slug: "jonathan-grode",
  name: "Jonathan A. Grode",
role: "practice_director",
position: "global_managing_director",

  location: "Philadelphia, PA",
  phone: "(215) 395-8959",
  email: "jgrode@consumerlawfirm.com",
  image: abogados2,
  bio: "team_jonathan_bio",
  specialties: [
    "business_immigration",
    "employment_visas",
    "corporate_compliance"
  ],
  languages: ["English", "Spanish"],
  experience: "25+ años"
},
{
  id: 2,
  slug: "dana-imperia",
  name: "Dana Imperia",
role: "partner",
position: "litigation_director",
  location: "Philadelphia, PA",
  phone: "(215) 395-8959",
  email: "dimperia@consumerlawfirm.com",
  image: abogados6,
  bio: "team_dana_bio",
  specialties: [
    "family_immigration",
    "naturalization",
    "asylum"
  ],
  languages: ["English", "Italian"],
  experience: "20+ años"
},
{
  id: 3,
  slug: "brian-halliday",
  name: "Brian J. Halliday",
role: "partner",
position: "deportation_defense_chair",
  location: "Cleveland, OH",
  phone: "(216) 896-0855",
  email: "bhalliday@consumerlawfirm.com",
  image: abogados3,
  bio: "team_brian_bio",
  specialties: ["deportation_defense", "criminal_immigration", "federal_litigation"],
  languages: ["English"],
  experience: "18+ años"
},
  {
  id: 5,
  slug: "stephen-antwine",
  name: "Stephen Antwine",
role: "senior_associate",
position: "employment_visa_specialist",
  location: "Philadelphia, PA",
  phone: "(215) 395-8959",
  email: "santwine@consumerlawfirm.com",
  image: abogados5,
  bio: "team_stephen_bio",
  specialties: ["employment_immigration", "h1b_visas", "green_cards"],
  languages: ["English", "French"],
  experience: "12+ años"
},
  {
    id: 8,
    slug: "dan-berger",
    name: "Dan H. Berger",
 role: "associate",
position: "corporate_compliance_advisor",
    location: "Philadelphia, PA",
    phone: "(215) 395-8959",
    email: "dberger@consumerlawfirm.com",
    image: abogados4,
    bio: "team_dan_bio",
    specialties: ["corporate_immigration", "compliance", "i9_verification"],
    languages: ["English", "Mandarin"],
    experience: "10+ años"
  },
  {
    id: 10,
    slug: "david-chen",
    name: "David Chen",
role: "partner",
position: "business_development_director",
    location: "San Francisco, CA",
    phone: "(415) 567-8901",
    email: "dchen@consumerlawfirm.com",
    image: abogados1,
    bio: "team_david_bio",
    specialties: ["business_immigration", "employment_visas", "investor_visas"],
    languages: ["English", "Mandarin", "Cantonese"],
    experience: "17+ años"
  },
];


export const teamMembers = [
{
  id: 1,
  slug: "jonathan-grode",
  name: "Jonathan A. Grode",
role: "practice_director",
position: "global_managing_director",
  location: "Philadelphia, PA",
  phone: "(215) 395-8959",
  email: "jgrode@consumerlawfirm.com",
  image: abogados2,
  linkedIn: "https://linkedin.com/in/jonathan-grode",
  bioKey: "team_jonathan_bio",
  quoteKey: "team_jonathan_quote",
  specialties: [
    "specialty_business_immigration",
    "specialty_employment_visas",
    "specialty_corporate_compliance"
  ],
  languages: ["English", "Spanish"],
  experience: "25+",
  education: [
    {
      degreeKey: "team_jonathan_degree_1",
      schoolKey: "team_jonathan_school_1",
      year: "1995"
    },
    {
      degreeKey: "team_jonathan_degree_2",
      schoolKey: "team_jonathan_school_2",
      year: "1998"
    }
  ],
  barAdmissions: [
    "bar_pennsylvania",
    "bar_new_jersey",
    "bar_us_supreme_court"
  ],
  achievements: [
    "achievement_jonathan_1",
    "achievement_jonathan_2",
    "achievement_jonathan_3"
  ],
  publications: [
    { titleKey: "publication_jonathan_1", yearKey: "2023" },
    { titleKey: "publication_jonathan_2", yearKey: "2022" }
  ],
  associations: [
    "association_aila",
    "association_aba",
    "association_philadelphia_bar"
  ]
},
{
  id: 2,
  slug: "dana-imperia",
  name: "Dana Imperia",
role: "partner",
position: "litigation_director",
  location: "Philadelphia, PA",
  phone: "(215) 395-8959",
  email: "dimperia@consumerlawfirm.com",
  image: abogados6,
  linkedIn: "https://linkedin.com/in/dana-imperia",
  bioKey: "team_dana_bio",
  quoteKey: "team_dana_quote",
  specialties: [
    "specialty_family_immigration",
    "specialty_naturalization",
    "specialty_asylum"
  ],
  languages: ["English", "Italian"],
  experience: "20+",
  education: [
    {
      degreeKey: "team_dana_degree_1",
      schoolKey: "team_dana_school_1",
      year: "2000"
    },
    {
      degreeKey: "team_dana_degree_2",
      schoolKey: "team_dana_school_2",
      year: "2003"
    }
  ],
  barAdmissions: [
    "bar_pennsylvania",
    "bar_third_circuit"
  ],
  achievements: [
    "achievement_dana_1",
    "achievement_dana_2",
    "achievement_dana_3"
  ],
  publications: [
    { titleKey: "publication_dana_1", yearKey: "2023" },
    { titleKey: "publication_dana_2", yearKey: "2021" }
  ],
  associations: [
    "association_aila",
    "association_women_lawyers"
  ]
},  
{
  id: 3,
  slug: "brian-halliday",
  name: "Brian J. Halliday",
 role: "partner",
position: "deportation_defense_chair",
  location: "Cleveland, OH",
  phone: "(216) 896-0855",
  email: "bhalliday@consumerlawfirm.com",
  image: abogados3,
  linkedIn: "https://linkedin.com/in/brian-halliday",
  bioKey: "team_brian_bio",
  quoteKey: "team_brian_quote",
  specialties: [
    "specialty_deportation_defense",
    "specialty_criminal_immigration",
    "specialty_federal_litigation"
  ],
  languages: ["English"],
  experience: "18+",
  education: [
    { degreeKey: "team_brian_degree_1", schoolKey: "team_brian_school_1", year: "2002" },
    { degreeKey: "team_brian_degree_2", schoolKey: "team_brian_school_2", year: "2005" }
  ],
  barAdmissions: [
    "bar_ohio",
    "bar_sixth_circuit"
  ],
  achievements: [
    "achievement_brian_1",
    "achievement_brian_2",
    "achievement_brian_3"
  ],
  publications: [
    { titleKey: "publication_brian_1", yearKey: "2022" }
  ],
  associations: [
    "association_aila",
    "association_nacda"
  ]
},

{
    id: 5,
    slug: "stephen-antwine",
    name: "Stephen Antwine",
    role: "senior_associate",
position: "employment_visa_specialist",
    location: "Philadelphia, PA",
    phone: "(215) 395-8959",
    email: "santwine@consumerlawfirm.com",
    image:  abogados5,
    linkedIn: "https://linkedin.com/in/stephen-antwine",
    
    bioKey: "team_stephen_bio",
    quoteKey: "team_stephen_quote",
    
    specialties: [
      "specialty_employment_immigration",
      "specialty_h1b_visas",
      "specialty_green_cards"
    ],
    
    languages: ["English", "French"],
    experience: "12+",
    
    education: [
      { degreeKey: "team_stephen_degree_1", schoolKey: "team_stephen_school_1", year: "2008" },
      { degreeKey: "team_stephen_degree_2", schoolKey: "team_stephen_school_2", year: "2005" }
    ],
    
    barAdmissions: [
      "bar_pennsylvania",
      "bar_new_jersey"
    ],
    
    achievements: [
      "achievement_stephen_1",
      "achievement_stephen_2"
    ],
    
    publications: [
      { titleKey: "publication_stephen_1", yearKey: "2021" }
    ],
    
    associations: [
      "association_aila",
      "association_philadelphia_bar"
    ]
},
{
  id: 8,
  slug: "dan-berger",
  name: "Dan H. Berger",
role: "associate",
position: "corporate_compliance_advisor",
  location: "Philadelphia, PA",
  phone: "(215) 395-8959",
  email: "dberger@consumerlawfirm.com",
  image: abogados4,
  linkedIn: "https://linkedin.com/in/dan-berger",
  
  bioKey: "team_dan_bio",
  quoteKey: "team_dan_quote",
  
  specialties: [
    "specialty_corporate_immigration",
    "specialty_compliance",
    "specialty_i9_verification"
  ],
  
  languages: ["English", "Mandarin"],
  experience: "10+",
  
  education: [
    { degreeKey: "team_dan_degree_1", schoolKey: "team_dan_school_1", year: "2010" },
    { degreeKey: "team_dan_degree_2", schoolKey: "team_dan_school_2", year: "2013" }
  ],
  
  barAdmissions: [
    "bar_pennsylvania",
    "bar_new_jersey"
  ],
  
  achievements: [
    "achievement_dan_1",
    "achievement_dan_2"
  ],
  
  publications: [
    { titleKey: "publication_dan_1", yearKey: "2021" }
  ],
  
  associations: [
    "association_aila",
    "association_shrm",
    "association_corporate_counsel"
  ]
},

  {
    id: 10,
    slug: "david-chen",
    name: "David Chen",
role: "partner",
position: "business_development_director",
    location: "San Francisco, CA",
    phone: "(415) 567-8901",
    email: "dchen@consumerlawfirm.com",
    image: abogados1,
    linkedIn: "https://linkedin.com/in/david-chen-immigration",
    
    bioKey: "team_david_bio",
    quoteKey: "team_david_quote",
    
    specialties: [
      "specialty_business_immigration",
      "specialty_employment_visas",
      "specialty_investor_visas"
    ],
    
    languages: ["English", "Mandarin", "Cantonese"],
    experience: "17+",
    
    education: [
      { degreeKey: "team_david_degree_1", schoolKey: "team_david_school_1", year: "2002" },
      { degreeKey: "team_david_degree_2", schoolKey: "team_david_school_2", year: "2005" }
    ],
    
    barAdmissions: [
      "bar_california",
      "bar_ninth_circuit"
    ],
    
    achievements: [
      "achievement_david_1",
      "achievement_david_2"
    ],
    
    publications: [
      { titleKey: "publication_david_1", yearKey: "2022" },
      { titleKey: "publication_david_2", yearKey: "2020" }
    ],
    
    associations: [
      "association_aila",
      "association_asian_pacific_bar",
      "association_california_bar"
    ]
  },
];

// Helper function to get member by slug
export const getTeamMemberBySlug = (slug) => {
  return teamMembers.find(member => member.slug === slug);
};

// Helper function to get members by role
export const getTeamMembersByRole = (role) => {
  return teamMembers.filter(member => member.role === role);
};