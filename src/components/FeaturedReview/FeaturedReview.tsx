"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import Link from "next/link";
import { BASE_URL } from "@/lib/constants";
import { Testimonial } from "@/types";
import { useGlobalData } from "@/context/globalContext";
import Image from "next/image";

interface FeaturedReviewProps {
  renderData: Testimonial[];
  title: string;
  classes?: string;
}

const services = [
  {
    title: "Our Enthusiastic Team",
    description: "With a group of skilled and trained youths ready to prove themselves",
    svg: "our-enthusiastic-team"
  },
  {
    title: "Best Price Guarantee",
    description: "We are happy to provide a best price to on smart packages.",
    svg: "best-price-guarantee"
  },
  {
    title: "24/7 Support",
    description: "We have 24 hours of customer service with updated information.",
    svg: "24-7-support"
  },
  {
    title: "Your safety is our top priority",
    description: "In an utmost display of respect and impeccable show of concern",
    svg: "your-safety-is-our-top-priority"
  }
]

export default function FeaturedReview({ renderData, title, classes = "" }: FeaturedReviewProps) {
  const { globalData } = useGlobalData();

  const InlineReviewCard = ({ review }: { review: Testimonial }) => {
    console.log(review);

    return (
      <div className="review-card rounded-lg p-6 shadow-sm bg-white border border-gray-100 h-full flex flex-col">
        <div className="review-body mb-3">
          <h3 className="font-medium text-headings mb-2 line-clamp-3">
            {review.urlinfo?.url_title}
          </h3>
          <i className={`ratings__${5}`}></i>
        </div>

        <div className="about-author flex items-center gap-3 mt-auto">
          <div
            className="avatar w-[32px] h-[32px] rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-sm font-medium uppercase"
          >
            {review.full_name?.charAt(0)}

          </div>

          <div className="name">
            <span className="block text-base font-medium leading-[100%]">
              {review.full_name}
            </span>
            <span className="block text-xs mt-[2px] leading-[100%] text-muted">
              {review.affiliate_organization}
            </span>
          </div>
        </div>

      </div>
    );
  };


  return (
    <aside className={classes}>
      <div className="container">
        <div className="our-services">
          <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              services.map((itm, idx) => (
                <li key={idx} className="flex gap-4">

                  <svg className="h-[45px] w-[45px] shrink-0">
                    <use xlinkHref={`/icons.svg#${itm.svg}`} />
                  </svg>
                  <div className="service-content">
                    <h3 className="font-medium text-headings">
                      {itm.title}
                    </h3>
                    <p className="text-muted text-sm mt-1">
                      {itm.description}
                    </p>
                  </div>

                </li>
              ))
            }

          </ul>
        </div>
        <div className="featured-review mt-6">
          <Carousel className="md:[&>.overflow-hidden]:-m-3 [&>.overflow-hidden]:-m-1.5">
            <CarouselContent>
              {renderData?.map((itm, idx) => (
                <CarouselItem
                  key={idx}
                  className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 px-1.5 md:p-3"
                >
                  <InlineReviewCard review={itm} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="carousel-controller flex items-center justify-between mt-6 lg:mt-8">
              <div className="navigation  flex flex-wrap gap-2.5 items-center text-center md:mt-3  
            [&>button]:text-white [&>button]:border-0 [&>button]:shadow-none 
            [&>button]:bg-primary [&>button]:h-7 [&>button]:w-7 [&>button]:rounded 
            [&>button>svg]:h-3 [&>button>svg]:w-3">

                <CarouselPrevious className="gap-0.5 items-center disabled:opacity-20 disabled:cursor-not-allowed">
                  <svg className="rotate-180 h-3 w-3">
                    <use xlinkHref={`/icons.svg#chevron`} fill="currentColor" />
                  </svg>
                </CarouselPrevious>


                <CarouselNext className="gap-0.5">
                  <svg className="h-3 w-3">
                    <use xlinkHref={`/icons.svg#chevron`} fill="currentColor" />
                  </svg>
                </CarouselNext>

              </div>
              <CarouselDots className="mt-0" />
            </div>
          </Carousel>
        </div>
      </div>

    </aside >
  );
}
