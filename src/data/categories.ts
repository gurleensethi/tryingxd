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
};

export default categories;
