import Card from "./components/card";

function App() {
  // Generate an array of dummy data for multiple cards
  const dummyData = [
    {
      id:1,
      name: "John Doe",
      date: "September 7, 2023",
      title: "This is a topic about state Management",
      avatarUrl: "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg",
      tags: ["UI/UX", "Web Development"],
      description: "This is a short description and we are going to discuss state. Learning about states is very important.",
      commentCount: 24,
      value: "Some Value 1",
    },
    {
      id:2,
      name: "Jane Smith",
      date: "September 8, 2023",
      title: "Introduction to React Hooks with Tom",
      avatarUrl: "https://purepng.com/public/uploads/large/purepng.com-tom-and-jerrytom-and-jerrytomjerryanimated-seriesin-1940characters-1701528659684fbbz1.png",
      tags: ["React", "Frontend"],
      description: "An introduction to React Hooks and how to use them in your projects.",
      commentCount: 12,
      value: "Some Value 2",
    },
    // Add more dummy data objects for additional cards
  ];

  return (
      <div className="flex flex-row ">
        {/* Map over the dummy data to render each card */}
        {dummyData.map((cardProps, index) => (
            <Card key={index} {...cardProps} />
        ))}
      </div>
  );
}


export default App;
