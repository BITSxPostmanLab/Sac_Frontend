import { BlogPostType } from "./types";
export const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "Understanding TypeScript",
    content: `TypeScript is a superset of JavaScript that adds static typing, making it easier to detect errors during development. 
      It was developed by Microsoft to address scalability issues in large JavaScript applications. With TypeScript, developers can 
      use interfaces, types, and advanced object-oriented programming features like inheritance and polymorphism. The TypeScript 
      compiler converts TypeScript code into plain JavaScript that runs on any browser or JavaScript engine. Many popular frameworks, 
      including Angular, use TypeScript as their primary langing a component-based architecture. React applications consist of reusable components that manage their own 
      state and efficiently update when data changes. React uses a virtual DOM to optimize rendering performance, ensuring fast and 
      smooth user experiences. JSX, a syntax extension, allows developers to write HTML-like code inside JavaScript. React is widely 
      adopted for building single-page applications (SPAs) and has a rich ecosystem, including tools like Redux for state management 
      and Next.js for server-siduage. It also supports modern ECMAScript features and helps developers 
      write more maintainable and robust code. TypeScript has gained widespread adoption due to its ability to catch potential 
      runtime errors during compile time. Companies like Google, Airbnb, and Microsoft rely on TypeScript for their production applications.`,
    image: "/resources/minor.png",
    created_at: "2024-11-10T12:00:00.000Z",
    updated_at: "2024-11-10T12:30:00.000Z",
    display_author_name: "Admin",
    comments_enabled: true,
    comments: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        post: 1,
        content: "Great article! Very informative.",
        parent: 0,
        created_at: "2024-02-05T11:00:00Z",
        is_approved: true,
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        post: 1,
        content: "I agree with Alice. The explanations are clear.",
        parent: 1,
        created_at: "2024-02-05T11:30:00Z",
        is_approved: true,
      },
      {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        post: 1,
        content: "Could you elaborate more on interfaces?",
        parent: 0,
        created_at: "2024-02-05T12:00:00Z",
        is_approved: true,
      },
      {
        id: 4,
        name: "David Wilson",
        email: "david@example.com",
        post: 1,
        content: "Interfaces are like contracts for your types...",
        parent: 3,
        created_at: "2024-02-05T12:30:00Z",
        is_approved: true,
      },
      {
        id: 5,
        name: "Eve Anderson",
        email: "eve@example.com",
        post: 1,
        content: "That's a great explanation, David!",
        parent: 4,
        created_at: "2024-02-05T13:00:00Z",
        is_approved: true,
      },
    ],
  },
  {
    id: 2,
    title: "Introduction to React",
    content: `React is a JavaScript library for building user interfaces. Developed by Facebook, React enables developers to build 
      interactive UIs using a component-based architecture. React applications consist of reusable components that manage their own 
      state and efficiently update when data changes. React uses a virtual DOM to optimize rendering performance, ensuring fast and 
      smooth user experiences. JSX, a syntax extension, allows developers to write HTML-like code inside JavaScript. React is widely 
      adopted for building single-page applications (SPAs) and has a rich ecosystem, including tools like Redux for state management 
      and Next.js for server-side rendering. React’s declarative programming model makes it easy to understand and debug applications. 
      Many companies, including Facebook, Instagram, and Airbnb, use React to build scalable and maintainable web applications.ing a component-based architecture. React applications consist of reusable components that manage their own 
      state and efficiently update when data changes. React uses a virtual DOM to optimize rendering performance, ensuring fast and 
      smooth user experiences. JSX, a syntax extension, allows developers to write HTML-like code inside JavaScript. React is widely 
      adopted for building single-page applications (SPAs) and has a rich ecosystem, including tools like Redux for state management 
      and Next.js for server-sid`,
    image: "/resources/minor.png",
    created_at: "2024-11-10T13:00:00.000Z",
    updated_at: "2024-11-10T13:30:00.000Z",
    display_author_name: "Admin",
    comments_enabled: true,
    comments: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        post: 1,
        content: "Great article! Very informative.",
        parent: 0,
        created_at: "2024-02-05T11:00:00Z",
        is_approved: true,
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        post: 1,
        content: "I agree with Alice. The explanations are clear.",
        parent: 1,
        created_at: "2024-02-05T11:30:00Z",
        is_approved: true,
      },
      {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        post: 1,
        content: "Could you elaborate more on interfaces?",
        parent: 0,
        created_at: "2024-02-05T12:00:00Z",
        is_approved: true,
      },
      {
        id: 4,
        name: "David Wilson",
        email: "david@example.com",
        post: 1,
        content: "Interfaces are like contracts for your types...",
        parent: 3,
        created_at: "2024-02-05T12:30:00Z",
        is_approved: true,
      },
      {
        id: 5,
        name: "Eve Anderson",
        email: "eve@example.com",
        post: 1,
        content: "That's a great explanation, David!",
        parent: 4,
        created_at: "2024-02-05T13:00:00Z",
        is_approved: true,
      },
    ],
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    content: `Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling developers to run JavaScript outside the browser. 
      It is widely used for building scalable and high-performance applications. Node.js uses a non-blocking, event-driven architecture, 
      making it ideal for handling asynchronous tasks sucing a component-based architecture. React applications consist of reusable components that manage their own 
      state and efficiently update when data changes. React uses a virtual DOM to optimize rendering performance, ensuring fast and 
      smooth user experiences. JSX, a syntax extension, allows developers to write HTML-like code inside JavaScript. React is widely 
      adopted for building single-page applications (SPAs) and has a rich ecosystem, including tools like Redux for state management 
      and Next.js for server-sidh as file operations, database interactions, and API requests. The Node.js 
      ecosystem includes npm (Node Package Manager), which provides access to thousands of open-source libraries. Many web applications, 
      including Netflix, LinkedIn, and PayPal, use Node.js for backend development. Express.js, a popular framework, simplifies building 
      web applications using Node.js. With features like real-time capabilities and microservices support, Node.js is a powerful tool 
      for modern web development.`,
    image: "/resources/minor.png",
    created_at: "2024-11-10T14:00:00.000Z",
    updated_at: "2024-11-10T14:30:00.000Z",
    display_author_name: "Admin",
    comments_enabled: false,
    comments: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        post: 1,
        content: "Great article! Very informative.",
        parent: 0,
        created_at: "2024-02-05T11:00:00Z",
        is_approved: true,
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        post: 1,
        content: "I agree with Alice. The explanations are clear.",
        parent: 1,
        created_at: "2024-02-05T11:30:00Z",
        is_approved: true,
      },
      {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        post: 1,
        content: "Could you elaborate more on interfaces?",
        parent: 0,
        created_at: "2024-02-05T12:00:00Z",
        is_approved: true,
      },
      {
        id: 4,
        name: "David Wilson",
        email: "david@example.com",
        post: 1,
        content: "Interfaces are like contracts for your types...",
        parent: 3,
        created_at: "2024-02-05T12:30:00Z",
        is_approved: true,
      },
      {
        id: 5,
        name: "Eve Anderson",
        email: "eve@example.com",
        post: 1,
        content: "That's a great explanation, David!",
        parent: 4,
        created_at: "2024-02-05T13:00:00Z",
        is_approved: true,
      },
    ],
  },
  // Add similar expanded content for the remaining blog posts...
];
