import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL, IMAGE_URL, PACKAGE_BASE_URL } from '@/lib/constants';
import { Media, UrlInfo } from '@/types';

interface Destination {
  urlinfo: UrlInfo;
  title: string;
}

interface Testimonial {
  review_rating: number;
}

interface PackageData {
  package_title: string;
  featured?: Media;
  package_discount?: number;
  package_duration: number;
  package_duration_type: string;
  urlinfo: UrlInfo;
  testimonials?: Testimonial[];
  additional_field_1?: string;
  group_default_price: number;
  id: string | number;
  grade?: string;
  trip_style?: string;
  style?: string;
  total_testimonials: number;
  destination?: Destination;
}

import type { PackageItem } from '@/types';
interface PackageCardProps {
  packageData: PackageItem;
  isSuggested?: boolean;
}

export default function PackageCard({
  packageData,
  isSuggested,
}: PackageCardProps) {
  const {
    package_title,
    featured,
    package_discount,
    package_duration,
    package_duration_type,
    urlinfo,
    testimonials,
    additional_field_1,
    group_default_price,
    id,
    grade,
    trip_style,
    style,
    total_testimonials,
    destination,
  } = packageData;

  const slug = urlinfo.url_slug;



  const renderAdditionalField = () => {
    let bgClass = "";
    let iconName = "";

    switch (additional_field_1) {
      case "Private Trip":
      case "Pravite Trip": 
        bgClass = "bg-blue-500";
        iconName = "private_trip";
        break;

      case "On Sale":
        bgClass = "bg-danger";
        iconName = "on_sale";
        break;

      case "Guaranteed Departure":
        bgClass = "bg-primary";
        iconName = "guaranteed_departure";
        break;

      case "Group Tours":
        bgClass = "bg-green-500";
        iconName = "group_tours";
        break;

      default:
        bgClass = "bg-primary";
        iconName = "guaranteed_departure"; // as you said, default uses this SVG
        break;
    }

    return (
      <div
        className={`text-xs font-medium absolute leading-[100%] flex items-center justify-center top-6 left-0 z-10 ${bgClass} px-3 py-[6px] rounded-r-sm text-white flex items-center gap-1`}
      >
        <svg className="inline-block text-white" height={12} width={12}>
          <use xlinkHref={`/icons.svg#${iconName}`} />
        </svg>

        {/* Fix typo but still display correctly */}
        {additional_field_1 === "Pravite Trip"
          ? "Private Trip"
          : additional_field_1}
      </div>
    );
  };


  const renderImage = (className: string) => (
    <Link
      href={PACKAGE_BASE_URL + slug}
      className={`image-slot before:pt-[76.19047619047619%] ${className}`}>
      {featured && (
        <Image
          src={`${IMAGE_URL}${featured.full_path}`}
          alt={
            featured.alt_text
              ? featured.alt_text ?? package_title
              : package_title
          }
          width={320}
          height={420}
          className="object-cover transition-transform group-hover:scale-110"
          sizes="auto, (max-width: 372px) 100vw, 372px"
          fetchPriority="high"
        />
      )}
    </Link>
  );

  return (
    <div className="item rounded-md h-full group">
      <figure className="relative mx-[-1px] mt-[-1px]">
        {renderImage('')}
        {additional_field_1 && <> {renderAdditionalField()}</>}
      </figure>
      <figcaption className="pt-4">
        <div className="caption-header min-h-[60px]">
          <h3 className="line-clamp-2 font-semibold text-[1.125rem] md:text-2xl leading-[1.2]">
            <Link
              href={PACKAGE_BASE_URL + slug}
              className="text-headings transition-color  hover:underline hover:decoration-primary">
              {urlinfo.url_title}
            </Link>
          </h3>

          {(total_testimonials ?? 0) > 0 && (
            <div className="duration inline-flex items-center gap-x-1 text-body/80 text-sm">
              <i className="ratings__5 scale-[0.95]"></i>
              <span>
                (
                {`${(total_testimonials ?? 0) <= 9 ? '0' : ' '}${total_testimonials ?? 0
                  } reviews`}
                )
              </span>
            </div>
          )}

          <ul className='flex items-center justify-between gap-2 flex-wrap mt-4'>
            <li className='flex items-center gap-x-1'>
              <svg
                className="icon"
                width="34"
                height="34"
              >
                <use
                  xlinkHref="/icons.svg#card_price"
                  fill="currentColor"
                ></use>
              </svg>
              <div className="price">
                <span className='leading-[100%] text-sm'>Price</span>
                <span className="text-headings font-bold leading-[100%] text-[17px] block">
                  US${group_default_price}
                </span>
              </div>
            </li>
            <li className='flex items-center gap-x-1'>
              <svg
                className="icon"
                width="34"
                height="34"
              >
                <use
                  xlinkHref="/icons.svg#card_grade"
                  fill="currentColor"
                ></use>
              </svg>
              <div className="trip-grade">
                <span className='leading-[100%] text-sm'>Trip Grade</span>
                <span className="text-headings font-bold leading-[100%] text-[17px] block">
                  {typeof grade === 'object' ? grade?.title : grade}
                </span>
              </div>
            </li>
            <li className='flex items-center gap-x-1'>
              <svg
                className="icon"
                width="34"
                height="34"
              >
                <use
                  xlinkHref="/icons.svg#card_duration"
                  fill="currentColor"
                ></use>
              </svg>
              <div className="duration">
                <span className='leading-[100%] text-sm'>Duration</span>
                <span className="text-headings font-bold leading-[100%] text-[17px] block">
                  {`${package_duration} ${package_duration_type === 'days'
                    ? 'Days'
                    : package_duration_type
                    }`}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </figcaption>
    </div>
  );
}
