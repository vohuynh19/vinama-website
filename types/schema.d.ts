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

interface IUser {
  id: string;
  name: string;
  email: string;
  content: string;
  updatedAt: string;
  createdAt: string;
}
