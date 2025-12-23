import australia from "../assets/australia.jpg";
import canada from "../assets/canada.jpg";
import japan from "../assets/japan.jpg";
import uk from "../assets/uk.jpg";
import usa from "../assets/usa.jpeg";


const destinations = [
    {
        id:1,
        name:"USA",
        flag: usa,
        image:"/images/liberty.jpg",
        description: "The USA is the world’s most popular study destination, known for its academic excellence, cutting-edge research, and global recognition. With a flexible education system and strong career exposure, the USA attracts thousands of Nepali students every year.",
        benefits: ["Home to the world’s top-ranked and research-intensive universities", "Flexible education system with a wide choice of majors and electives", "Strong focus on innovation, research, and practical learning", "Wide range of scholarships, assistantships, and funding opportunities", "Diverse, multicultural, and globally connected learning environment"],
        courses: ["STEM Programs (Science, Technology, Engineering, Mathematics)", "Business & Management", "Computer Science & Information Technology", "Healthcare & Life Sciences", "Data Science, AI & Cybersecurity"],
        job: "International students can work on-campus during their studies and apply for Optional Practical Training (OPT) after graduation, gaining valuable professional experience in their field of study."
    },
     {
        id:2,
        name:"Australia",
        flag: australia,
        image: "/images/opera.jpg",
        description: "Australia is one of the most popular and reliable study destinations for international students. Known for its high-quality education system, globally recognized qualifications, and excellent lifestyle, Australia attracts thousands of Nepali students each year seeking academic excellence and strong career opportunities.",
        benefits: ["World-ranked universities and high academic standards", "Strong emphasis on practical learning and industry-relevant skills", "Wide range of courses and flexible study options", "Safe, welcoming, and multicultural society", "Opportunities for post-study work and migration pathways"],
        courses: ["Business & Management", "Engineering & Information Technology", "Health Sciences & Nursing", "Hospitality & Tourism Management", "Data Science, AI & Cybersecurity"],
        job: "International students can work part-time during their studies. After graduation, eligible students can apply for post-study work visas, allowing them to gain valuable professional experience and enhance their long-term career prospects in Australia."
    },
     {
        id:3,
        name:"Canada",
        flag:canada,
        image: "/images/toronto.png",
        description: "Canada is one of the most trusted and student-friendly study destinations in the world. Known for its high academic standards, welcoming immigration policies, and excellent quality of life, Canada attracts thousands of Nepali students every year who are seeking quality education and long-term career opportunities.",
        benefits: ["Globally recognized universities and public colleges", "Strong focus on practical, career-oriented education", "Affordable tuition compared to other English-speaking countries", "Safe, inclusive, and multicultural society", "Clear pathways to work permits and permanent residency"],
        courses: ["Business, Management & Accounting", "Computer Science, IT & Software Engineering", "Engineering & Technology", "Health Sciences & Nursing", "Data Analytics, AI & Cybersecurity"],
        job: "International students can work part-time during their studies. After graduation, eligible students can apply for the Post-Graduation Work Permit (PGWP), allowing them to gain valuable Canadian work experience and strengthen their pathway toward permanent residency."
    },
     {
        id:4,
        name:"UK",
        flag:uk,
        image: "/images/bridge.jpg",
        description: "The UK is one of the world’s most prestigious and trusted study destinations. Known for its long academic tradition, globally recognized degrees, and multicultural society, the UK welcomes thousands of Nepali students every year for quality education and strong career prospects.",
        benefits: ["Home to world-renowned and top-ranked universities", "Shorter course duration, saving time and study costs", "Strong focus on research, critical thinking, and practical learning", "Wide range of scholarships and financial support options", "Diverse, inclusive, and globally connected environment"],
        courses: ["Business & Management", "Computer Science & IT", "Engineering", "Health & Life Sciences", "Data Science, AI & Cybersecurity"],
        job: "Students can work part-time during their studies. After graduation, the UK’s Graduate Route allows international students to stay and work for up to two years, providing valuable international work experience."
    },
     {
        id:5,
        name:"Japan",
        flag:japan,
        image:"/images/tokyo.jpg",
        description: "Japan is one of Asia’s most advanced, disciplined, and safest study destinations. Renowned for its high-quality education, cutting-edge technology, and affordable living costs, Japan attracts thousands of Nepali students every year seeking global exposure and practical skills.",
        benefits: ["World-class universities with strong global recognition", "Technology-driven and research-focused education system", "Emphasis on innovation, practical skills, and industry collaboration", "Wide range of scholarships offered by the Japanese government and universities", "Safe, clean, and culturally rich living environment"],
        courses: ["Engineering & Technology", "Computer Science & IT", "Business, Management & International Studies", "Robotics, AI & Data Science", "Healthcare & Biotechnology"],
        job: "International students can work part-time during their studies to support living expenses. After graduation, students can apply for work visas, gaining valuable professional experience in Japan’s advanced and innovation-driven job market."
    }
];

export default destinations;