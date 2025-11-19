import type { Article } from "../../types/article";
interface ArticleListProps {
  items: Article[];
}
const ArticleList = ({ items }: ArticleListProps) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.story_id}>
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
