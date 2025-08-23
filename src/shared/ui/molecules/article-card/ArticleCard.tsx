import clsx from "clsx";
import Link from "next/link";
import { Article } from "@/shared/types/post.types";
import {
  container,
  contentContainer,
  hoverContainer,
  titleStyle,
  content,
} from "./ArticleCard.css";
import CoverImage from "./CoverImage";
import Meta from "./Meta";

export type Variant = "large" | "small" | "wide" | "compact";
interface ArticleCardProps {
  data: Omit<Article, "imageUrl">;
  imageUrl?: string;
  /**
   * large -   305 X 304 / Thread Page
   * medium -  202 X 198 / Main Page
   * wide -    382 X 96 / Node Graph Page
   * compact - 236 X 55 / Thread
   */
  variant?: Variant;
}

export default function ArticleCard({
  data,
  imageUrl,
  variant = "small",
}: ArticleCardProps) {
  return (
    <Link href={`/notebook/${data.id}`}>
      <div
        className={clsx(
          container({ variant, withImg: !!imageUrl }),
          hoverContainer
        )}
      >
        {/* 커버 이미지 */}
        {imageUrl && <CoverImage imageUrl={imageUrl} variant={variant} />}

        <div className={contentContainer({ variant, withImg: !!imageUrl })}>
          {/* 제목 */}
          <strong className={titleStyle({ variant })}>{data.title}</strong>

          {/* 메타 데이터 */}
          {variant === "large" && (
            <Meta
              author={data.author}
              date={data.date}
              likeCount={data.likeCount}
            />
          )}

          {/* 본문 */}
          <div className={content({ variant, withImg: !!imageUrl })}>
            {data.description}
          </div>
        </div>
      </div>
    </Link>
  );
}
