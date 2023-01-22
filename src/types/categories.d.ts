interface CardConfig {
  map(user: any): React.ReactNode;
  users: [
    {
      id: number;
      images: {
        image: {
          path: string;
          description: string;
        };
      };
      title: string;
      description: string[];
      price: number;
      assessment: number;
      favorites: boolean;
      categories: string[];
    }
  ];
}
