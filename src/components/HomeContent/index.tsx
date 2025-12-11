'use client';

import Link from 'next/link';
import Searvice from '../services';
import HomeFaqs from '../HomeFaqs/HomeFaqs';

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
    <section className=" common-box">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="title [&>h1]:drop-shadow-black [&>h1]:text-shadow-white">
              <h1
                className="text-3xl md:text-4xl font-normal mb-2"
                dangerouslySetInnerHTML={{ __html: page_title }}
              />
            </div>
            <div className="">
              <article
                className="common-module z-10 text-base font-medium tracking-wide [&>ul>li]:text-left [&>blockquote]:text-base md:[&>blockquote]:text-lg "
                dangerouslySetInnerHTML={{
                  __html: page_description,
                }}></article>

              <Link
                href="/about-us"
                className="btn btn-lg btn-primary rounded mt-6">
                Know more about us
              </Link>
            </div>
          </div>
          <div className="">
            <HomeFaqs />
          </div>
        </div>
      </div>
    </section>
  );
}
