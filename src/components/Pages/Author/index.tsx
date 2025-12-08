
import { useState } from "react";
import client from "../../../services/network";
import dynamic from "next/dynamic";
const Breadcrumb = dynamic(() => import("../../Breadcrumb"));
const PageBanner = dynamic(() => import("../../Banners/PageBanner"));
const AuthorItem = dynamic(() => import("@/components/AuthorItem"));

interface AuthorData {
  listcontent: any[];
}

export default function Author({ data }: { data: AuthorData }) {
    const [posts, setPosts] = useState<any[]>(data.listcontent);
    const [loading, setLoading] = useState<boolean>(false);
    const [noData, setNoData] = useState<boolean>(false);

    // const loadMore = async () => {
    //   setLoading(true);
    //   const responce = await client.get(
    //     `/allblogauthors?_start=${posts.length}&_limit=3`
    //   );
    //   const newPost = await responce.data?.data.content;
    //   setPosts((posts) => [...posts, ...newPost]);
    //   setLoading(false);
    //   if (newPost.length <= 1) {
    //     setNoData(true);
    //   }
    // };

    return (
        <>
            <div className="team-list">
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posts?.map((memberItem: any, idx: number) => {
                        return (
                            <li key={idx}>
                                <AuthorItem data={memberItem} />
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* {!noData ? (
          <div className="more-data">
            <button
              type="button"
              className="btn btn-md btn-primary"
              onClick={loadMore}
            >
              {loading && (
                <i
                  className="spinner-border"
                  role="status"
                  style={{ height: "1rem", width: "1rem" }}
                ></i>
              )}
              Load More Authors
            </button>
          </div>
        ) : (
          <p className="no-more-data">
            <i className="icon text-warning">
              <ExclamationTriangle />
            </i>
            No more author available!
          </p>
        )} */}
        </>
    );
}
