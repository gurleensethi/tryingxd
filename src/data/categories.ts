import ProfessionalDevelopment from "../images/professional_dev.png";
import CommuteConnectivity from "../images/commute_connectivity.png";
import DiversityInclusion from "../images/diversity_inclusion.png";
import HealthWellness from "../images/health_wellness.png";
import LearningGrowth from "../images/learning_growth.png";
import Neighborhood from "../images/neighborhood.png";
import Recreation from "../images/recreation.png";
import WorkBalance from "../images/work_balance.png";
import Transit from "../images/transit.png";
import Uber from "../images/uber.png";
import Lyft from "../images/lyft.jpg";
import TechCouncil from "../images/tech_council.png";
import Stadiums from "../images/stadiums.png";
import Steelers from "../images/steelers.jpg";

export interface Category {
  name: string;
  image?: string;
  description: string;
  options: {
    name: string;
    category?: string;
  }[];
  galleryImages?: string[];
  iconImages?: string[];
  isPrimary: boolean;
}

const categories: Record<string, Category> = {
  "professional-development": {
    isPrimary: true,
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
    isPrimary: true,
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
    isPrimary: true,
    name: "Learning and Growth",
    image: LearningGrowth,
    description:
      "Pittsburgh is the 5th best city for STEM professionals says WalletHub.",
    options: [
      { name: "Colleges and Universities" },
      { name: "Research and Labs" },
      { name: "Professional Associations" },
    ],
    galleryImages: [TechCouncil],
  },
  recreation: {
    isPrimary: true,
    name: "Recreation",
    image: Recreation,
    description:
      "Kennywood won the Favorite  Traditional Parks category in The Annual Amusements Parks and Attractions Survey.",
    options: [
      { name: "Parks and Trails" },
      { name: "Fishing and Boating" },
      { name: "Sports and Stadium", category: "sports-and-stadiums" },
      { name: "Gaming and Casinos" },
      { name: "Live Events" },
    ],
  },
  Neighborhood: {
    isPrimary: true,
    name: "Neighborhood",
    image: Neighborhood,
    description:
      "Pittsburgh is ranked among top three best cities in the U.S. for first-time homethebuyers according to Lending Tree.",
    options: [
      { name: "Housing and Accomodation" },
      { name: "Safety Index" },
      { name: "Grocery Store" },
      { name: "Shopping Malls" },
      { name: "Food and Breweries" },
      { name: "Community Services" },
    ],
  },
  "Work-life-balance": {
    isPrimary: true,
    name: "Work Life Balance",
    image: WorkBalance,
    description: "Smartasset ranks Pittsburgh 22nd for work life balance.",
    options: [
      { name: "Kid's Education" },
      { name: "Family Outings" },
      { name: "Calculate your happiness Index" },
    ],
  },
  "health-and-wellness": {
    isPrimary: true,
    name: "Health and Wellness",
    image: HealthWellness,
    description:
      "People for Bikes named Pittsburgh is celebrated as the 5th Best City for an active lifestyle as named by WalletHub among the top 20 cities in the United States for people on bicycles.",
    options: [
      { name: "Hospitals" },
      { name: "Mental Health Centers" },
      { name: "Meditation Centres" },
      { name: "Fitness Centers" },
      { name: "Exercising Groups" },
    ],
  },
  "commute-and-connectivity": {
    isPrimary: true,
    name: "Commute and Connectivity",
    image: CommuteConnectivity,
    description:
      "People for Bikes named Pittsburgh among the top 20 cities in the United States for people on bicycles.",
    options: [{ name: "Apps making commute easier" }],
    iconImages: [Uber, Lyft, Transit],
  },
  "sports-and-stadiums": {
    isPrimary: false,
    image: Stadiums,
    name: "Sports and Stadiums",
    description:
      "People for Bikes named Pittsburgh among the top 20 cities in the United States for people on bicycles.",
    options: [
      { name: "Steelers", category: "pittsburgh-steelers" },
      { name: "Penguins" },
      { name: "Pirates" },
      { name: "Stadiums" },
    ],
  },
  "pittsburgh-steelers": {
    isPrimary: false,
    image: Steelers,
    name: "Steelers",
    description:
      "The Steelers have won six Super Bowl titles and eight American Football Conference (AFC) championships. One of the NFL's most successful and storied franchises, the Steelers have more Super Bowl victories than any other team.",
    options: [
      { name: "History" },
      { name: "Team" },
      { name: "Game Schedule (Buy Tickets)" },
      { name: "Buy Merchandise" },
    ],
  },
};

export default categories;
