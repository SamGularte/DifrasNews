import { news } from "@/types";
import Link from "next/link";
import Image from "next/image";
import styles from "./RandomArticle.module.css";

const RandomArticle = ({ data }: { data: news }) => {
  return (
    <a href={data?.url} target="_blank" className={styles.RarticleContainer}>
      <div className={styles.RarticleContainerImgcont}>
        <Image
          src={`${
            data?.urlToImage !== null
              ? data?.urlToImage
              : "/img/news-u-logo.webp"
          }`}
          alt={data?.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 100vw"
          className={styles.RarticleContainerImg}
        />
      </div>
      <div>
        <p className={styles.RarticleContainertitle}>{data?.title}</p>
      </div>
    </a>
  );
};

export default RandomArticle;
