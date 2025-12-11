import { BASE_URL } from '@/lib/constants';
import { getHomeData } from '@/services/network_requests';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import DepartureTrips from '@/components/DepartureTrips';

const BestSellingPackages = dynamic(
  () => import('@/components/BestSellingPackages')
);
const FeaturedReview = dynamic(
  () => import('@/components/FeaturedReview/FeaturedReview')
);
const HomeContent = dynamic(() => import('@/components/HomeContent'));
const FeaturedBlog = dynamic(() => import('@/components/FeaturedBlog'));
const FeaturedCategories = dynamic(
  () => import('@/components/FeaturedCategories')
);
const Service = dynamic(() => import('@/components/services'));
const Banner = dynamic(() => import('@/components/Banners/HomeBanner'));

function getTravelYear(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const startYear = month === 11 ? year + 1 : year;
  const endYearShort = (startYear + 1).toString().slice(-2);

  return `${startYear}/${endYearShort}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomeData();
  const pagecontent = data?.pagecontent;
  return {
    title: pagecontent?.meta?.meta_title,
    description: pagecontent?.meta?.meta_description,
    alternates: {
      canonical: process.env.CANONICAL_BASE,
    },
    openGraph: {
      title: pagecontent?.meta?.meta_title,
      description: pagecontent?.meta?.meta_description,
      url: process.env.CANONICAL_BASE,
    },
  };
}

import type React from 'react';
import TripSearch from '@/components/TripSearch/TripSearch';
import TripOftheMonth from '@/components/TripOftheMonth';
export default async function Home(): Promise<React.ReactElement> {
  const [data] = await Promise.all([getHomeData()]);
  console.log(data);

  const testimonialsAvatars =
    'featured_testimonials' in data && Array.isArray(data.featured_testimonials)
      ? data.featured_testimonials
          .filter((itm: any) => itm?.avatar !== null)
          .map((a: { avatar: any }) => a.avatar)
      : [];
  const bannerData = data.pagecontent.carousel.content[0];

  return (
    <>
      <Banner
        single={true}
        renderData={bannerData}
        video={false}
        className=""
      />
      <TripSearch featuredCategory={data.featured_categories} />
      {/* <FeaturedCategories
        title="Explore your ways out…"
        lead="Discover the best of the Himalayas with our featured categories, showcasing the most popular and beloved tours."
        renderData={data.featured_categories}
        className="common-box wave-bottom bg-light"
      /> */}

      {/* <Service className="pt-6 lg:pt-8" /> */}

      <FeaturedReview
        renderData={data.featured_testimonials}
        title={`Whats our <b>Clients Say</b>`}
        classes="common-box featured-testimonial"
      />

      <BestSellingPackages
        className="common-box pt-0"
        titleClassName="text-center"
        renderData={data.featured_packages}
        title={`Best Seller Treks`}
        lead="The Himalayan region offers some of the world's best treks. Among them, the popular ones are Everest Base Camp, Annapurna Base Camp, Manaslu Circuit, Everest Heli Trek, Langtang Valley, and Annapurna Circuit Trek. Each trek offers a unique experience and breathtaking views of the Himalayan mountains."
        linkTo={BASE_URL + data.category_section_a.urlinfo.url_slug}
      />

      <DepartureTrips
        containerClass="container"
        classes="common-box pt-0 "
        title="Join Upcoming Departures"
        lead="Looking for an adventure-packed trip to Nepal? Look no further! Book this trip with us and get ready to experience the stunning natural beauty and adventure activities that Nepal has to offer.
"
      />

      <TripOftheMonth
        renderData={data.trip_of_the_month}
        title="Trip of the Month"
        subTitle=""
      />

      <BestSellingPackages
        titleClassName="text-center"
        className="common-box"
        testimonialsAvatars={testimonialsAvatars}
        renderData={data.category_section_a.packages}
        title={`Featured Trips`}
        subTitle="Handpicked for you"
        lead="Himalaya Land Treks offers an array of thrilling packages. Experience the awe-inspiring Budget Everest Base Camp Trek, discover the hidden beauty of Mardi Himal, marvel at the panoramic views of Ghorepani Poon Hill, explore the mystic Upper Mustang, conquer EBC with Island Peak, or challenge yourself with the exhilarating Three Passes Trek. Unforgettable adventures await in the Himalayas."
        linkTo={BASE_URL + data.category_section_a.urlinfo.url_slug}
      />

      <HomeContent renderData={data.pagecontent} />

      <FeaturedBlog
        renderData={data.featured_blogs}
        classes="common-box"
        title="Latest Posts"
        subTitle="Travel related news and updates"
        lead="Explore the breathtaking beauty of the Himalayas with our expert travel guide. Discover hidden trails, remote villages, and majestic peaks."
        limit={4}
      />
    </>
  );
}
