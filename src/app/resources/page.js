import Resources from "./Resources";
import { FetchResources } from "../resource_actions";
import { FetchCategories } from "../category_actions";
export default async function ResourceMain({searchParams}) {

  const {search, category, sort} = searchParams
  const resourceResponse = await FetchResources(search, category, sort)
  const catResponse = await FetchCategories();
  return (
   <Resources resourceResponse={resourceResponse} catResponse={catResponse} />
  );
}
