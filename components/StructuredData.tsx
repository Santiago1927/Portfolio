export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Santiago Andrade Santacruz",
    alternateName: "David Santiago Andrade",
    jobTitle: "Full Stack Developer",
    description:
      "Systems Engineer and Full Stack Developer specialized in React, Next.js, TypeScript, Firebase and MongoDB with over 3 years of experience.",
    url: "https://davidandrade.dev",
    image: "https://davidandrade.dev/profile.jpg",
    email: "davidandradesantacruz9.3@gmail.com",
    telephone: "+573215028605",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pasto",
      addressRegion: "Nariño",
      addressCountry: "CO",
    },
    sameAs: [
      "https://github.com/Santiago1927",
      "https://www.linkedin.com/in/santiagoa1927/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Firebase",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "Full Stack Development",
      "Web Development",
      "E-commerce",
      "API Development",
    ],
    workExample: [
      {
        "@type": "CreativeWork",
        name: "Real Estate Management System",
        description:
          "Enterprise-grade platform for real estate property management with Firebase authentication and advanced search features.",
        url: "https://www.realhaus.com.co/",
      },
      {
        "@type": "CreativeWork",
        name: "E-commerce Lacteos Don Juan",
        description:
          "Comprehensive online store with product catalog, shopping cart, payment gateway, and administrative panel.",
        url: "http://www.lacteosdonjuan.com/",
      },
      {
        "@type": "CreativeWork",
        name: "Automated Reporting System",
        description:
          "Enterprise solution for automatic report generation in multiple formats (PDF and Excel) with MongoDB integration.",
        url: "http://www.reportes-lacteos-don-juan.vercel.app/",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
