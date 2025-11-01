export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Wilczak",
    url: "https://dwcode.pl",
    image: "https://dwcode.pl/logo.png",
    sameAs: [
      "https://linkedin.com/in/daniel-wilczak",
      "https://github.com/WilczakDaniel",
    ],
    jobTitle: "Fullstack .NET Developer",
    worksFor: {
      "@type": "Organization",
      name: "SpyroSoft",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "College of Economics and Computer Science in Cracow",
    },
    knowsAbout: [
      "C#",
      "ASP.NET",
      ".NET Framework",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Azure",
      "Docker",
    ],
    description:
      "Passionate Fullstack .NET Developer with 3 years of professional experience, committed to continuous learning, innovation, and collaboration.",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
