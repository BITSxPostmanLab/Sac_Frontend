export const initialNodes = [
  {
    id: "talks",
    type: "default",
    data: { label: <span className="text-lg">TALKS</span> },
    position: { x: 400, y: 400 },
    className:
      "bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold",
  },
  {
    id: "research-intern",
    type: "default",
    data: { label: <span className="text-lg">RESEARCH INTERN TALK</span> },
    position: { x: 400, y: 250 },
    className: "bg-background border-2 px-4 py-2 rounded-lg",
  },
  {
    id: "project-courses",
    type: "default",
    data: { label: <span className="text-lg">PROJECT COURSES</span> },
    position: { x: 150, y: 400 },
    className: "bg-background border-2 px-4 py-2 rounded-lg",
  },
  {
    id: "placement-talks",
    type: "default",
    data: { label: <span className="text-lg">PLACEMENT TALKS</span> },
    position: { x: 650, y: 400 },
    className: "bg-background border-2 px-4 py-2 rounded-lg",
  },
  {
    id: "summer-intern",
    type: "default",
    data: { label: <span className="text-lg">SUMMER INTERN TALK</span> },
    position: { x: 400, y: 550 },
    className: "bg-background border-2 py-2 rounded-lg",
  },
  {
    id: "ri-2021",
    data: { label: <span className="text-lg">2021</span> },
    position: { x: 110, y: 100 },
    className: "bg-muted px-4 py-2 rounded-lg ",
  },
  {
    id: "ri-2023",
    data: { label: <span className="text-lg">2023</span> },
    position: { x: 310, y: 100 },
    className: "bg-muted px-4 py-2 rounded-lg",
  },
  {
    id: "ri-2024",
    data: { label: <span className="text-lg">2024</span> },
    position: { x: 510, y: 100 },
    className: "bg-muted px-4 py-2 rounded-lg",
  },
  {
    id: "ri-2025",
    data: { label: <span className="text-lg">2025</span> },
    position: { x: 710, y: 100 },
    className: "bg-muted px-4 py-2 rounded-lg",
  },
  {
    id: "si-2021",
    data: { label: <span className="text-lg">2021</span> },
    position: { x: 110, y: 700 },
    className: "bg-muted px-2 py-2 rounded-lg",
  },
  {
    id: "si-2023",
    data: { label: <span className="text-lg">2023</span> },
    position: { x: 310, y: 700 },
    className: "bg-muted px-2 py-2 rounded-lg ",
  },
  {
    id: "si-2024",
    data: { label: <span className="text-lg">2024</span> },
    position: { x: 510, y: 700 },
    className: "bg-muted px-2 py-2 rounded-lg",
  },
  {
    id: "si-2025",
    data: { label: <span className="text-lg">2025</span> },
    position: { x: 710, y: 700 },
    className: "bg-muted px-2 py-2 rounded-lg",
  },
];
export const initialEdges = [
  { id: "e1", source: "talks", target: "research-intern" },
  {
    id: "e2",
    source: "research-intern",
    target: "project-courses",
    sourceHandle: "left",
    targetHandle: "right",
  },
  { id: "e3", source: "talks", target: "placement-talks" },
  { id: "e4", source: "talks", target: "summer-intern" },
  // // Research Intern year connections
  { id: "e5", source: "ri-2021", target: "research-intern" },
  { id: "e6", source: "ri-2023", target: "research-intern" },
  { id: "e7", source: "ri-2024", target: "research-intern" },
  { id: "e8", source: "ri-2025", target: "research-intern" },

  // Summer Intern year connections
  { id: "e9", source: "summer-intern", target: "si-2021" },
  { id: "e10", source: "summer-intern", target: "si-2023" },
  { id: "e11", source: "summer-intern", target: "si-2024" },
  { id: "e12", source: "summer-intern", target: "si-2025" },
];

export const defaultImageUrl = "https://images.unsplash.com/photo-1669352311123-085520652a65?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


