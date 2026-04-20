export type ServiceItem = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  desc: string;
  points: string[];
  heroTitle: string;
  heroDesc: string;
  introTitle: string;
  introBody: string;
  seoTitle: string;
  seoDescription: string;
  bodySections: {
    title: string;
    body: string[];
  }[];
};

export const services: ServiceItem[] = [
  {
    id: "core-drilling",
    slug: "core-drilling",
    title: "Core Drilling",
    shortTitle: "Core Drilling",
    desc: "Clean, accurate core drilling for plumbing, electrical, HVAC, and structural penetrations.",
    points: [
      "Professional equipment for controlled, accurate coring",
      "Ideal for plumbing, electrical, HVAC, and structural work",
      "Clean execution with safety-focused job site practices",
    ],
    heroTitle: "Core drilling services",
    heroDesc:
      "Professional core drilling services in Eastern North Carolina for plumbing, electrical, HVAC, structural, and utility penetrations.",
    introTitle: "Accurate concrete coring for residential and commercial projects",
    introBody:
      "Our core drilling services are designed for clean, precise openings in concrete and masonry. Whether the project requires penetrations for plumbing lines, electrical conduits, HVAC systems, or structural applications, we focus on accuracy, safety, and dependable execution.",
    seoTitle: "Core Drilling Services in Eastern NC",
    seoDescription:
      "Professional core drilling services in Eastern North Carolina, including Goldsboro, Raleigh, and Wilmington. Clean, accurate concrete coring for plumbing, electrical, HVAC, and structural work.",
    bodySections: [
      {
        title: "When core drilling is the right solution",
        body: [
          "Core drilling is ideal when you need smooth, circular openings in concrete for pipes, conduits, anchors, drains, and utility lines.",
          "It is commonly used on residential, commercial, and contractor-led jobs where precision matters and surrounding surfaces need to remain as clean and controlled as possible.",
        ],
      },
      {
        title: "What clients can expect",
        body: [
          "We approach each coring job with careful planning, controlled equipment, and a safety-focused process that helps keep the work accurate and efficient.",
          "From smaller utility penetrations to larger structural drilling needs, our goal is to provide reliable scheduling, clean execution, and clear communication throughout the project.",
        ],
      },
    ],
  },
  {
    id: "slab-cutting",
    slug: "concrete-slab-cutting",
    title: "Concrete Slab Cutting",
    shortTitle: "Slab Cutting",
    desc: "Precise concrete slab cutting for floors, roads, driveways, trenching, and commercial slabs.",
    points: [
      "Straight, controlled cuts for slab removal and access",
      "Suitable for residential, commercial, and contractor work",
      "Reliable scheduling and clear communication from start to finish",
    ],
    heroTitle: "Concrete slab cutting services",
    heroDesc:
      "Professional concrete slab cutting in Eastern North Carolina for floors, trenching, driveways, access cuts, and commercial concrete work.",
    introTitle: "Controlled slab cutting for access, removal, and modification",
    introBody:
      "Our concrete slab cutting services are built for projects that require straight, controlled cuts through floors, driveways, paving, and commercial slabs. We help homeowners, contractors, and businesses create access points, remove damaged sections, and prepare concrete surfaces for the next phase of work.",
    seoTitle: "Concrete Slab Cutting Services in Eastern NC",
    seoDescription:
      "Concrete slab cutting services in Eastern North Carolina, including Goldsboro, Raleigh, and Wilmington. Precise slab cutting for floors, trenching, driveways, and commercial projects.",
    bodySections: [
      {
        title: "Common uses for slab cutting",
        body: [
          "Slab cutting is often needed for trenching, utility access, expansion work, floor modifications, driveway removal, and concrete replacement projects.",
          "It is a practical solution when concrete needs to be opened cleanly and accurately without unnecessary damage to surrounding areas.",
        ],
      },
      {
        title: "Why precision matters",
        body: [
          "Straight, well-controlled cuts help keep the project moving, especially when other trades are working on a deadline or when removal needs to happen in a clean, organized way.",
          "We focus on dependable execution, job site safety, and communication so the cutting work supports the bigger project instead of slowing it down.",
        ],
      },
    ],
  },
  {
    id: "wall-cutting",
    slug: "concrete-wall-cutting",
    title: "Concrete Wall Cutting",
    shortTitle: "Wall Cutting",
    desc: "Controlled concrete wall cutting for doors, windows, utilities, and wall modifications.",
    points: [
      "Clean openings for doors, windows, and utility access",
      "Accurate cutting for renovation and structural modifications",
      "Safety-focused work practices on active job sites",
    ],
    heroTitle: "Concrete wall cutting services",
    heroDesc:
      "Concrete wall cutting services in Eastern North Carolina for doors, windows, utility openings, renovations, and structural modifications.",
    introTitle: "Clean wall openings for renovation, utility access, and structural work",
    introBody:
      "Our concrete wall cutting services help create controlled openings in vertical concrete surfaces for doors, windows, utilities, and renovation work. We focus on accuracy and job site safety so the finished opening supports the next stage of the project with minimal disruption.",
    seoTitle: "Concrete Wall Cutting Services in Eastern NC",
    seoDescription:
      "Concrete wall cutting services in Eastern North Carolina, including Goldsboro, Raleigh, and Wilmington. Controlled wall openings for doors, windows, utilities, and renovation work.",
    bodySections: [
      {
        title: "Applications for wall cutting",
        body: [
          "Wall cutting is commonly used for new door openings, window openings, HVAC access, plumbing penetrations, electrical pathways, and structural modifications.",
          "It is especially important on renovation and commercial projects where accuracy, control, and careful coordination matter.",
        ],
      },
      {
        title: "A controlled approach from start to finish",
        body: [
          "We approach each wall cutting project with attention to layout, safety, and clean execution so the opening is completed as planned.",
          "Whether the work is part of a remodel, utility upgrade, or contractor-led buildout, we aim to deliver reliable results that keep the job moving forward.",
        ],
      },
    ],
  },
  {
    id: "reinforced-wall-cutting",
    slug: "reinforced-wall-cutting",
    title: "Reinforced Wall Cutting",
    shortTitle: "Reinforced Wall Cutting",
    desc: "Specialized reinforced wall cutting for heavily reinforced structural concrete where precision and control matter.",
    points: [
      "Built for heavily reinforced structural concrete",
      "Precision cutting where control and accuracy matter most",
      "Experienced, detail-focused execution for demanding projects",
    ],
    heroTitle: "Reinforced wall cutting services",
    heroDesc:
      "Specialized reinforced wall cutting in Eastern North Carolina for structural concrete where precision, control, and careful execution are essential.",
    introTitle: "Specialized cutting for heavily reinforced concrete walls",
    introBody:
      "Reinforced wall cutting requires a more specialized approach than standard wall cutting. When structural concrete contains heavy reinforcement, the work demands careful planning, the right equipment, and controlled execution to achieve a clean result.",
    seoTitle: "Reinforced Wall Cutting Services in Eastern NC",
    seoDescription:
      "Reinforced wall cutting services in Eastern North Carolina, including Goldsboro, Raleigh, and Wilmington. Precision cutting for heavily reinforced structural concrete.",
    bodySections: [
      {
        title: "Where reinforced wall cutting is needed",
        body: [
          "This service is often required on structural projects, commercial buildings, infrastructure work, and renovations involving heavily reinforced concrete walls.",
          "It can be used for access openings, structural modifications, utility pathways, and other situations where reinforced concrete must be cut accurately and safely.",
        ],
      },
      {
        title: "Built for demanding concrete work",
        body: [
          "Projects involving reinforced concrete leave less room for error, which is why control and precision are so important.",
          "We focus on careful execution, clear coordination, and dependable service so demanding cutting work is handled with the attention it requires.",
        ],
      },
    ],
  },
  {
    id: "building-demolition",
    slug: "building-demolition",
    title: "Building Demolition",
    shortTitle: "Building Demolition",
    desc: "Safe building demolition and concrete removal for renovation, rebuild, and site preparation projects.",
    points: [
      "Safe demolition for renovation, rebuild, and site prep",
      "Concrete removal handled with efficiency and control",
      "Clear coordination to keep your project moving forward",
    ],
    heroTitle: "Building demolition services",
    heroDesc:
      "Building demolition and concrete removal services in Eastern North Carolina for renovation, rebuild, and site preparation projects.",
    introTitle: "Controlled demolition for site preparation, renovation, and rebuild work",
    introBody:
      "Our building demolition services are designed for projects that require safe, organized removal of structures or concrete elements as part of renovation, rebuild, or site preparation. We focus on controlled execution, coordination, and efficiency so the next phase of work can begin on schedule.",
    seoTitle: "Building Demolition Services in Eastern NC",
    seoDescription:
      "Building demolition services in Eastern North Carolina, including Goldsboro, Raleigh, and Wilmington. Safe demolition and concrete removal for renovation, rebuild, and site preparation.",
    bodySections: [
      {
        title: "When demolition services are needed",
        body: [
          "Demolition can be part of a larger renovation, a rebuild, a site prep project, or the removal of damaged or outdated structures and concrete sections.",
          "A controlled demolition process helps reduce delays, improve safety, and create a cleaner path for the next stage of construction.",
        ],
      },
      {
        title: "Focused on safety and coordination",
        body: [
          "Demolition work needs more than strength. It needs planning, communication, and attention to the conditions of the site.",
          "We work to complete demolition and removal safely and efficiently so homeowners, contractors, and commercial clients can move forward with confidence.",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}