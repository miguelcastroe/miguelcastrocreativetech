export interface Artifact {
  title: string;
  culture: string;
  period: string;
  imageUrl: string;
}

export const artifacts: Artifact[] = [
  {
    title: "Mantle Fragment",
    culture: "Paracas",
    period: "5th–3rd century BCE",
    imageUrl: "/lovable-uploads/ea98ca53-d9a6-4616-9b6b-77d9660c0c45.png"
  },
  {
    title: "Four-Cornered Hat",
    culture: "Wari",
    period: "7th–9th century CE",
    imageUrl: "https://images.metmuseum.org/CRDImages/ao/original/DP-13613-001.jpg"
  },
  {
    title: "Ceremonial Textile",
    culture: "Chancay",
    period: "13th–15th century CE",
    imageUrl: "https://images.metmuseum.org/CRDImages/ao/original/DP18489701.jpg"
  }
];