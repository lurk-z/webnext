export const categories = [
  { id: "appetizers", label: "Appetizers", code: "AP" },
  { id: "mains", label: "Main Courses", code: "MC" },
  { id: "salads", label: "Salads & Sides", code: "SS" },
  { id: "vegetarian", label: "Vegetarian Delights", code: "VD" },
  { id: "international", label: "International Flavors", code: "IF" },
  { id: "desserts", label: "Desserts & Sweets", code: "DS" },
  { id: "healthy", label: "Healthy Eats", code: "HE" },
  { id: "quick", label: "Quick & Easy Suppers", code: "QE" }
];

export const recipes = [
  {
    slug: "fresh-salad-tahini-sauce",
    title: "Fresh Salad with Tahini Sauce",
    category: "salads",
    categoryLabel: "Salads & Sides",
    views: "250+",
    time: "20 min",
    level: "Easy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    summary: "Crisp vegetables, herbs, lemon, and a silky sesame dressing.",
    ingredients: ["Mixed greens", "Cherry tomatoes", "Cucumber", "Tahini", "Lemon juice", "Toasted sesame"],
    method: [
      "Whisk tahini with lemon juice, water, salt, and a little garlic.",
      "Toss the greens and vegetables with half the dressing.",
      "Finish with sesame, herbs, and the remaining dressing."
    ]
  },
  {
    slug: "chili-con-carne-nachos",
    title: "Chili con Carne with Nachos Chips",
    category: "mains",
    categoryLabel: "Main Courses",
    views: "150+",
    time: "45 min",
    level: "Medium",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
    summary: "Smoky beef chili scooped with crisp chips and bright toppings.",
    ingredients: ["Ground beef", "Kidney beans", "Tomatoes", "Smoked paprika", "Nacho chips", "Cilantro"],
    method: [
      "Brown beef with onion and spices until deeply fragrant.",
      "Simmer with tomatoes and beans until thick.",
      "Serve with chips, cilantro, lime, and a little sour cream."
    ]
  },
  {
    slug: "sour-spicy-korean-kimchi",
    title: "Sour & Spicy Korean Kimchi",
    category: "international",
    categoryLabel: "International Flavors",
    views: "200+",
    time: "30 min",
    level: "Easy",
    image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?auto=format&fit=crop&w=900&q=80",
    summary: "A quick kimchi-inspired side with cabbage, chili, ginger, and crunch.",
    ingredients: ["Napa cabbage", "Gochugaru", "Ginger", "Garlic", "Rice vinegar", "Scallions"],
    method: [
      "Salt cabbage until it softens, then rinse and drain well.",
      "Mix chili, ginger, garlic, vinegar, and a pinch of sugar.",
      "Fold everything together and chill before serving."
    ]
  },
  {
    slug: "flat-noodles-shrimp-veggie",
    title: "Flat Noodles with Shrimp Veggie",
    category: "quick",
    categoryLabel: "Quick & Easy Suppers",
    views: "200+",
    time: "25 min",
    level: "Easy",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80",
    summary: "Wide noodles, juicy shrimp, and greens in a glossy lime-soy sauce.",
    ingredients: ["Flat rice noodles", "Shrimp", "Broccoli", "Soy sauce", "Lime", "Garlic"],
    method: [
      "Soak or boil noodles until flexible.",
      "Sear shrimp quickly, then remove from the pan.",
      "Stir-fry vegetables, return shrimp and noodles, then toss with sauce."
    ]
  },
  {
    slug: "classic-italian-beef-maltagliati",
    title: "Classic Italian Beef Maltagliati",
    category: "mains",
    categoryLabel: "Main Courses",
    views: "180+",
    time: "50 min",
    level: "Medium",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
    summary: "Tender beef ragu folded through torn pasta sheets and herbs.",
    ingredients: ["Maltagliati pasta", "Braised beef", "Tomato passata", "Rosemary", "Parmesan", "Olive oil"],
    method: [
      "Warm the beef ragu until loose and glossy.",
      "Boil pasta just shy of tender.",
      "Finish pasta in the sauce with parmesan and a splash of pasta water."
    ]
  },
  {
    slug: "cauliflower-steak-chimichurri",
    title: "Cauliflower Steak Chimichurri Spices",
    category: "vegetarian",
    categoryLabel: "Vegetarian Delights",
    views: "150+",
    time: "35 min",
    level: "Easy",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80",
    summary: "Golden cauliflower slabs with parsley, chili, capers, and vinegar.",
    ingredients: ["Cauliflower", "Parsley", "Red chili", "Capers", "Red wine vinegar", "Olive oil"],
    method: [
      "Slice cauliflower into thick steaks and season well.",
      "Roast until browned at the edges.",
      "Spoon chimichurri over the hot cauliflower before serving."
    ]
  },
  {
    slug: "spicy-vermicelli-noodles-salad",
    title: "Spicy Vermicelli Noodles Salad",
    category: "healthy",
    categoryLabel: "Healthy Eats",
    views: "100+",
    time: "22 min",
    level: "Easy",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",
    summary: "Cool noodles, herbs, lime, peanuts, and a clean chili kick.",
    ingredients: ["Vermicelli noodles", "Mint", "Cucumber", "Carrot", "Lime", "Roasted peanuts"],
    method: [
      "Soften noodles and rinse under cold water.",
      "Slice vegetables thinly and chop herbs.",
      "Toss with lime dressing, chili, and peanuts."
    ]
  },
  {
    slug: "gnocchi-pasta-tomato-sauce",
    title: "Gnocchi Pasta with Tomato Sauce",
    category: "appetizers",
    categoryLabel: "Appetizers",
    views: "250+",
    time: "30 min",
    level: "Easy",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    summary: "Soft gnocchi in a quick tomato sauce with basil and olive oil.",
    ingredients: ["Potato gnocchi", "Tomato sauce", "Garlic", "Basil", "Parmesan", "Olive oil"],
    method: [
      "Simmer garlic and tomato sauce until slightly thick.",
      "Boil gnocchi until they float.",
      "Fold gnocchi through sauce and finish with basil."
    ]
  },
  {
    slug: "citrus-honey-yogurt-bowl",
    title: "Citrus Honey Yogurt Bowl",
    category: "desserts",
    categoryLabel: "Desserts & Sweets",
    views: "120+",
    time: "10 min",
    level: "Easy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    summary: "Creamy yogurt, oranges, honey, pistachio, and a pinch of salt.",
    ingredients: ["Greek yogurt", "Orange slices", "Honey", "Pistachios", "Mint", "Sea salt"],
    method: [
      "Spoon yogurt into shallow bowls.",
      "Layer citrus, honey, pistachio, and mint.",
      "Add a tiny pinch of salt to sharpen the sweetness."
    ]
  }
];
