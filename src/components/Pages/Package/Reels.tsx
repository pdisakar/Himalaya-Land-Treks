import { useRef, useState } from "react";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReelItem from "../../ReelItem";
import { BASE_URL } from "@/lib/constants";

interface ReelItemData {
  video_url: string;
  // Add other properties if they exist in reel data
}

interface ReelsProps {
  limit?: number;
  renderData: ReelItemData[];
}

export default function Reels({
  limit,
  renderData,
}: ReelsProps) {
const [swiper, setSwiper] = useState<any>(null);
  const swiperRef = useRef<any>(null);
  const packageReels = renderData?.slice(0, limit);

  return (
    <>{renderData && (
      <div className="swiper-carousel-outer">
        <div className="reels reels-carousel">
          {packageReels?.length > 3 ? (
              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                ref={swiperRef}
                updateOnWindowResize
                observeParents
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 3,
                  },
                }}
onSwiper={(s: any) => setSwiper(s)}
              >
                {renderData?.map((itm, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ReelItem data={itm} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
          ) : (
            <ul className="grid grid-cols-3 gap-6">
              {packageReels?.map((itm, index) => {
                return (
                  <li key={index}>                    
                    <ReelItem data={itm} />
                  </li>
                );
              })}
            </ul>
          )}
          {
            packageReels.length > 3 && 
          <div className="swiper-navigation overly-middle">
            <div
              className="swiper-button-prev small radius"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
              <i className="icon h-3 w-3">
              <svg className="-rotate-[135deg]"><use xlinkHref={BASE_URL+'icons.svg#arrow-45'}></use></svg>
              </i>
            </div>
            <div
              className="swiper-button-next small radius"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
              <i className="icon h-3 w-3">
              <svg className="rotate-[45deg]"><use xlinkHref={BASE_URL+'icons.svg#arrow-45'}></use></svg>
              </i>
            </div>
          </div>
}
        </div>

      </div>
    )}
    </>
  );
}
