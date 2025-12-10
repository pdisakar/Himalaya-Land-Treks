'use client';
import { BASE_URL, IMAGE_URL } from '@/lib/constants';
import { PackageContent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface TripModuleProps {
  tripData: PackageContent;
}

function TripModule({ tripData }: TripModuleProps) {
  const {
    package_title,
    urlinfo,
    featured,
  } = tripData;

  const slug = urlinfo.url_slug;

  const renderImage = (className: string) => (
    <Link
      href={BASE_URL + slug}
      className={`image-slot before:pt-[60%] ${className} `}>
      {featured && (
        <Image
          src={`${IMAGE_URL}${featured.full_path}`}
          alt={featured.alt_text || package_title}
          width={306}
          height={310}
          sizes="(min-width: 400px) 50vw, 100vw"
          className="object-cover"
          loading="lazy"
        />
      )}
    </Link>
  );

  return (
    <div className="item lg:col-span-2 overflow-hidden">
      <figure className="intro-img relative lg:before:absolute before:top-[35px] before:right-0 before:content-[''] before:h-full before:w-40 before:bg-gradient-to-l before:from-white before:to-transparent before:z-[11]">
        {renderImage('')}
      </figure>
    </div>
  );
}

interface TripOftheMonthProps {
  renderData: PackageContent;
  title?: string;
  subTitle?: string;
}

export default function TripOftheMonth({
  renderData,
  title,
  subTitle,
}: TripOftheMonthProps) {
  const {
    total_testimonials,
    package_title,
    package_duration,
    package_duration_type,
    group_default_price
  } = renderData;

  const package_total_testimonials = total_testimonials || 10;

  return (
    <section className="trip-of-the-month bg-white relative before:absolute before:top-0 before:left-0 before:w-full before:content-[''] before:h-[35px] before:bg-body-bg">
      <div className="container grid lg:grid-cols-3">
        <TripModule tripData={renderData} />
        <div className="trip-of-the-month-meta lg:grid-cols-1  my-auto lg:-ml-6 z-30 py-6">
          <div className="title">
            <span className='subtitle'>Trip Of the Month</span>
            <h2>{package_title}</h2>

          </div>
          <ul className="package-meta flex gap-6 items-center lg:pt-6 leading-[1.4] text-sm md:text-md">
            <li className="duration relative pl-10">
              <i className="icon h-8 w-8 top-1 absolute left-0">
                <svg>
                  <use xlinkHref="/icons.svg#duration" />
                </svg>
              </i>
              <span className="block text-xs  font-medium">
                Duration
              </span>
              <span className="font-bold text-md capitalize">
                {package_duration_type === "days"
                  ? `${package_duration - 1} Nights ${package_duration} Days`
                  : `${package_duration} ${package_duration_type}`}
              </span>
            </li>
            <li className="duration relative pl-10">
              <i className="icon h-8 w-8  top-1 absolute left-0">
                <svg>
                  <use xlinkHref="/icons.svg#best-price" />
                </svg>
              </i>
              <span className="block text-xs  font-medium">
                Price Starts From
              </span>
              <span className="font-bold text-lg">
                US ${group_default_price}
              </span>
            </li>
          </ul>
        </div>
      </div>


    </section>
  );
}
