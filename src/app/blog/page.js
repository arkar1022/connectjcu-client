import Blog from "./Blog";
import { FetchBlogs } from "../blog_actions";
import { FetchCategories } from "../category_actions";
export default async function BlogMain() {
  const blogResponse = await FetchBlogs()
  const catResponse = await FetchCategories();
  return (
   <Blog blogResponse={blogResponse} catResponse={catResponse} />
  );
}
