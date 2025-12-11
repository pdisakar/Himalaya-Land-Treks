'use client';

import Link from 'next/link';
import Searvice from '../services';
import HomeFaqs from '../HomeFaqs/HomeFaqs';
import Image from 'next/image';

import FeaturedImages from '../../assets/images/featured-img.jpg';
import client1 from '../../assets/images/img-01.jpg';
import client2 from '../../assets/images/img-02.jpg';
import client3 from '../../assets/images/img-03.jpg';
import client4 from '../../assets/images/img-04.jpg';

interface PageProps {
  renderData: PageItem;
}

interface PageItem {
  page_title: string;
  page_description: string;
}

export default function HomeContent({ renderData }: PageProps) {
  const { page_title, page_description } = renderData;
  return (
    <section className=" common-box bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="about-us-section">
            <div className="title [&>h1]:drop-shadow-black [&>h1]:text-shadow-white">
              <h1
                className="text-3xl md:text-4xl font-normal mb-2"
                dangerouslySetInnerHTML={{ __html: page_title }}
              />
            </div>

            <article
              className="text-base tracking-wide [&>ul>li]:text-left [&>blockquote]:text-base md:[&>blockquote]:text-lg "
              dangerouslySetInnerHTML={{
                __html: page_description,
              }}></article>
          </div>

          <HomeFaqs />
        </div>
      </div>

      <section className="common-box pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto">
              <div className="why-book-slout grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <figure className="image-slot before:pt-[100%] rounded-full max-w-[450px] mx-auto">
                    <Image
                      src={FeaturedImages}
                      height={600}
                      width={600}
                      alt="Himalaya Land Treks"
                      layout="responsive"
                    />
                  </figure>
                  <div className="experience-slot absolute bottom-0 right-0 z-20 bg-primary py-6 px-8 rounded-lg">
                    <div className="experience">
                      <span className="text-big block text-[calc(1.3375rem+1.05vw)] font-semibold">
                        10+
                      </span>
                      <span className="text-small block font-semibold tracking-[0.5px]">
                        Years of Experience
                      </span>
                    </div>
                    <div className="clients mt-4">
                      <ul className="flex items-center justify-center [&>li>span>img]:rounded-full [&>li]:-ml-2">
                        <li>
                          <span>
                            <Image
                              src={client1}
                              height={36}
                              width={36}
                              alt="client 1"
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            <Image
                              src={client2}
                              height={36}
                              width={36}
                              alt="client 2"
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            <Image
                              src={client3}
                              height={36}
                              width={36}
                              alt="client 3"
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            <Image
                              src={client4}
                              height={36}
                              width={36}
                              alt="client 4"
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            <Image
                              src={client1}
                              height={36}
                              width={36}
                              alt="client 1"
                            />
                          </span>
                        </li>
                      </ul>

                      <span className="text-small text-sm font-semibold mt-2 block tracking-[0.5px]">
                        25000+ Happy Traveller
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content-area">
                  <div className="content-title">
                    <h3 className="text-[calc(1.3rem+.6vw)]">
                      Why book with Himalayan Land Treks
                    </h3>
                    <p className="lead mt-1 text-muted">
                      "HImalayan Land Treks offers a unique adventure experience
                      with stunning landscapes, diverse cultures, and a chance
                      to challenge oneself."
                    </p>
                  </div>
                  <ul className="mt-6 [&>li>h4]:text-[calc(1rem+.2vw)] [&>li>p]:text-muted [&>li>p]:mt-1 [&>li]:relative [&>li>i]:absolute [&>li>i]:top-0 [&>li>i]:left-0 [&>li]:pl-10 [&>li]:mb-6 [&>li>i]:p-1 [&>li>i]:bg-primary [&>li>i]:rounded-full">
                    <li>
                      <i className="icon">
                        <svg
                          className=" text-white"
                          height={20}
                          width={20}>
                          <use href="/icons.svg#chevrons-right" />
                        </svg>
                      </i>
                      <h4>Blend of Knowledge and Experience</h4>
                      <p>
                        With a team of highly inquisitive minds, our members
                        have gained valuable experience in their respective
                        aspect through meticulous hard work.
                      </p>
                    </li>
                    <li>
                      <i className="">
                        <svg
                          className=" text-white"
                          height={20}
                          width={20}>
                          <use href="/icons.svg#chevrons-right" />
                        </svg>
                      </i>
                      <h4>Your safety is our top priority</h4>
                      <p>
                        In an utmost display of respect and impeccable show of
                        concern, we have placed our client's safety at the top
                        of our priority list
                      </p>
                    </li>
                    <li>
                      <i className="">
                        <svg
                          className=" text-white"
                          height={20}
                          width={20}>
                          <use href="/icons.svg#chevrons-right" />
                        </svg>
                      </i>
                      <h4>Quality with Care</h4>
                      <p>
                        We have devised the most diverse set of top quality
                        packages that will suit your tastes.
                      </p>
                    </li>
                  </ul>

                  <Link
                    href="/about-us"
                    className="btn btn-secondary px-5 py-2 rounded-lg ">
                    + Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