export const dataset = [
  {
    "program": "sample",
    "org": "orgX",
    "start": "Jan 1, 2025",
    "end": "Feb 1, 2025",
    "internship": "Yes",
    "domain": "AI/ML",
    "recurring": "No",
    "skills": "DS, ML"
  },
  {
    "program": "techSpark",
    "org": "techNova",
    "start": "Mar 10, 2025",
    "end": "Apr 10, 2025",
    "internship": "Yes",
    "domain": "FinTech",
    "recurring": "Yes",
    "skills": "Algo Dev, Strategy"
  },
  {
    "program": "codeClash",
    "org": "codeInc",
    "start": "Apr 2, 2025",
    "end": "Apr 20, 2025",
    "internship": "No",
    "domain": "IT",
    "recurring": "Yes",
    "skills": "Problem-solving, DSA"
  },
  {
    "program": "quantCup",
    "org": "quantify",
    "start": "Feb 5, 2025",
    "end": "Mar 1, 2025",
    "internship": "No",
    "domain": "Quant",
    "recurring": "Yes",
    "skills": "Alpha Gen, Risk Mgmt"
  },
  {
    "program": "hackHub",
    "org": "innoTech",
    "start": "May 1, 2025",
    "end": "May 15, 2025",
    "internship": "Yes",
    "domain": "Blockchain",
    "recurring": "Yes",
    "skills": "Web3, Gaming"
  },
  {
    "program": "dataJam",
    "org": "dataGen",
    "start": "Jun 1, 2025",
    "end": "Jul 1, 2025",
    "internship": "Yes",
    "domain": "Data",
    "recurring": "No",
    "skills": "Analysis, SQL"
  },
  {
    "program": "aiCamp",
    "org": "aiVault",
    "start": "Jul 15, 2025",
    "end": "Aug 15, 2025",
    "internship": "Yes",
    "domain": "AI/ML",
    "recurring": "Yes",
    "skills": "LLMs, RAG"
  },
  {
    "program": "swiftGo",
    "org": "applix",
    "start": "Feb 1, 2025",
    "end": "Feb 28, 2025",
    "internship": "No",
    "domain": "IT",
    "recurring": "Yes",
    "skills": "iOS Dev"
  },
  {
    "program": "bizSolve",
    "org": "ey",
    "start": "Jan 10, 2025",
    "end": "Mar 10, 2025",
    "internship": "Yes",
    "domain": "Consulting",
    "recurring": "Yes",
    "skills": "Biz Strategy"
  },
  {
    "program": "entQuest",
    "org": "harvardX",
    "start": "Aug 1, 2025",
    "end": "Sep 1, 2025",
    "internship": "No",
    "domain": "Entrepreneurship",
    "recurring": "Yes",
    "skills": "Startup Dev"
  },  {
    "program": "sample",
    "org": "orgX",
    "start": "Jan 1, 2025",
    "end": "Feb 1, 2025",
    "internship": "Yes",
    "domain": "AI/ML",
    "recurring": "No",
    "skills": "DS, ML"
  },
  {
    "program": "techSpark",
    "org": "techNova",
    "start": "Mar 10, 2025",
    "end": "Apr 10, 2025",
    "internship": "Yes",
    "domain": "FinTech",
    "recurring": "Yes",
    "skills": "Algo Dev, Strategy"
  },
  {
    "program": "codeClash",
    "org": "codeInc",
    "start": "Apr 2, 2025",
    "end": "Apr 20, 2025",
    "internship": "No",
    "domain": "IT",
    "recurring": "Yes",
    "skills": "Problem-solving, DSA"
  },
  {
    "program": "quantCup",
    "org": "quantify",
    "start": "Feb 5, 2025",
    "end": "Mar 1, 2025",
    "internship": "No",
    "domain": "Quant",
    "recurring": "Yes",
    "skills": "Alpha Gen, Risk Mgmt"
  },
  {
    "program": "hackHub",
    "org": "innoTech",
    "start": "May 1, 2025",
    "end": "May 15, 2025",
    "internship": "Yes",
    "domain": "Blockchain",
    "recurring": "Yes",
    "skills": "Web3, Gaming"
  },
  {
    "program": "dataJam",
    "org": "dataGen",
    "start": "Jun 1, 2025",
    "end": "Jul 1, 2025",
    "internship": "Yes",
    "domain": "Data",
    "recurring": "No",
    "skills": "Analysis, SQL"
  },
  {
    "program": "aiCamp",
    "org": "aiVault",
    "start": "Jul 15, 2025",
    "end": "Aug 15, 2025",
    "internship": "Yes",
    "domain": "AI/ML",
    "recurring": "Yes",
    "skills": "LLMs, RAG"
  },
  {
    "program": "swiftGo",
    "org": "applix",
    "start": "Feb 1, 2025",
    "end": "Feb 28, 2025",
    "internship": "No",
    "domain": "IT",
    "recurring": "Yes",
    "skills": "iOS Dev"
  },
  {
    "program": "bizSolve",
    "org": "ey",
    "start": "Jan 10, 2025",
    "end": "Mar 10, 2025",
    "internship": "Yes",
    "domain": "Consulting",
    "recurring": "Yes",
    "skills": "Biz Strategy"
  },
  {
    "program": "entQuest",
    "org": "harvardX",
    "start": "Aug 1, 2025",
    "end": "Sep 1, 2025",
    "internship": "No",
    "domain": "Entrepreneurship",
    "recurring": "Yes",
    "skills": "Startup Dev"
  }
]