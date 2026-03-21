export interface Post {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullContent: string;
  image: string;
  date: string;
  category: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'how-do-flowcharts-work',
    title: 'How Do Flowcharts Work?',
    shortDescription: 'Flowcharts are a key tool in programming and problem-solving because they represent processes visually.',
    fullContent: `Flowcharts are a highly relevant tool in the creation process during programming and in problem-solving, as they allow processes to be represented in a visual, clear, and organized way.

In this research, we explore how they work and why they are so important in the world of Systems Engineering.

What is a flowchart?
A flowchart works as a graphical representation of a process or algorithm. It uses symbols connected by arrows to show step by step how a task is carried out.
Instead of reading many lines of text, you can understand the entire process just by looking at the diagram.

How do they work?
Flowcharts work by organizing a process into a logical sequence of steps. Each symbol represents a specific action, and the arrows indicate the order in which they must be executed.
The process starts at a specific point, moves step by step, and can make decisions depending on certain conditions.

For example:
• The process starts  
• An action is performed  
• A condition is evaluated (yes or no)  
• It continues along different paths depending on the answer  
• Finally, a result is reached  

Most important symbols:
• Oval: Indicates the start and end of the process  
• Rectangle: Represents an action or instruction  
• Diamond: Represents a decision (yes / no)  
• Arrows: Indicate the direction of the flow  

These symbols allow anyone to understand the process without needing long explanations.

Why are they important?
• Help understand complex problems  
• Allow planning before programming  
• Make it easier to find errors in a process  
• Improve the organization of ideas  

In programming, they are key before writing code, since they force you to think through the logic correctly.

Simple example:
Let’s imagine a process to determine whether a number is even or odd:
• Enter a number  
• Divide the number by 2  
• Is the remainder 0?  
• Yes → It is even  
• No → It is odd  

This process, in a flowchart, would look much clearer and easier to understand.

Flowcharts are an essential tool for any systems student. They not only help represent processes but also develop logical thinking.

From our experience, learning to use them greatly facilitates the programming process and helps avoid errors from the start.`,
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b',
    date: 'March 20, 2026',
    category: 'Education'
  },
  {
    id: 2,
    slug: 'is-studying-systems-engineering-worth-it',
    title: 'Is Studying Systems Engineering Worth It?',
    shortDescription: 'An analysis of advantages, challenges, and tips for studying Systems Engineering.',
    fullContent: `Systems Engineering is one of the most in-demand careers today, especially due to the constant growth of technology in all areas of life. However, many people wonder whether it is truly worth studying.

This article analyzes its advantages, challenges, and some key tips for those who decide to follow this path.

What is Systems Engineering?
Systems Engineering focuses on software development, management of information systems, and problem-solving through technological tools.
It is not only about programming, but also about analyzing, designing, and implementing solutions that add value in different sectors such as education, healthcare, business, and more.

Advantages of studying this career:
• High job demand: Companies increasingly require technology professionals.  
• Good economic opportunities: It is a career with strong salary potential.  
• Remote work possibilities: There are opportunities to work with national and international companies.  
• Development of logical thinking: It strengthens structured problem-solving skills.  

Challenges of the career:
• It requires discipline and consistency  
• It involves learning complex topics such as mathematics and logic  
• Technology evolves constantly  
• It can be frustrating when results are not immediate  

Additionally, in distance learning programs such as the University of Tolima, where students attend in person only one day per week, the challenge becomes greater. This type of modality requires students to develop autonomous learning skills and strong time management.

Tips for success:
• Be self-taught  
• Manage your time  
• Practice constantly  
• Use additional resources  
• Work as a team  
• Do not give up on mistakes  

Is it worth it?
Yes, Systems Engineering is worth it for those who are interested in technology and are willing to take on the challenge of continuous learning.

It is not an easy career, but it offers great opportunities for professional and personal growth.

Systems Engineering is a career with a promising future, but it requires commitment, discipline, and autonomy. Especially in distance learning modalities, success largely depends on individual effort.

With the right tools and a good learning attitude, it is possible to make the most of everything this career has to offer.`,
    image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f',
    date: 'March 18, 2026',
    category: 'Career'
  },
  {
    id: 3,
    slug: 'how-i-am-improving-my-english',
    title: 'How I Am Improving My English',
    shortDescription: 'Strategies and tools to improve English, especially in technology fields.',
    fullContent: `Learning English has become an essential skill, especially in fields related to technology. In areas like Systems Engineering, a large amount of information, documentation, and tools are in English.

Why is learning English important?
English is considered the global language of technology. Most programming languages, documentation, tutorials, and professional resources are written in English.

Strategies to improve English:
• Practice every day  
• Focus on reading, writing, listening, and speaking  
• Learn vocabulary related to your field  
• Be patient and consistent  

Useful tools and resources:
One useful option is USA Learns, a free platform that offers interactive lessons.

Other resources:
• Watching videos in English  
• Reading documentation  
• Using apps and courses  
• Listening to music or podcasts  

The importance of consistency:
Studying a little every day is more effective than studying occasionally.

Improving English is a gradual process that requires dedication and the use of appropriate tools. With constant practice, it is possible to strengthen this skill and access better opportunities.`,
    image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0',
    date: 'March 15, 2026',
    category: 'Learning'
  },
  {
    id: 4,
    slug: 'future-of-technology-in-colombia',
    title: 'The Future of Technology in Colombia',
    shortDescription: 'An overview of technological growth, challenges, and opportunities in Colombia.',
    fullContent: `Technology is rapidly transforming societies around the world, and Colombia is no exception.

Digital growth and innovation:
Colombia has strengthened its technological ecosystem through startups and entrepreneurship. Cities like Bogotá and Medellín are innovation hubs.

Key areas:
• Artificial Intelligence  
• Software development  
• Cybersecurity  
• E-commerce  
• EdTech  

Challenges:
• Limited access in rural areas  
• Need for better digital education  
• Infrastructure gaps  
• Lack of skilled professionals  

Opportunities:
The demand for tech professionals continues to grow, especially for Systems Engineering students.

The future of technology in Colombia is promising, with continuous growth in innovation and digital transformation. With preparation and the right mindset, great opportunities can be achieved.`,
    image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41',
    date: 'March 12, 2026',
    category: 'Technology'
  }
];
