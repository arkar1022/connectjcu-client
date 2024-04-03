import Resources from "./Resources";
import { FetchResources } from "../resource_actions";
import { FetchCategories } from "../category_actions";
export default async function ResourceMain() {
  const resourceResponse = await FetchResources()
  const catResponse = await FetchCategories();
  return (
   <Resources resourceResponse={resourceResponse} catResponse={catResponse} />
  );
}
