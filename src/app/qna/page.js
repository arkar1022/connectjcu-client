import Qna from "./Qna";
import { FetchQna } from "../qna_actions";
import { FetchCategories } from "../category_actions";
export default async function QnaMain({searchParams}) {
  const {search, category, sort} = searchParams

  const qnaResponse = await FetchQna(search, category, sort)
  const catResponse = await FetchCategories();
  return (
   <Qna qnaResponse={qnaResponse} catResponse={catResponse} />
  );
}
