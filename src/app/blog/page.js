import Blog from "./Blog";
import { FetchBlogs } from "../blog_actions";
import { FetchCategories } from "../category_actions";
export default async function BlogMain({searchParams}) {
  const {search, category, sort} = searchParams

  const blogResponse = await FetchBlogs(search, category, sort)
  const catResponse = await FetchCategories();
  return (
   <Blog blogResponse={blogResponse} catResponse={catResponse} />
  );
}
