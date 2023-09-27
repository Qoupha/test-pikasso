import styles from "./styles.module.css";
import { Post } from "../../model";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { CSSProperties, useState } from "react";
import PostCard from "../postCard";

export default function ListPostCard({
  data,
  countSkip,
}: {
  data: Post[];
  countSkip: number;
}) {
  const [load, setLoad] = useState(data.slice(0, countSkip));

  const Row = ({ index, style }: { index: number; style: CSSProperties }) => (
    <PostCard item={load[index]} style={style} />
  );

  const loadMore = (idx: number) => {
    setLoad([...load, ...data.slice(idx, idx + countSkip)]);
  };

  const itemCount = load.length !== data.length ? load.length + 1 : data.length;

  return data ? (
    <InfiniteLoader
      isItemLoaded={(index) => index < load.length}
      itemCount={itemCount}
      loadMoreItems={loadMore}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={900}
          width={600}
          itemCount={itemCount}
          itemSize={200}
          className={styles["list-container"]}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Row}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  ) : (
    <p>Loading</p>
  );
}
