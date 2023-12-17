export const BlogData = [
  {
    slug: 'tailwind-over-everything',
    blog_title: 'Tailwind over everything. Mocking the iOS Weather app UI',
    blog_description: 'This is why I will use Tailwind CSS for almost every project moving forward.',
    blog_publish_date: 'Dec 16, 2023',
    blog_main_image_url: 'https://www.b-r.io/_next/image?url=%2Fblog%2Ftailwind%2Fimage.png&w=750&q=100',
    blog_main_description:
      "Tailwind CSS is a utility-first CSS framework that has taken the web development world by storm. It has quickly become a go-to choice for developers who want to streamline their CSS workflow and build websites faster. If you're not already familiar with Tailwind, you may be wondering what all the fuss is about. In this blog, we'll explore some of the key benefits of using Tailwind CSS as well as some of the drawbacks of more traditional approaches to CSS development. By the end of this post, you'll have a better understanding of how Tailwind can make your development process more efficient and effective, and why it's quickly becoming a must-have tool for web developers of all levels.",
    blogs: [
      {
        blog_title: "Let's Talk about DX",
        blog_description:
          "In design, there's User Interface, User Experience, and Human Interface (as Apple calls it), but let's not forget about the Developer Experience. Tailwind is a great example of a tool that makes the developer experience better" +
          'Working with CSS files that go unused can be a frustrating experience for developers. When a CSS file contains styles that are no longer used in the project, it can make it difficult to find and update the styles that are needed. in the long run. Here are a couple key points to consider:',
        blog_list: ['Less time thinking of funky names', 'Reduce the size of your CSS files', 'Editing already existing styles feels safer'],
        blog_paragraph: [
          '1 - Tailwind helps you save time and effort by eliminating the need to create unique class names for every element in your UI. You no longer have to struggle to come up with abstract or irrelevant names such as "sidebar-inner-wrapper" or "content-container".',
          "2 - making it easier to manage and maintain. Unlike traditional CSS, where you need to create new stylesheets for every new feature, Tailwind's utility classes can be easily reused throughout your project, significantly reducing the need to write new CSS code.",
          "3 - because classes are local to the HTML elements. With global CSS, any change you make can have unforeseen consequences elsewhere in your project, but with Tailwind, you can make changes with confidence, knowing that you won't accidentally break anything.",
        ],
      },
      {
        blog_title: 'Looking forward',
        blog_description:
          "On the bright side, we're starting to see more and more tools prioritizing the developer experience. This is a huge plus for us developers who want to focus on building features and functionality, rather than spending hours trying to figure out how to style a component.",
      },
      {
        blog_title: 'Speed and Efficiency',
        blog_description:
          'Check out this iOS weather widget. I was able to create this component in less than 5 minutes, which would have taken me much longer if I had to write the CSS and having to switch between files.',
      },
      {
        blog_title: 'The Power of Reusable Components',
        blog_description:
          'One of the key advantages of Tailwind CSS is its promotion of reusable components. Which is now a standard in the front-end world. By using pre-defined classes, Tailwind allows developers to create reusable components that can be easily used throughout the codebase.',
        blog_code_block:
          'const WeatherList = () => {\n' +
          '  return (\n' +
          '    <div className="my-8 flex flex-col gap-2">\n' +
          '      {data.map((item, index) => (\n' +
          '        <CityCard key={index} data={item} />\n' +
          '      ))}\n' +
          '    </div>\n' +
          '  );\n' +
          '};',
      },
      {
        blog_description:
          "Continuing with the weather theme here, let's create a reusable card component that can be used to display the current weather for a list of cities. With Tailwind, you can style your HTML elements without having to write any CSS rules. This can save you a lot of time, especially if you are working on a large project. Then when you need to reuse this, you don't have to go look for the styles.css file and copy it to a new location.",
        blog_code_block:
          'export default const CityCard = ({item}) => {\n' +
          '  return (\n' +
          '    <div\n' +
          '      className={`flex justify-between rounded-3xl bg-gradient-to-br text-white p-4 lg:px-8\n' +
          '      ${item.color}\n' +
          '    `}>\n' +
          '      <div>\n' +
          '        <p className="text-xl font-bold">{item.city}</p>\n' +
          '        <p className="text-sm font-medium mb-5 opacity-75">{item.time}</p>\n' +
          '        <p className="text-sm font-medium mt-auto">{item.state}</p>\n' +
          '      </div>\n' +
          '      <div className="flex flex-col justify-between">\n' +
          '        <p className="text-5xl">{item.temperature}°</p>\n' +
          '        <p className="text-sm font-medium mt-auto opacity-75">\n' +
          '          H:{item.temperature + 7}°\n' +
          '          L:{item.temperature - 7}°\n' +
          '        </p>\n' +
          '      </div>\n' +
          '    </div>\n' +
          '  );\n' +
          '};',
      },
      {
        blog_description:
          'So what? This approach not only makes development more efficient but also ensures that the UI is consistent across the project. Additionally, reusable components can be easily updated and maintained, reducing the amount of duplicate code and improving the overall quality of the codebase.',
      },
      {
        blog_title: 'What About Other UI Libraries?',
        blog_paragraph: [
          "While there are many UI libraries available, from my experience, I always found myself overriding the default styles of the library to match my project's design language. UI libraries can be a great choice for small projects where you want to quickly create a functional and visually appealing user interface.",
          'However, at scale, you typically have branding and a company design language that you want to follow or set forth. In these cases, using a UI library may not be the best approach as it can be challenging to customize the styles to fit your branding and design requirements.',
          "Instead, creating custom components using a utility-first CSS framework like Tailwind can be a better option, as it allows for more flexibility and control over the styling of the components. Overall, while UI libraries can be useful for smaller projects, it's important to consider the specific requirements and constraints of each project before making a decision on which approach to take.",
        ],
      },
    ],
    blog_tags: ['Styling', 'Css', 'TailwindCss'],
  },
  {
    slug: 'itpark-my-new-work-place',
    blog_title: 'It-Park of Uzbekistan, My new work place.',
    blog_description: 'I joined the It park company 2 months ago, and now we are doing various projects together with our team',
    blog_publish_date: 'Dec 17, 2023',
    blog_main_image_url: 'https://i.ibb.co/VvMzGpd/1.jpg',
    blog_main_description:
      'IT Park is a complex of facilities, buildings and structures designed to ensure the startup and market access, an extraterritorial free economic zone for IT companies, including integration with scientific and educational organizations.',
    blogs: [
      {
        blog_title: 'IT Park Today',
        blog_description:
          'On July 24, 2019 the first IT Park in the Republic of Uzbekistan opened its doors in Tashkent. In a given short amount of time, IT Park has already brought its first fruits in the form of 28 new startups, created dozens of projects in the field of information technology, as well as trainings, workshops and meetings to encourage the youth of our country, their interest in this area and develop computer literacy among the population.',
        blog_list: [
          'IT Park is a complex of facilities, buildings and structures designed to ensure the',
          'startup and market access, an extraterritorial free economic zone for IT',
          'companies, including integration with scientific and educational organizations.',
        ],
        blog_video_url: [
          {
            url_image: 'https://www.spot.uz/media/img/2022/08/dK6J7q16617527520523_l.jpg',
            url_video: 'https://youtu.be/zgFs5IZTHyA',
            video_title: 'How is compensation for international IT certifications?',
            video_description:
              'IT Park helped students get internships and covered 70% of their educational expenses. Students covered the rest of their tuition through an international certificate program.',
          },
        ],
        blog_alert:
          'We are looking for startup projects in the field of IT, aimed at the global market. If you meet the criteria described above, then join us for a three-month program to gain the skills necessary for entrepreneurs to create and manage their company.',
      },
      {
        blog_title: 'Do you want to become a resident?',
        blog_description:
          'Legal entities registered on the territory of the Republic of Uzbekistan can become the resident of IT Park. The status gives an opportunity to be exempted from paying taxes, as well as receive a number of benefits.',
        blog_paragraph: [
          '1 On November 20, 2019 President Republic of Uzbekistan Shavkat Mirziyoyev visited IT Park and laid the first symbolic stone for the construction of a new stage. “The stability of our economy, high-quality and efficient operation in all sectors, the convenience of life of the population depend on information technologies. Therefore, it is necessary to create more extensive opportunities for this sphere, the necessary infrastructure, to encourage specialists, to educate capable youth”, said Shavkat Mirziyoyev.',
          '2 During the first visit of the President of the Republic of Uzbekistan Shavkat Mirziyoyev to the Republic of India, which was held from September 30 to October 2, 2018, Uzbek and Indian Parties agreed to expand cooperation in the field of IT. The Uzbek side, together with the information and technology companies of India, expressed interest in creating an Information Technology Park in Uzbekistan on basis of their best practices in software development and accelerating startups. Thus, it can be noted that IT Park was created on the initiative of the President of the Republic of Uzbekistan to improve the startup ecosystem and startup projects and their implementation in our country.',
        ],
        blog_images: ['https://i.ibb.co/VvMzGpd/1.jpg', 'https://i.ibb.co/NtjRBjX/7.jpg', 'https://i.ibb.co/K5P43SQ/3.jpg', 'https://i.ibb.co/Wz343NF/6.jpg'],
      },
      {
        blog_title: 'The American publication Stock Investor highlights the attractiveness of the IT market in Uzbekistan for foreign investors',
        blog_description:
          'The American publication Stock Investor published an article on the rapid development of the IT sector in Central Asia, specifically in Uzbekistan.  The article underscores that Uzbekistan, among the five Central Asian republics, is drawing investor attention with its ambition to become a global player in the field of information technology. The swift economic growth in the region, especially in Kazakhstan and Uzbekistan, presents investment prospects in the IT sector. According to World Bank projections, the regional GDP may strengthen by 4.8% by the end of 2023, maintaining an average of 4.7% in the next couple of years.',
      },
      {
        blog_title: 'Create your future with IT Park University',
        blog_description:
          'The founders of the first new format university in Uzbekistan are EPAM Systems, one of the world leaders in software development, and IT Park. Bachelor students learn the basics of computer science and acquire critical teamwork and project execution skills. The study program covers all major topics in software engineering, focusing on real-life competencies and hands-on experience that are essential for a successful career in IT. The duration of the bachelor program is 3 years. In the process, students improve their knowledge of the English language, as the learning takes place in English.',
        blog_images: [
          'https://itpu.uz/upload/landing/4e4/lm8l35gp470sj14b5v36pv65pejgjoji/1_44_@2x.jpg',
          'https://i.ibb.co/4StR2L5/22.jpg',
          'https://i.ibb.co/hWwJhpB/33.jpg',
          'https://i.ibb.co/VqQKcdN/44.jpg',
        ],
        blog_paragraph: [
          '1 IT Park of Uzbekistan is the leading center in the field of IT in the Republic of Uzbekistan, the first Information Technologies Park, which was created on the initiative of the President of Uzbekistan on January 10, 2019.',
          '2 The main goal of the organization is to develop the IT-sector in Uzbekistan, create the necessary infrastructure, reform the system of training in IT-specialties, launch promising start-up projects, and support IT-companies.',
          '3 To date, the organization has opened more than 200 IT-centers and is implementing the creation of more than 200 IT-schools throughout the country. The number of technopark resident companies is more than 500, and by the end of 2022, the number of branches and representative offices of the IT Park in the country and abroad will reach 14.',
        ],
        blog_video_url: [
          {
            url_image: 'https://www.park.edu/wp-content/uploads/2022/02/park-logo-white-on-red.jpg',
            url_video: 'https://youtu.be/4OfotY_jxXs',
            video_title: 'It park University of Uzbekistan',
            video_description: 'We invite applicants, their parents and everyone interested in IT education to our webinar "How to become a student of IT Park University".',
          },
        ],
      },
    ],
    blog_tags: ['New-Work', 'About', 'ItPark', 'It Park University'],
  },
]
