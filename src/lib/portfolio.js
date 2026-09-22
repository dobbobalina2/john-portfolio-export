// Public-facing summaries. See docs/content-sources.md for claim scope and sources.
export const profile = {
  name: 'John Kenny',
  title: 'Senior AI / Machine Learning Engineer',
  email: 'JohnKenny6799@gmail.com',
  github: 'https://github.com/dobbobalina2',
  resume: '/resume/John_Kenny_AI_ML_Resume.docx',
  summary: 'I build computer vision systems and the software around them. My work spans dataset creation, detection, segmentation, tracking, and model evaluation, backed by 7+ years building production systems across AI, full-stack applications, fintech, and blockchain.',
};

export const skills = [
  { title: 'AI & computer vision', items: ['PyTorch', 'Transformers', 'Object detection', 'Segmentation', 'Multi-object tracking', 'Model evaluation', 'Calibration'] },
  { title: 'Image & video models', items: ['DINOv2', 'VideoMAE', 'V-JEPA2', 'YOLO11-seg', 'SegFormer', 'Representation learning', 'Fine-tuning'] },
  { title: 'Languages & applications', items: ['Python', 'TypeScript / JavaScript', 'SQL', 'Solidity', 'Go', 'Rust', 'PHP', 'React', 'Next.js', 'Tailwind CSS'] },
  { title: 'Data & infrastructure', items: ['Node.js', 'NestJS', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST', 'Kafka', 'AWS', 'EC2', 'Lambda', 'Fargate', 'CloudWatch', 'Terraform', 'CI/CD'] },
];

export const aiProjects = [
  {
    id: 'detection-tracking',
    number: '01',
    title: 'Detection, segmentation & tracking',
    category: 'Computer vision',
    status: 'Built & evaluated',
    description: 'From a custom high-occlusion dataset to person detection, identity association, and field-landmark segmentation.',
    tags: ['PyTorch', 'YOLO11-seg', 'SegFormer', 'Tracking'],
    approach: 'Built and labeled a 2 GB custom person-detection dataset, automated pre-labeling, and developed a ByteTrack-style association tracker. Combined learned segmentation with RANSAC and Hough transforms to bootstrap field-landmark labels.',
    result: 'The person detector achieved mAP in the 80% range on the internal task. Tracking quality improved by approximately 25%, with roughly 60% improvement across detection/tracking benchmark iterations.',
    scope: 'Measured on the custom dataset and internal detection/tracking benchmarks. These task-specific results reflect the annotation and model iteration process.',
  },
  {
    id: 'image-representations',
    number: '02',
    title: 'Learning structure from football images',
    category: 'Prospex · Image models',
    status: 'Evaluated · selected heads promoted',
    description: 'Paired sideline and end-zone images, DINOv2 representations, and detector geometry for formation attributes.',
    tags: ['DINOv2', 'Late fusion', 'Fine-tuning', 'Game-held-out evaluation'],
    approach: 'Compared frozen DINOv2-small features with fine-tuning the final four transformer blocks. Used reviewed labels, separate attribute heads, and nested whole-game validation across 11 held-out-game folds.',
    result: 'In a separate relationship-feature evaluation on 687 plays, backfield structure improved by 9.80 percentage points in balanced accuracy, eligible distribution by 4.20 points, and quarterback alignment by 8.49 points. Only those three heads were promoted.',
    scope: 'The fine-tuning trial covered 689 plays and raised raw accuracy, but reduced balanced accuracy and macro-F1. I retained the frozen representation. These are different experiments and cohorts; neither result is an overall formation-accuracy claim.',
  },
  {
    id: 'video-representations',
    number: '03',
    title: 'Video representations & temporal evaluation',
    category: 'Prospex · Video models',
    status: 'Research in progress',
    description: 'Investigating what pretrained video encoders capture about football footage and camera transitions.',
    tags: ['VideoMAE', 'V-JEPA2', 'Temporal controls', 'Linear probes'],
    approach: 'Benchmarked frozen VideoMAE inference on Apple Silicon and developed a V-JEPA2 experiment protocol for camera-state and transition modeling. The evaluation compares ordered footage with reversed, shuffled, and static controls, using whole games for validation and testing.',
    result: 'The initial VideoMAE benchmark established a practical local inference path. The video evaluation framework measures camera-state recall alongside fragmented spans and transition timing, so smoother predictions alone cannot count as an improvement.',
    scope: 'The initial temporal signal was inconclusive. Current work focuses on held-out camera-state and transition evaluation; football understanding remains an open research question.',
  },
  {
    id: 'cross-view-retrieval',
    number: '04',
    title: 'Verifiable cross-view retrieval',
    category: 'Prospex · Evaluation tooling',
    status: 'Evaluator implemented',
    description: 'An evaluation harness for matching the same play across camera views, with explicit controls for game identity.',
    tags: ['Embeddings', 'Cosine similarity', 'Data lineage', 'Bootstrap intervals'],
    approach: 'Built a scorer that verifies embedding receipts and dataset manifests, then matches sideline and end-zone views within the same game. Reports recall, mean reciprocal rank, lift over matched random ranking, and confidence intervals sampled by game.',
    result: 'Implemented checks for corrupted artifacts, mismatched row identities, missing positive pairs, tied rankings, and unequal game sizes. The evaluator makes the source, split, and candidate population explicit.',
    scope: 'Software behavior is verified with fixtures; those checks do not establish model quality. Cross-game similar-play search remains a separate product proposal requiring coach-reviewed relevance evaluation.',
  },
];

export const experiences = [
  {
    company: 'Independent', role: 'AI & Software Engineer', period: 'Jun 2021 — Present', location: 'Remote',
    points: [
      'Build computer vision datasets and automated annotation workflows for detection, segmentation, and multi-object tracking.',
      'Develop and evaluate image and video model pipelines, including representation comparisons, fine-tuning experiments, calibration, and held-out testing.',
      'Connect React/Next.js applications with Python/Node backends and ML workflows spanning ETL, feature engineering, training, inference, and production evaluation.',
    ],
  },
  {
    company: 'Mattereum', role: 'Business Consultant / Senior Software Engineer', period: 'Oct 2023 — Jun 2024', location: 'Remote',
    points: [
      'Led technical and commercial architecture for tokenization initiatives representing $100M+ in real-world assets, working with institutional stakeholders.',
      'Developed tokenization and liquidity strategy that produced five major RWA partnerships. Helped execute a $2.5M token financing, personally sourcing $1M.',
      'Architected a Solidity lending/funding protocol for tokenized 3D-printed homes, including investor eligibility and transfer restrictions.',
    ],
  },
  {
    company: 'Consortium 9', role: 'Senior Software Engineer', period: 'Feb 2022 — Sep 2023', location: 'Remote',
    points: [
      'Developed and deployed an NFT minting dApp that generated $100K+ in on-chain revenue within two weeks.',
      'Built a blockchain-integrated single sign-on wallet with Solidity and zero-knowledge proofs, increasing user retention by 15%.',
      'Designed an event-driven leaderboard with AWS, Redis, MongoDB, Python, and Lambda, improving read/write performance by 35%. Helped leadership assess feature feasibility and roadmap tradeoffs.',
    ],
  },
  {
    company: 'Soundverse', role: 'Senior Full-Stack Engineer', period: 'Sep 2021 — Jan 2022', location: 'Remote',
    points: [
      'Led frontend architecture for a blockchain-based music tokenization platform using React and Next.js.',
      'Built integrations across NestJS, GraphQL, Node.js, Web3.js, and Solidity. Collaborated on contracts and token mechanics for fractional ownership and artist revenue sharing.',
    ],
  },
  {
    company: 'DLTX', role: 'Head of Technology', period: 'Mar 2021 — Sep 2021', location: 'Remote',
    points: [
      'Designed hedging products for $10M–$100M digital-asset lending exposures and built models for capital allocation, worst-case loss analysis, and mining operations.',
      'Led protocol improvements, cross-chain bridge infrastructure, and a block explorer for the Factom ecosystem, reducing time-to-production by 43%.',
    ],
  },
  {
    company: 'BAM Marketing', role: 'Full-Stack Engineer', period: 'Aug 2019 — Jan 2021', location: 'Washington, DC',
    points: [
      'Led the migration of a 15-year-old news platform from Joomla 1.3 to 3.0, including 30,000+ MySQL records.',
      'Modernized LAMP infrastructure, reducing incident reports by 43% and user-reported bugs by 27%. Owned frontend, backend, database, and reliability improvements.',
    ],
  },
];

export const engineeringProjects = [
  { title: 'Minting & wallet infrastructure', company: 'Consortium 9', description: 'A revenue-generating minting dApp and a single sign-on wallet using Solidity and zero-knowledge proofs.', tags: ['Solidity', 'TypeScript', 'React', 'Web3.js'] },
  { title: 'Event-driven leaderboard', company: 'Consortium 9', description: 'A high-performance gaming leaderboard using AWS, Redis, MongoDB, and Lambda, improving read/write performance by 35%.', tags: ['AWS', 'Redis', 'Python', 'Lambda'] },
  { title: 'Music tokenization platform', company: 'Soundverse', description: 'Frontend architecture and smart-contract integrations for on-chain music issuance, fractional ownership, and artist revenue sharing.', tags: ['Next.js', 'NestJS', 'GraphQL', 'Solidity'] },
  { title: 'Real-world asset infrastructure', company: 'Mattereum', description: 'Tokenization architecture and a lending/funding protocol for tokenized homes, with investor eligibility and transfer restrictions.', tags: ['Solidity', 'RWA', 'Financial modeling'] },
];
