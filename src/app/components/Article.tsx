import { news } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import styles from "./Article.module.css";

const Article = ({ data }: { data: news }) => {
  return (
    <article>
      <a href={data?.url} target="_blank" className={styles.articleCard}>
        <div className={styles.articleCardImgCont}>
          <Image
            src={`${data?.urlToImage !== null ? data?.urlToImage : ""}`}
            alt={data?.title}
            fill
            sizes="(max-width: 768px) 21,875rem, (max-width: 1200px) 21,875rem, 21,875rem"
            className={styles.articleCardImg}
          />
        </div>
        <div>
          <div className={styles.tagsContainer}>
            <Tag data={data?.source.name} />
            <Tag data={new Date(data?.publishedAt).toDateString()} />
          </div>

          <p>{data?.title}</p>

          <p className={styles.articleParagraph}>{data?.description}</p>
        </div>
      </a>
    </article>
  );
};

export default Article;
