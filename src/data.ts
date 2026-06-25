// Ndururuno Secondary School - Structured Site Data

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  qualification: string;
  message?: string;
}

export interface Pillar {
  title: string;
  description: string;
  iconName: string;
}

export interface Department {
  id: string;
  name: string;
  hod: string;
  subjects: string[];
  description: string;
  stats: { label: string; value: string }[];
}

export interface CoCurricularItem {
  title: string;
  category: "sports" | "arts" | "clubs";
  description: string;
  achievements?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "academic" | "sports" | "facility" | "event";
  image: string;
  description: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  tag: string;
}

export const SCHOOL_INFO = {
  name: "Ndururuno Secondary School",
  tagline: "Striving for Excellence, Inspiring the Future",
  motto: "Knowledge is Light",
  established: "1984",
  type: "Public Mixed Day Secondary School & Integrated JSS",
  location: "Huruma, Starehe Sub-County, Nairobi, Kenya",
  email: "info@ndururunosecondary.sc.ke",
  phone: "+254 722 000000",
  address: "Juja Road, Opp. Huruma Estate, P.O. Box 47820-00100, Nairobi",
  workingHours: "Mon - Fri: 7:00 AM - 5:00 PM"
};

export const CORE_PILLARS: Pillar[] = [
  {
    title: "Academic Excellence",
    description: "Equipping our students with rigorous curriculum guidance, intensive stem programs, and highly dedicated educators to achieve elite university placement.",
    iconName: "GraduationCap"
  },
  {
    title: "Character Development",
    description: "Nurturing discipline, integrity, leadership qualities, and sound moral values to shape responsible citizens who will transform our society.",
    iconName: "HeartHandshake"
  },
  {
    title: "Community Spirit",
    description: "Deeply embedded in Huruma, Nairobi. We foster teamwork, service, and environmental stewardship, ensuring our school uplifts the entire community.",
    iconName: "Users"
  }
];

export const VISION_MISSION = {
  vision: "To be a leading center of excellence in secondary education, producing holistic, competent, and socially responsible global citizens.",
  mission: "To provide quality, affordable, and inclusive education that empowers students from diverse backgrounds through academic rigor, talent development, and strong moral values.",
  history: "Established in 1984, Ndururuno Secondary School has grown from a humble community-initiated learning center to a premier public mixed day secondary school in Nairobi's Starehe sub-county. Over the decades, we have provided an academic haven for thousands of boys and girls from Huruma, Mathare, Kariobangi, and surrounding estates. In response to national curriculum reforms, Ndururuno successfully integrated a fully equipped Junior Secondary School (JSS) wing, ensuring a seamless transition and continuous pathway of academic progress under the Competency Based Curriculum (CBC)."
};

export const ADMIN_TEAM: TeamMember[] = [
  {
    id: "principal",
    name: "Mr. John Kamau Mwangi",
    role: "School Principal",
    image: "/src/assets/images/principal_portrait_1782422125525.jpg", // From generated assets
    qualification: "M.Ed. in Educational Leadership (Kenyatta University)",
    message: "Welcome to Ndururuno Secondary School! As a public mixed day school in the heart of Nairobi, we believe that high-quality education is the greatest equalizer in life. Our dedicated faculty work tirelessly to provide a safe, structured, and enriching environment where students can flourish. At Ndururuno, we do not just prepare students for exams; we inspire them to become innovative problem solvers, principled leaders, and compassionate community champions. Karibuni sana."
  },
  {
    id: "deputy_academic",
    name: "Mrs. Grace Atieno",
    role: "Deputy Principal - Academics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    qualification: "B.Ed. (Science), 15+ Years Experience"
  },
  {
    id: "deputy_admin",
    name: "Mr. Bernard Onyango",
    role: "Deputy Principal - Administration",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    qualification: "B.Ed. (Arts), Student Affairs Specialist"
  },
  {
    id: "jss_coordinator",
    name: "Mrs. Beatrice Wambui",
    role: "Junior Secondary School (JSS) Coordinator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    qualification: "B.Ed. (Early Childhood & Primary Transition Specialist)"
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "sciences",
    name: "Science Department",
    hod: "Mr. Peter Ndwiga",
    subjects: ["Biology", "Chemistry", "Physics", "General Science"],
    description: "Fostering empirical inquiry and innovation. Our department is equipped with modern state-of-the-art laboratories where students conduct practical experiments, preparing them for careers in Medicine, Engineering, and biotechnology.",
    stats: [
      { label: "Lab Stations", value: "24" },
      { label: "Practical Sessions/Week", value: "12" },
      { label: "Science Congress Wins", value: "3 National" }
    ]
  },
  {
    id: "humanities",
    name: "Humanities Department",
    hod: "Ms. Sarah Wanjiku",
    subjects: ["History & Government", "Geography", "Christian Religious Education (CRE)", "Islamic Religious Education (IRE)"],
    description: "Inspiring global awareness, ethical reasoning, and civic duty. We guide students to understand historical contexts, global geographic patterns, and cultural foundations to build rounded worldviews.",
    stats: [
      { label: "Debate Championships", value: "5 County" },
      { label: "Annual Field Trips", value: "4" }
    ]
  },
  {
    id: "mathematics",
    name: "Mathematics Department",
    hod: "Mr. Charles Cheruiyot",
    subjects: ["Mathematics", "Further Mathematics"],
    description: "Developing robust analytical thinking and quantitative fluency. Our customized math mentoring clubs and peer-led study circles dismantle fear and unlock top marks in national assessments.",
    stats: [
      { label: "Average Improvement Index", value: "+1.8" },
      { label: "Math Contest Participants", value: "120+" }
    ]
  },
  {
    id: "languages",
    name: "Languages Department",
    hod: "Mrs. Amina Yusuf",
    subjects: ["English Language & Literature", "Kiswahili (Fasihi)", "French"],
    description: "Cultivating elegant communication, creative writing, and cross-cultural appreciation. Mastery of language is the foundation of modern media, international diplomacy, and critical thinking.",
    stats: [
      { label: "Drama & Elocution Trophies", value: "8" },
      { label: "Creative Writing Club Members", value: "45" }
    ]
  }
];

