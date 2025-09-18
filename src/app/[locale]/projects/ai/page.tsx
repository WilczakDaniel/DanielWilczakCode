'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Brain, BarChart3, Eye, Zap, Shield, TrendingUp } from 'lucide-react'

export default function AIProjectsPage() {
  const { t, locale } = useTranslation()

  const aiProjects = [
    {
      title: 'Intelligent ChatBot Assistant',
      description: 'Advanced conversational AI powered by large language models with context awareness and multi-domain knowledge.',
      longDescription: 'A sophisticated chatbot system built with modern NLP techniques. Features include context-aware conversations, multi-turn dialogue, sentiment analysis, intent recognition, and seamless integration with various platforms.',
      tech: ['Python', 'TensorFlow', 'Transformers', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Sentiment Analysis', 'Intent Recognition', 'API Integration'],
      github: 'https://github.com/danielwilczak/ai-chatbot-assistant',
      live: 'https://ai.danielwilczak.com/chatbot',
      status: 'Completed',
      category: 'Natural Language Processing',
      accuracy: '94%'
    },
    {
      title: 'Computer Vision Analytics',
      description: 'Real-time image and video analysis system with object detection, facial recognition, and behavior analysis.',
      longDescription: 'A comprehensive computer vision platform using deep learning models. Provides real-time object detection, facial recognition, crowd analysis, and behavior pattern recognition for security and analytics applications.',
      tech: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'Flask', 'MongoDB', 'CUDA'],
      features: ['Object Detection', 'Facial Recognition', 'Real-time Processing', 'Behavior Analysis', 'Crowd Monitoring', 'Alert System'],
      github: 'https://github.com/danielwilczak/computer-vision-analytics',
      live: 'https://ai.danielwilczak.com/vision',
      status: 'Completed',
      category: 'Computer Vision',
      accuracy: '96%'
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Machine learning platform for business intelligence with forecasting, anomaly detection, and trend analysis.',
      longDescription: 'An advanced analytics platform that leverages machine learning for business insights. Features include sales forecasting, customer behavior prediction, anomaly detection, and automated report generation.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'Streamlit', 'AWS'],
      features: ['Sales Forecasting', 'Customer Analytics', 'Anomaly Detection', 'Trend Analysis', 'Automated Reports', 'Data Visualization'],
      github: 'https://github.com/danielwilczak/predictive-analytics-engine',
      live: 'https://ai.danielwilczak.com/analytics',
      status: 'In Progress',
      category: 'Predictive Analytics',
      accuracy: '91%'
    },
    {
      title: 'Deep Learning Recommendation System',
      description: 'Personalized recommendation engine using collaborative filtering and deep neural networks.',
      longDescription: 'A sophisticated recommendation system that combines collaborative filtering with deep learning. Provides personalized content recommendations, handles cold start problems, and adapts to user preferences in real-time.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Apache Spark', 'Cassandra', 'Kafka', 'Elasticsearch'],
      features: ['Personalized Recommendations', 'Real-time Learning', 'Cold Start Handling', 'A/B Testing', 'Scalable Architecture', 'Performance Metrics'],
      github: 'https://github.com/danielwilczak/deep-learning-recommendations',
      live: 'https://ai.danielwilczak.com/recommendations',
      status: 'Completed',
      category: 'Recommendation Systems',
      accuracy: '89%'
    }
  ]

  const skills = [
    { name: 'Machine Learning', icon: Brain, items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost'] },
    { name: 'Deep Learning', icon: Zap, items: ['Neural Networks', 'CNN', 'RNN', 'Transformers', 'GANs'] },
    { name: 'Data Science', icon: BarChart3, items: ['Python', 'R', 'Pandas', 'NumPy', 'Jupyter'] },
    { name: 'Computer Vision', icon: Eye, items: ['OpenCV', 'YOLO', 'Image Processing', 'Object Detection', 'Face Recognition'] }
  ]

  const metrics = [
    { metric: '95%+', label: 'Model Accuracy' },
    { metric: '15+', label: 'AI Projects' },
    { metric: '100K+', label: 'Predictions Made' },
    { metric: '24/7', label: 'System Uptime' }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/${locale}/projects`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t('ai.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {t('ai.solutionsDesc')} Explore my artificial intelligence and machine learning projects
          that solve complex problems using cutting-edge technologies.
        </p>
      </div>

      {/* Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">{metric.metric}</div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </section>

      {/* Skills Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI & Machine Learning Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div key={skill.name} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center gap-3">
                  <IconComponent className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-current" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">AI & ML Projects</h2>
        <div className="space-y-8">
          {aiProjects.map((project, index) => (
            <div key={project.title} className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:flex`}>
              {/* Project Image */}
              <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 flex items-center justify-center">
                <Brain className="h-16 w-16 text-primary" />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-6 lg:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded-md font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-muted-foreground">{project.accuracy} accuracy</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground">{project.longDescription}</p>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Shield className="h-3 w-3 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Development Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI Development Methodology</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg space-y-3">
            <div className="text-primary font-semibold">1. Data & Research</div>
            <h3 className="font-medium">Problem Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Thorough data analysis, problem definition, and research of state-of-the-art solutions to ensure optimal approach selection.
            </p>
          </div>
          <div className="p-6 border rounded-lg space-y-3">
            <div className="text-primary font-semibold">2. Model Development</div>
            <h3 className="font-medium">Iterative Training</h3>
            <p className="text-sm text-muted-foreground">
              Designing, training, and fine-tuning machine learning models with rigorous testing and validation procedures.
            </p>
          </div>
          <div className="p-6 border rounded-lg space-y-3">
            <div className="text-primary font-semibold">3. Deployment & Monitoring</div>
            <h3 className="font-medium">Production Ready</h3>
            <p className="text-sm text-muted-foreground">
              Deploying scalable AI solutions with continuous monitoring, performance tracking, and model retraining capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Ready to Harness AI for Your Business?</h2>
        <p className="text-muted-foreground">
          Let&apos;s explore how artificial intelligence can transform your operations.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href={`/${locale}/contact`}>
              Discuss AI Solutions
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${locale}/projects`}>
              View All Projects
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 