
import FeedDiferenciais from "@/components/common/Feed/FeedDiferenciais";
import FeedHome from "@/components/common/Feed/FeedHome";
import FeedLocais from "@/components/common/Feed/FeedLocais";
import FeedServicos from "@/components/common/Feed/FeedServicos";

export default function Home() {
    return (
      <main>
        <FeedHome />
        <FeedServicos />
        <FeedDiferenciais />
        <FeedLocais />
      </main>
    );
  }
  