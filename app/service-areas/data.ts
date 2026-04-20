export type ServiceArea = {
  slug: string;
  name: string;
  shortName: string;
  regionLabel: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  seoTitle: string;
  seoParagraph: string;
  localSupportTitle: string;
  localSupportParagraph: string;
  executionTitle: string;
  executionParagraph: string;
  projectTypesTitle: string;
  projectTypesParagraph: string;
  serviceListIntro: string;
  faqAreaLabel: string;
  faqQuestionOne: string;
  faqAnswerOne: string;
  faqQuestionTwo: string;
  faqAnswerTwo: string;
  faqQuestionThree: string;
  faqAnswerThree: string;
  relatedParagraph: string;
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://xtremeconcretecutting.com";

export const PHONE_DISPLAY = "(252) 582-6094";
export const PHONE_HREF = "tel:+12525826094";
export const EMAIL = "info@xtremeconcretecutting.com";

export const servicesList = [
  "Core Drilling",
  "Concrete Slab Cutting",
  "Concrete Wall Cutting",
  "Reinforced Wall Cutting",
  "Building Demolition",
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "goldsboro-nc",
    name: "Goldsboro, NC",
    shortName: "Goldsboro",
    regionLabel: "Eastern North Carolina",
    intro:
      "Based in Goldsboro, NC, we provide concrete cutting and demolition services for residential, commercial, and contractor projects. If your project needs clean execution, reliable scheduling, and clear communication, we can review the scope and help you move forward.",
    metaTitle:
      "Goldsboro Concrete Cutting & Demolition | Xtreme Concrete Cutting",
    metaDescription:
      "Concrete cutting and demolition services in Goldsboro, NC including core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition.",
    seoTitle: "Concrete cutting and demolition in Goldsboro, NC",
    seoParagraph:
      "We provide concrete cutting and demolition services throughout Goldsboro, including core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition. Our work is planned around site conditions, safety, and dependable scheduling for residential, commercial, and contractor projects.",
    localSupportTitle: "Goldsboro project support",
    localSupportParagraph:
      "Goldsboro is one of our primary service areas, and we regularly work with local property owners, builders, and contractors who need responsive communication and dependable scheduling.",
    executionTitle: "Clean, controlled work in Goldsboro",
    executionParagraph:
      "From access openings and trench cuts to wall modifications and demolition, we focus on careful planning, professional equipment, and controlled execution that keeps projects moving.",
    projectTypesTitle: "Residential, commercial, and contractor jobs",
    projectTypesParagraph:
      "We support home projects, commercial build-outs, contractor scopes, utility access openings, slab modifications, and demolition work that requires safe and precise cutting.",
    serviceListIntro: "Common services we provide in Goldsboro include:",
    faqAreaLabel: "Goldsboro, NC",
    faqQuestionOne:
      "Do you provide concrete cutting services in Goldsboro, NC?",
    faqAnswerOne:
      "Yes. We provide core drilling, slab cutting, wall cutting, and reinforced wall cutting in Goldsboro for residential, commercial, and contractor projects.",
    faqQuestionTwo: "Do you provide demolition services in Goldsboro, NC?",
    faqAnswerTwo:
      "Yes. We provide demolition services in Goldsboro with controlled removal, dependable scheduling, and clear communication.",
    faqQuestionThree:
      "How do I request a quote for a project in Goldsboro, NC?",
    faqAnswerThree:
      "Send us your project details, job-site location, and timeline. We will review the scope and confirm availability.",
    relatedParagraph:
      "Goldsboro is one of our main service areas, and we regularly support projects that need dependable concrete cutting and demolition work.",
  },

  {
    slug: "wayne-county-nc",
    name: "Wayne County, NC",
    shortName: "Wayne County",
    regionLabel: "Eastern North Carolina",
    intro:
      "We serve Wayne County with concrete cutting and demolition services for residential, commercial, and contractor projects. We review each job based on location, access, and scheduling before confirming availability.",
    metaTitle:
      "Wayne County Concrete Cutting & Demolition | Xtreme Concrete Cutting",
    metaDescription:
      "Concrete cutting and demolition services in Wayne County, NC including core drilling, slab cutting, wall cutting, and demolition.",
    seoTitle: "Concrete cutting and demolition in Wayne County, NC",
    seoParagraph:
      "We provide concrete cutting and demolition services across Wayne County, NC, including core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition. Each project is planned around site conditions, access, and scheduling needs.",
    localSupportTitle: "Wayne County coverage",
    localSupportParagraph:
      "Because Wayne County includes a range of job sites, we review each project carefully to confirm travel, access, and scheduling.",
    executionTitle: "Planned work for varied job sites",
    executionParagraph:
      "Projects across Wayne County vary in access and timeline, so we focus on coordination, professional equipment, and clear communication from the start.",
    projectTypesTitle: "Support for a range of county projects",
    projectTypesParagraph:
      "We support home projects, commercial work, contractor scopes, access openings, slab cutting, and demolition jobs throughout Wayne County.",
    serviceListIntro: "Common services we provide across Wayne County include:",
    faqAreaLabel: "Wayne County, NC",
    faqQuestionOne:
      "Do you provide concrete cutting services in Wayne County, NC?",
    faqAnswerOne:
      "Yes. We provide core drilling, slab cutting, wall cutting, and reinforced wall cutting across Wayne County.",
    faqQuestionTwo:
      "Do you provide demolition services in Wayne County, NC?",
    faqAnswerTwo:
      "Yes. We provide demolition services for residential, commercial, and contractor projects throughout Wayne County.",
    faqQuestionThree:
      "How do I request a quote for a project in Wayne County, NC?",
    faqAnswerThree:
      "Send us your address, project scope, and timeline. We will review the location and confirm availability.",
    relatedParagraph:
      "We travel throughout Wayne County for concrete cutting and demolition projects and confirm availability based on your location and timeline.",
  },

  {
    slug: "wilson-nc",
    name: "Wilson, NC",
    shortName: "Wilson",
    regionLabel: "Eastern North Carolina",
    intro:
      "We provide concrete cutting and demolition services in Wilson, reviewing each project based on location, access, and scheduling needs.",
    metaTitle:
      "Wilson Concrete Cutting & Demolition | Xtreme Concrete Cutting",
    metaDescription:
      "Concrete cutting and demolition services in Wilson, NC including slab cutting, wall cutting, and demolition.",
    seoTitle: "Concrete cutting and demolition in Wilson, NC",
    seoParagraph:
      "We provide concrete cutting and demolition services in Wilson, NC including core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition. Our work focuses on precision, coordination, and reliable scheduling.",
    localSupportTitle: "Wilson scheduling and coordination",
    localSupportParagraph:
      "Wilson projects depend on clear communication and scheduling, which is why we review each job before confirming availability.",
    executionTitle: "Precision-focused work for Wilson jobs",
    executionParagraph:
      "We handle utility openings, slab cutting, structural modifications, and demolition with clean execution and controlled work areas.",
    projectTypesTitle: "Concrete cutting for many project needs",
    projectTypesParagraph:
      "We support residential improvements, contractor work, commercial projects, slab cutting, wall cutting, and demolition in Wilson.",
    serviceListIntro: "Common services we provide in Wilson include:",
    faqAreaLabel: "Wilson, NC",
    faqQuestionOne: "Do you provide concrete cutting services in Wilson, NC?",
    faqAnswerOne:
      "Yes. We provide core drilling, slab cutting, wall cutting, and reinforced wall cutting in Wilson.",
    faqQuestionTwo: "Do you provide demolition services in Wilson, NC?",
    faqAnswerTwo:
      "Yes. We provide demolition services in Wilson with controlled removal and reliable scheduling.",
    faqQuestionThree:
      "How do I request a quote for a project in Wilson, NC?",
    faqAnswerThree:
      "Send us your project details, location, and timeline. We will review and confirm availability.",
    relatedParagraph:
      "Wilson projects often require clear timelines and coordination, and we review each job before scheduling.",
  },

  {
    slug: "smithfield-nc",
    name: "Smithfield, NC",
    shortName: "Smithfield",
    regionLabel: "Eastern North Carolina",
    intro:
      "We provide concrete cutting and demolition services in Smithfield for residential, commercial, and contractor projects with a focus on precision and scheduling.",
    metaTitle:
      "Smithfield Concrete Cutting & Demolition | Xtreme Concrete Cutting",
    metaDescription:
      "Concrete cutting and demolition services in Smithfield, NC including slab cutting, wall cutting, and demolition.",
    seoTitle: "Concrete cutting and demolition in Smithfield, NC",
    seoParagraph:
      "We provide concrete cutting and demolition services in Smithfield, NC including core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition. Projects are planned around access, timing, and job-site coordination.",
    localSupportTitle: "Smithfield project coverage",
    localSupportParagraph:
      "We support Smithfield clients with responsive communication and dependable scheduling.",
    executionTitle: "Controlled work with dependable service",
    executionParagraph:
      "We handle access openings, slab cutting, wall modifications, and demolition with controlled execution and professional equipment.",
    projectTypesTitle: "Service for residential and commercial work",
    projectTypesParagraph:
      "We support home projects, contractor work, commercial updates, slab cutting, wall cutting, and demolition in Smithfield.",
    serviceListIntro: "Common services we provide in Smithfield include:",
    faqAreaLabel: "Smithfield, NC",
    faqQuestionOne:
      "Do you provide concrete cutting services in Smithfield, NC?",
    faqAnswerOne:
      "Yes. We provide core drilling, slab cutting, wall cutting, and reinforced wall cutting in Smithfield.",
    faqQuestionTwo:
      "Do you provide demolition services in Smithfield, NC?",
    faqAnswerTwo:
      "Yes. We provide demolition services in Smithfield based on project scope and scheduling.",
    faqQuestionThree:
      "How do I request a quote for a project in Smithfield, NC?",
    faqAnswerThree:
      "Send us your project details and timeline. We will review and confirm availability.",
    relatedParagraph:
      "We support Smithfield projects that need professional concrete cutting and demolition with clear scheduling.",
  },

  {
    slug: "selma-nc",
    name: "Selma, NC",
    shortName: "Selma",
    regionLabel: "Eastern North Carolina",
    intro:
      "We provide concrete cutting and demolition services in Selma and review each project based on scope, access, and scheduling.",
    metaTitle:
      "Selma Concrete Cutting & Demolition | Xtreme Concrete Cutting",
    metaDescription:
      "Concrete cutting and demolition services in Selma, NC including slab cutting, wall cutting, and demolition.",
    seoTitle: "Concrete cutting and demolition in Selma, NC",
    seoParagraph:
      "We provide concrete cutting and demolition services in Selma, NC including core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition with a focus on accuracy and scheduling.",
    localSupportTitle: "Selma service and availability",
    localSupportParagraph:
      "We review Selma projects to confirm access, scheduling, and availability before work begins.",
    executionTitle: "Careful planning for Selma projects",
    executionParagraph:
      "We focus on clean cuts, controlled execution, and reliable coordination for Selma jobs.",
    projectTypesTitle: "Work for different project types",
    projectTypesParagraph:
      "We support residential, commercial, contractor, slab cutting, wall cutting, and demolition projects in Selma.",
    serviceListIntro: "Common services we provide in Selma include:",
    faqAreaLabel: "Selma, NC",
    faqQuestionOne: "Do you provide concrete cutting services in Selma, NC?",
    faqAnswerOne:
      "Yes. We provide core drilling, slab cutting, wall cutting, and reinforced wall cutting in Selma.",
    faqQuestionTwo: "Do you provide demolition services in Selma, NC?",
    faqAnswerTwo:
      "Yes. We provide demolition services in Selma with controlled removal and scheduling.",
    faqQuestionThree:
      "How do I request a quote for a project in Selma, NC?",
    faqAnswerThree:
      "Send us your Selma project details and timeline. We will review and confirm availability.",
    relatedParagraph:
      "We review Selma projects to confirm scheduling and coverage based on job details.",
  },

  {
    slug: "kinston-nc",
    name: "Kinston, NC",
    shortName: "Kinston",
    regionLabel: "Eastern North Carolina",
    intro:
      "We provide concrete cutting and demolition services in Kinston and review each project based on location, access, and scheduling needs.",
    metaTitle:
      "Kinston Concrete Cutting & Demolition | Xtreme Concrete Cutting",
    metaDescription:
      "Concrete cutting and demolition services in Kinston, NC including slab cutting, wall cutting, and demolition.",
    seoTitle: "Concrete cutting and demolition in Kinston, NC",
    seoParagraph:
      "We provide concrete cutting and demolition services in Kinston, NC including core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition with a focus on precision and coordination.",
    localSupportTitle: "Kinston scheduling and project review",
    localSupportParagraph:
      "We review Kinston projects to confirm access, distance, and scheduling before starting work.",
    executionTitle: "Professional support for Kinston jobs",
    executionParagraph:
      "We plan Kinston projects around safety, precision, and controlled job-site execution.",
    projectTypesTitle: "Service for many concrete cutting needs",
    projectTypesParagraph:
      "We support residential, commercial, and contractor projects in Kinston including slab cutting, wall cutting, and demolition.",
    serviceListIntro: "Common services we provide in Kinston include:",
    faqAreaLabel: "Kinston, NC",
    faqQuestionOne:
      "Do you provide concrete cutting services in Kinston, NC?",
    faqAnswerOne:
      "Yes. We provide core drilling, slab cutting, wall cutting, and reinforced wall cutting in Kinston.",
    faqQuestionTwo:
      "Do you provide demolition services in Kinston, NC?",
    faqAnswerTwo:
      "Yes. We provide demolition services in Kinston with controlled removal and scheduling.",
    faqQuestionThree:
      "How do I request a quote for a project in Kinston, NC?",
    faqAnswerThree:
      "Send us your Kinston project details and timeline. We will review and confirm availability.",
    relatedParagraph:
      "Kinston is one of the surrounding areas we serve, and we review each project to confirm scheduling and coverage.",
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}