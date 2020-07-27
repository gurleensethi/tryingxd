import ProfessionalDevelopment from "../images/professional_dev.png";
import CommuteConnectivity from "../images/commute_connectivity.png";
import DiversityInclusion from "../images/diversity_inclusion.png";
import HealthWellness from "../images/health_wellness.png";
import LearningGrowth from "../images/learning_growth.png";
import Neighborhood from "../images/neighborhood.png";
import Recreation from "../images/recreation.png";
import WorkBalance from "../images/work_balance.png";

export interface Category {
  name: string;
  image: string;
  description: string;
  options: {
    name: string;
  }[];
}

const categories: Record<string, Category> = {
  "professional-development": {
    name: "Professional Development",
    image: ProfessionalDevelopment,
    description:
      "LinkedIn’s Economic Graph team ranked Pittsburgh as the seventh-best city in the United States to launch a career!",
    options: [
      { name: "Jobs by Industries" },
      { name: "Incubate you startup ideas" },
      { name: "Associations by Industries" },
    ],
  },
  "diversity-and-inclusion": {
    name: "Diversity and Inclusion",
    image: DiversityInclusion,
    description:
      "Cube Smart named Pittsburgh best city for millennials to flourish based off job growth, affordability and diversity",
    options: [
      { name: "LGBTQ Association" },
      { name: "Association by country of origin" },
      { name: "Associations by race" },
    ],
  },
  "learning-and-growth": {
    name: "Learning and Growth",
    image: LearningGrowth,
    description:
      "Pittsburgh is the 5th best city for STEM professionals says WalletHub.",
    options: [
      { name: "Colleges and Universities" },
      { name: "Research and Labs" },
      { name: "Professional Associations" },
    ],
  },
  "recreation": {
    name: "Recreation",
    image: Recreation,
    description:
      "Kennywood won the Favorite  Traditional Parks category in The Annual Amusements Parks and Attractions Survey.",
    options: [
      { name: "Parks and Trails" },
      { name: "Fishing and Boating" },
      { name: "Sports and Stadium" },
      { name: "Gaming and Casinos"},
      { name: "Live Events"},
    ],
  },
  "Neighborhood": {
    name: "Neighborhood",
    image: Neighborhood,
    description:
      "Pittsburgh is ranked among top three best cities in the U.S. for first-time homethebuyers according to Lending Tree.",
    options: [
      { name: "Housing and Accomodation" },
      { name: "Safety Index" },
      { name: "Grocery Store" },
      { name: "Shopping Malls"},
      { name: "Food and Breweries"},
      { name: "Community Services"},
    ],
  },
  "Work-life-balance": {
    name: "Work Life Balance",
    image: WorkBalance,
    description:
      "Smartasset ranks Pittsburgh 22nd for work life balance.",
    options: [
      { name: "Kid's Education" },
      { name: "Family Outings" },
      { name: "Calculate your happiness Index" },
    ],
  },
  "health-and-wellness":{
    name: "Health and Wellness",
    image: HealthWellness,
    description:
    "People for Bikes named Pittsburgh is celebrated as the 5th Best City for an active lifestyle as named by WalletHub among the top 20 cities in the United States for people on bicycles.",
    options:[
      { name: "Hospitals" },
      { name: "Mental Health Centers" },
      { name: "Meditation Centres" },
      { name: "Fitness Centers"},
      { name: "Exercising Groups"},
    ],
  },
  "commute-and-connectivity":{
    name: "Commute and Connectivity",
    image: CommuteConnectivity,
    description:
    "People for Bikes named Pittsburgh among the top 20 cities in the United States for people on bicycles.",
    options:[
      { name: "Apps making commute easier" },
    ],
  },
};

export default categories;
