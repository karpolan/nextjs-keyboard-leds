import { NextPage } from 'next';

interface Props {
  params: {
    tag: string;
  };
}

const CategoryPage: NextPage<Props> = ({ params: { tag } }) => {
  return <div>TagPage: {tag}</div>;
};

export default CategoryPage;
