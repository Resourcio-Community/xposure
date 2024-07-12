interface DataType {
    id: string;
    profileImg?: string,
    image?: string[];
    reel?: string;
    name: string;
    description?: string;
  }

  // Create an array of objects of type DataType
  export const Data = [
    {
      id: "1",
      image: ["/assets/placeholder.jpg","/assets/placeholder.jpg","/assets/placeholder.jpg","/assets/placeholder.jpg"],
      reel: ["https://www.youtube.com/embed/OBqw818mQ1E?si=NthCyKdicnO85tmt","https://www.youtube.com/embed/OBqw818mQ1E?si=NthCyKdicnO85tmt"],
      profileImg:'/assets/placeholder.jpg',
      name: "John Doe",
      description: "#photographer #content creator",
    },
  ];


  const extractAndFilterImages = (data: DataType[]): string[] => {
    // Initialize an empty array to store the filtered images
    const filteredImages: string[] = [];

    // Iterate through each object in the data array
    data.forEach((item) => {
      // Push the relevant image paths to the filteredImages array
      filteredImages.push(item.image);
      filteredImages.push(item.profileImg);
    });

    // Return the filtered images array
    return filteredImages;
  };

  const filteredImages = extractAndFilterImages(Data);

  console.log(filteredImages); 