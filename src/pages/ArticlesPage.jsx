import { Articles } from "../components/Articles";
import { Seo } from "../components/Seo";

export default function ArticlesPage() {
  return (
    <>
      <Seo
        title="Articles"
        description="Stories, guides, and insights from the PPI Monash Malaysia community — student life, events, and experiences studying in Malaysia."
        path="/articles"
      />
      <Articles />
    </>
  );
}
