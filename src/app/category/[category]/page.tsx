import { NextPage } from 'next';

interface Props {
  params: {
    category: string;
  };
}

const CategoryPage: NextPage<Props> = ({ params: { category } }) => {
  return <div>CategoryPage: {category}</div>;
};

export default CategoryPage;
