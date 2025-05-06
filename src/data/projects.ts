
export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'Enterprise dashboard with predictive analytics capabilities, real-time monitoring, and customizable data visualizations.',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Cloud-Native Microservices Architecture',
    description: 'Scalable microservices platform with containerization, service mesh, and automated deployment pipelines.',
    technologies: ['Kubernetes', 'Docker', 'Go', 'Istio', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Real-Time Collaboration Tool',
    description: 'Interactive workspace allowing teams to collaborate on documents, designs, and code in real-time.',
    technologies: ['WebSockets', 'React', 'Node.js', 'MongoDB', 'Redis'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Serverless E-commerce Backend',
    description: 'Fully serverless backend infrastructure for e-commerce platforms with event-driven architecture.',
    technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'EventBridge', 'CDK'],
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'Machine Learning Operations Platform',
    description: 'End-to-end MLOps solution for model training, versioning, deployment, and monitoring in production environments.',
    technologies: ['Python', 'Kubernetes', 'TensorFlow', 'Kubeflow', 'GitOps'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
];
