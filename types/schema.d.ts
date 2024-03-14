interface INews {
  id: string;
  title: string;
  subTitle: string;
  imageUri: string;

  categories: ICategory[];

  author: string;
  createdAt: string;

  updatedAt?: string;
  markdownContent?: string;
}

interface ICategory {
  id: string;
  name: string;
}
