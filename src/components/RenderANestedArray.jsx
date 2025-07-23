const RenderANestedArray = () => {
  const categories = [
    {
      title: "Fruits",
      items: ["Apple", "Banana"],
    },
    {
      title: "Vegetables",
      items: ["Carrot", "Tomato"],
    },
  ];

  return (
    <div>
      {categories.map((category) => (
        <>
          <h3>{category.title}</h3>
          <ul>
            {
              <li>
                {category.items[0]}, {category.items[1]}
              </li>
            }
          </ul>
        </>
      ))}
    </div>
  );
};
export default RenderANestedArray;
