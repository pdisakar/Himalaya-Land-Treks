'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface ServiceProps {
  className?: string;
}

interface ServiceItem {
  img: React.ReactNode;
  title: string;
  body: string;
}

export default function Service({ className }: ServiceProps) {
  const services = [
    {
      title: 'Our Enthusiastic Team',
      description:
        'With a group of skilled and trained youths ready to prove themselves',
      svg: 'our-enthusiastic-team',
    },
    {
      title: 'Best Price Guarantee',
      description: 'We are happy to provide a best price to on smart packages.',
      svg: 'best-price-guarantee',
    },
    {
      title: '24/7 Support',
      description:
        'We have 24 hours of customer service with updated information.',
      svg: '24-7-support',
    },
    {
      title: 'Your safety is our top priority',
      description:
        'In an utmost display of respect and impeccable show of concern',
      svg: 'your-safety-is-our-top-priority',
    },
  ];

  return (
    <div className={cn('', className)}>
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((itm, idx) => (
          <li
            key={idx}
            className="flex gap-4">
            <svg className="h-[45px] w-[45px] shrink-0">
              <use xlinkHref={`/icons.svg#${itm.svg}`} />
            </svg>
            <div className="service-content">
              <h3 className="font-medium text-headings">{itm.title}</h3>
              <p className="text-muted text-sm mt-1">{itm.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
