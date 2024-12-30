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
