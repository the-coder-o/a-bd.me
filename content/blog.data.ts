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
]
