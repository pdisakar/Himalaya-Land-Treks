"use client";
import { useState } from "react";
import axios from "axios";
import { PRODUCTION_SERVER, SITE_KEY } from "@/lib/constants";
import Loading from "@/components/Loading";
import ReviewItem from "../../ReviewItem";

interface TripReviewProps {
  slug: string;
  renderData: any;
}

export default function TripReview({ slug, renderData }: TripReviewProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>(renderData);
  const [noData, setNoData] = useState<boolean>(false);

  const loadMore = async (): Promise<void> => {
    setLoading(true);
    const responce = await axios.get(
      `${PRODUCTION_SERVER}/testimonials/${slug}?_start=${data.length}&_limit=3`,
      { headers: { sitekey: SITE_KEY } }
    );
    const newData = await responce.data?.data.content;
    setData((testimonial) => [...testimonial, ...newData]);
    setLoading(false);
    if (newData.length <= 1) {
      setNoData(true);
    }
  };

  return (
    <div className="testimonial package-testimonial">
      <ul>
        {data?.slice(0, 3)?.map((itm: any, idx: number) => {

          return (
            <li key={idx} className={idx !== 0 ? "mt-4" : ""}>
              <ReviewItem data={itm} collapsible />
            </li>
          );
        })}
      </ul>

      {loading && (
        <div className="loading">
          <i className="icon h-14 w-14 text-secondary">
            <Loading fill="currentColor" />
          </i>
        </div>
      )}

      {!noData && !loading && (
        <button
          type="button"
          className="btn btn-primary btn-md shadow-lg shadow-secondary/10 mt-6"
          onClick={loadMore}
        >
          Load More Reviews
        </button>
      )}
    </div>
  );
}
