import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { BASE_URL } from '../lib/constants';
import { MenuItem, GlobalData } from '@/types';
import CertificatesnPartners from '@/components/CertificatesnPartners';
import Destination from './Footer/Destinations';

const Newsletter = dynamic(() => import('./Footer/Newsletter'));

const NavItem: React.FC<{ data: MenuItem }> = ({ data }) => {
  return (
    <div className="footer-menu-item">
      <h3 className="uppercase mb-7 font-semibold text-white/85 text-[1.25rem] font-secondary">
        {data.item_title}
      </h3>
      <ul className="">
        {data.children?.map(item => (
          <li key={item.id}>
            <Link href={BASE_URL + item.item_slug}>{item.item_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC<{ globalData: GlobalData }> = ({ globalData }) => {
  const data = globalData;

  const social_links = [
    {
      brand: 'facebook',
      icon: (
        <svg>
          <use xlinkHref="/icons.svg#facebook" />
        </svg>
      ),
      url: data.facebook,
    },
    {
      brand: 'twitter',
      icon: (
        <svg>
          <use xlinkHref="/icons.svg#twitter" />
        </svg>
      ),
      url: data.twitter,
    },
    {
      brand: 'instagram',
      icon: (
        <svg>
          <use xlinkHref="/icons.svg#instagram" />
        </svg>
      ),
      url: data.instagram,
    },
    {
      brand: 'linkedin',
      icon: (
        <svg>
          <use xlinkHref="/icons.svg#linkedin" />
        </svg>
      ),
      url: data.linkedin,
    },
    {
      brand: 'youtube',
      icon: (
        <svg>
          <use xlinkHref="/icons.svg#youtube" />
        </svg>
      ),
      url: data.youtube,
    },
    {
      brand: 'pinterest',
      icon: (
        <svg>
          <use xlinkHref="/icons.svg#pinterest" />
        </svg>
      ),
      url: data.pinterest,
    },
  ];
  return (
    <>
      <footer
        id="footer"
        className="bg-footer">
        <div className="common-box">
          <div className="container">
            {/*           
          <Newsletter
            title="Subscribe <b>Newsletter</b>"
            subTitle="To receive travel news, updates and offers via email."
            btnLabel="SUBSCRIBE"
          /> */}

            {/* <div className="">
              <div className="footer-contact">
                <h3 className="uppercase mb-7 font-semibold text-headings text-[1.25rem] font-secondary">
                  {data?.company_name}
                </h3>
                <ul className="[&>li+li]:mt-3.5">
                  <li className="pl-[45px] reqative leading-[1.5] text-headings font-semibold">
                    <svg
                      height={22}
                      width={22}
                      className="text-secondary absolute left-0">
                      <use xlinkHref="/icons.svg#map-marker" />
                    </svg>
                    {data?.address}
                    <span className="block text-muted text-xs font-medium">
                      Head Office
                    </span>
                  </li>
                  <li className="pl-[45px] reqative leading-[1.5] text-headings font-semibold">
                    <svg
                      height={22}
                      width={22}
                      className="text-secondary absolute left-0">
                      <use xlinkHref="/icons.svg#phone" />
                    </svg>
                    <a href={`tel:+977${data?.phone}`}>+977 {data?.phone}</a>

                    <span className="block text-muted text-xs font-medium">
                      Call Us
                    </span>
                  </li>

                  <li className="pl-[45px] reqative leading-[1.5] text-headings font-semibold">
                    <svg
                      height={22}
                      width={22}
                      className="text-secondary absolute left-0">
                      <use xlinkHref="/icons.svg#envelope-open" />
                    </svg>
                    <Link href={`mailto:${data?.email}`}>{data?.email}</Link>
                    <span className="block text-muted text-xs font-medium">
                      Mail Us
                    </span>
                  </li>
                  <li className="pl-[45px] reqative leading-[1.5] text-headings font-semibold">
                    <div
                      className="social-media flex items-center brand-color-bg [&>a]:h-8 [&>a]:w-8 [&>a]:rounded [&>a]:flex
                     [&>a]:text-white [&>a]:items-center [&>a]:justify-center [&>a]:mr-2.5 last:[&>a]:mr-0 [&>a>.icon]:h-4 [&>a>.icon]:w-4
                     [&>.facebook]:bg-[#3b5998] [&>.twitter]:bg-twitter [&>.instagram]:bg-instagram [&>.pinterest]:bg-pinterest [&>.youtube]:bg-youtube [&>.linkedin]:bg-linkedin
                     [&>a]:hover:translateY[-5px] [&>a]:transition-all">
                      {social_links?.map((itm, idx) => {
                        return (
                          <a
                            href={itm.url}
                            rel="nofollow noreferrer"
                            target="_blank"
                            key={idx}
                            className={`${itm.brand}`}>
                            <span className="icon">{itm.icon}</span>
                          </a>
                        );
                      })}
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
            <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <li>
                <h3 className="footer-title text-white/85 text-[18px] font-medium mb-2">
                  Book by whatsapp/phone
                </h3>
                <div className="body flex  gap-3">
                  <svg
                    className="inline-block text-primary"
                    height={32}
                    width={32}>
                    <use href="/icons.svg#footer_whatsapp" />
                  </svg>
                  <div className="call-us-now">
                    <a
                      className="text-primary font-semibold text-lg leading-[1.2]"
                      href={`tel:${data?.phone}`}>
                      {data?.phone}
                    </a>
                    <span className="block text-white/70 leading-[1.2] text-sm">
                      Call Us
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <h3 className="footer-title text-white/85 text-[18px] font-medium mb-2">
                  Give your feedback
                </h3>
                <div className="body flex  gap-3">
                  <svg
                    className="inline-block text-primary"
                    height={32}
                    width={32}>
                    <use href="/icons.svg#footer_mail" />
                  </svg>
                  <div className="call-us-now">
                    <Link
                      className="text-primary font-semibold text-lg leading-[1.2]"
                      href={`mailto:${data?.email}`}>
                      Send Us Email
                    </Link>
                    <span className="block text-white/70 leading-[1.2] text-sm">
                      Help us improve
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <h3 className="footer-title text-white/85 text-[18px] font-medium mb-2">
                  Services and Suport
                </h3>
                <div className="body flex  gap-3">
                  <svg
                    className="inline-block text-primary"
                    height={32}
                    width={32}>
                    <use href="/icons.svg#footer_mail" />
                  </svg>
                  <div className="call-us-now">
                    <Link
                      className="text-primary font-semibold text-lg leading-[1.2]"
                      href={`/contact-us`}>
                      Get expert advise
                    </Link>
                    <span className="block text-white/70 leading-[1.2] text-sm">
                      Get your doubts cleared
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <h3 className="footer-title text-white/85 text-[18px] font-medium mb-2">
                  Follow us on
                </h3>
                <div
                  className="social-media flex items-center brand-color-bg [&>a]:h-8 [&>a]:w-8 [&>a]:rounded [&>a]:flex
                     [&>a]:text-white [&>a]:items-center [&>a]:justify-center [&>a]:mr-2.5 last:[&>a]:mr-0 [&>a>.icon]:h-4 [&>a>.icon]:w-4
                     [&>.facebook]:bg-[#3b5998] [&>.twitter]:bg-twitter [&>.instagram]:bg-instagram [&>.pinterest]:bg-pinterest [&>.youtube]:bg-youtube [&>.linkedin]:bg-linkedin
                     [&>a]:hover:translateY[-5px] [&>a]:transition-all">
                  {social_links?.map((itm, idx) => {
                    return (
                      <a
                        href={itm.url}
                        rel="nofollow noreferrer"
                        target="_blank"
                        key={idx}
                        className={`${itm.brand}`}>
                        <span className="icon">{itm.icon}</span>
                      </a>
                    );
                  })}
                </div>
              </li>
            </ul>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 [&>div:first-child]:md:col-span-2 [&>div:first-child]:lg:col-span-2 [&>div:first-child>ul]:grid [&>div:first-child>ul]:grid-cols-1 md:[&>div:first-child>ul]:grid-cols-2 
            [&>div:first-child>ul]:gap-x-6 [&>div>ul>li+li]:mt-2 [&>div:first-child>ul>li>a]:text-pretty [&>div:first-child>ul>li>a]:inline-block [&>div>ul>li>a]:text-white/70 [&>div:first-child>ul>li>a]:text-md hover:[&>div>ul>li>a]:text-white hover:[&>div>ul>li>a]:underline [&>div:first-child]:font-secondary">
              {data?.footer_menu?.menu?.slice(0, 2).map(itm => {
                const { id, item_title, item_slug, children } = itm;
                return (
                  <NavItem
                    key={id}
                    data={itm}
                  />
                );
              })}
              <Newsletter
                title="Subscribe Newsletter"
                subTitle="To receive travel news, updates and offers via email."
                btnLabel="SUBSCRIBE"
              />
            </div>

            <CertificatesnPartners
              title="CERTIFICATES & PARTNERS"
              className="common-box pb-0"
            />
          </div>
        </div>
      </footer>
      <div className="footer-bottom py-8">
        <div className="container">
          <div className="copy-right text-center">
            All content and photography within our website is copyright &amp;
            may not be reproduced without our permission. Most of the
            photographs of this website are provided by Professional
            Photographers. &copy; {new Date().getFullYear()},{' '}
            <b>{data?.company_name} Pvt. Ltd</b>.
          </div>
          <Link
            className="icon w-[180px] mt-5 lg:w-[250px] flex items-center mx-auto justify-center"
            href="/custom-booking">
            <Image
              src="/payment.png"
              alt="We Accept"
              width="302"
              height="33"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
