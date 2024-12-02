export interface Artifact {
  title: string;
  culture: string;
  period: string;
  imageUrl: string;
}

export const artifacts: Artifact[] = [
  {
    title: "Fragment with Feline Motif",
    culture: "Paracas",
    period: "5th–3rd century BCE",
    imageUrl: "/lovable-uploads/6be91619-2241-446a-8c4b-2f4245eec42b.png"
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