export const CO_CURRICULAR_ACTIVITIES: CoCurricularItem[] = [
  {
    title: "Ndururuno Athletics & Soccer",
    category: "sports",
    description: "Our school sports program is a powerhouse in Starehe. We offer competitive training in Football (Soccer), Athletics, Volleyball, and Basketball. Sport teaches resilience, health, and leadership.",
    achievements: ["Starehe Sub-County Football Champions (2024, 2025)", "Regional Athletics Representatives (High Jump & 800m)"]
  },
  {
    title: "Music, Dance & National Drama Festivals",
    category: "arts",
    description: "Ndururuno has a rich cultural heritage. Our Drama and Music clubs consistently qualify for the National Drama and Film Festival, performing poetry, choral verses, and cultural dances that captivate audiences.",
    achievements: ["Best Script on National Social Issues (2024)", "State Concert Performance Invitation (2025)"]
  },
  {
    title: "Science & Engineering Club (Robotics)",
    category: "clubs",
    description: "Students learn foundational coding, circuit building, and structural designs, creating solar chargers, eco-friendly models, and simple automated robotic kits using recycled materials.",
    achievements: ["Regional Young Scientists Kenya Exhibitors (YSK 2024)"]
  },
  {
    title: "Scouting, Red Cross & St. John's Ambulance",
    category: "clubs",
    description: "Providing vital leadership training, community volunteer service, and emergency medical skills. Our scouts are renowned for conducting safety drills and civic marches within Huruma.",
    achievements: ["President's Award Scheme Gold Winners"]
  },
  {
    title: "Environmental & Wildlife Club",
    category: "clubs",
    description: "Leading the green revolution in our urban school. Students plant trees, maintain organic vegetable patches, and educate peers about recycling and waste management in urban neighborhoods.",
    achievements: ["Green School Initiative Commendation Award"]
  }
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: "pic_1",
    title: "Students Engaged in Biology Practical",
    category: "academic",
    image: "/src/assets/images/classroom_students_1782422139359.jpg", // From generated assets
    description: "Students analyzing specimens under light microscopes in our modern general science laboratory."
  },
  {
    id: "pic_2",
    title: "Annual Sports Day Championship",
    category: "sports",
    image: "/src/assets/images/school_sports_1782422155262.jpg", // From generated assets
    description: "Our football team celebrating a tournament-winning goal on the sports grounds."
  },
  {
    id: "pic_3",
    title: "School Gate & Dynamic Campus Main View",
    category: "facility",
    image: "/src/assets/images/school_hero_1782422110647.jpg", // From generated assets
    description: "The welcoming, tree-lined main entrance and multi-story administration block of the school."
  },
  {
    id: "pic_4",
    title: "Computer Science and ICT Laboratory",
    category: "facility",
    image: "https://images.unsplash.com/photo-1562774053-f5a02f6a7c93?auto=format&fit=crop&q=80&w=600",
    description: "Students learning computer programming, web design, and digital literacy in our modern ICT lab."
  },
  {
    id: "pic_5",
    title: "National Drama Festival Performance",
    category: "event",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    description: "The school choir performing an intricate traditional piece at the regional music festival."
  },
  {
    id: "pic_6",
    title: "Fully Stocked Library & Media Center",
    category: "facility",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
    description: "A sanctuary for study. Our school library has over 10,000 academic textbooks and resource guides."
  },
  {
    id: "pic_7",
    title: "Junior Secondary School (JSS) Orientation",
    category: "academic",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600",
    description: "Our CBC Grade 7 and 8 students attending a science-based inquiry orientation workshop."
  },
  {
    id: "pic_8",
    title: "Annual Academic Prize-Giving Ceremony",
    category: "event",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
    description: "Recognizing outstanding academic performance and leadership roles during assembly."
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Term II Mid-Term Examinations",
    date: "July 08, 2026",
    description: "Continuous assessment tests for Form 1 through Form 4 and JSS classes.",
    tag: "Academic"
  },
  {
    id: "e2",
    title: "Annual Parent-Teacher Association (PTA) Meeting",
    date: "July 24, 2026",
    description: "Open forum with parents to discuss academic performance, CBC progression, and facility upgrades.",
    tag: "Community"
  },
  {
    id: "e3",
    title: "Starehe Sub-County Athletics Heats",
    date: "August 04, 2026",
    description: "Our athletics team competing for regional representation at the National sports levels.",
    tag: "Sports"
  }
];
