import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "WeatherApp",
    description:
      "A modern weather application providing real-time weather data and forecasts.",
    image: "weather.png", // Replace with your app's image file
    tech: ["React", "ShadCN", "Tailwind CSS", "Recharts", "OpenWeather API"],
    github: "https://github.com/your-username/weatherapp", // Replace with your actual GitHub repository link
    live: "https://67554ad198d1f027c1332730--eloquent-duckanoo-98a62f.netlify.app/", // Replace with your live site link
    details: {
      problem:
        "Weather information is often fragmented, hard to navigate, and not visually appealing.",
      solution:
        "Built a user-friendly app that displays accurate, real-time weather data in a clean and interactive interface.",
      features: [
        "Real-time weather updates using OpenWeather API",
        "Interactive charts with Recharts for temperature and humidity",
        "Clean and responsive UI with Tailwind CSS",
        "Search functionality to view weather for any city",
        "Weather forecasts for the upcoming days",
      ],
      impact:
        "Helping users stay informed with accurate and easy-to-understand weather information.",
    },
  },
  {
    title: "Elevé ",
    description:
      "A premium e-commerce platform specializing in high-quality foods, featuring an intelligent product review system powered by Vadar for sentiment analysis.",
    image: "eleve.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "Vadar",
      "Sentiment Analysis",
    ],
    github: "https://github.com/hemanth-1321/ecoshop.git", // Replace with your actual GitHub repository link
    live: "https://github.com/hemanth-1321/ecoshop.git",
    details: {
      problem:
        "E-commerce platforms in the food industry struggle with authentic customer feedback and accurate sentiment analysis.",
      solution:
        "Built a premium food-focused e-commerce platform with a Vadar-powered product review system that automatically analyzes customer feedback sentiment.",
      features: [
        "Sentiment analysis on food product reviews using Vadar",
        "Premium food product listings with detailed descriptions",
        "Customizable product filters for diet preferences (vegan, gluten-free, etc.)",
        "Seamless shopping experience with an intuitive user interface",
        "Real-time sentiment analysis of reviews (positive, negative, neutral)",
      ],
      impact:
        "Enhanced customer insights for food products, helping businesses improve product offerings and customers make informed purchasing decisions.",
    },
  },
];
