import React, { useState, useRef } from 'react';

const data = [
  {
    title: 'Do I need a visa to enter Nepal?',
    body: 'Yes, most visitors to Nepal require a visa. You can obtain a visa on arrival at Tribhuvan International Airport in Kathmandu or at land border crossings. Alternatively, you can apply for a visa in advance at a Nepalese embassy or consulate in your home country.',
  },
  {
    title: 'Will somebody come to pick me up at the airport upon my arrival?',
    body: "Yes, Himalaya Land Treks provides airport pickup services for our clients. We understand the importance of a smooth arrival and aim to ensure a hassle-free start to your trip. When you book a trek or tour with us, you can coordinate with our team to arrange for a representative to meet you at the airport upon your arrival. We will be holding a signboard with your name or the company's name for easy identification. It's always a good idea to inform us of your flight details in advance, including your flight number and estimated arrival time, so we can make appropriate arrangements for your pickup.",
  },
  {
    title: 'I am a solo traveler; can I join a group?',
    body: 'Yes, as a solo traveler, you can join a group organized by Himalaya Land Treks. We often offer group treks and tours that are open to individuals who are traveling alone. Joining a group can be a great way to meet fellow travelers, share the experience, and potentially reduce costs as well. When you contact Himalaya Land Treks to inquire about our group treks, let us know that you are a solo traveler interested in joining a group. We will provide you with information about the available group departures and help you choose a trek or tour that suits your preferences and dates.',
  },
  {
    title:
      'Which hotel do you use in Kathmandu? Can I extend my stay? And how much does it cost?',
    body: 'Yes! One of our airport representatives will be at the airport to welcome you. They will have a Nepal Hiking Team placard with your name underneath to help you find them. They will then take you to your hotel and help you check in.',
  },
  {
    title: 'Can I upgrade my hotel to a luxury hotel in Kathmandu?',
    body: 'Yes, it is possible to upgrade your hotel to a luxury category in Kathmandu. If you would like to upgrade your accommodation from the standard 3-star hotel provided by Himalaya Land Treks to a luxury hotel, you can request the upgrade. However, please note that the availability and cost of luxury hotels may vary depending on the specific hotel and the time of your visit.',
  },
  {
    title: 'What are the popular tourist destinations in Nepal?',
    body: 'Nepal is known for its stunning natural beauty and rich cultural heritage. Popular tourist destinations include Kathmandu (the capital city), Pokhara, Chitwan National Park, Lumbini (birthplace of Lord Buddha), Bhaktapur, the Annapurna and Everest regions, Lantang region, Manaslu region and Upper Mustang for trekking.',
  },
];

interface AccordionItemProps {
  item: (typeof data)[0];
  isActive: boolean;
  onClick: () => void;
}

const HomeFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" mx-auto">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ item, isActive, onClick }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`border-b border-gray-200 transition-colors duration-300
      ${isActive ? 'bg-headings text-body-bg' : 'bg-body-bg'}`}>
      {/* Header */}
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left gap-6 p-6">
        <h3 className="text-[18px] lg:text-lg font-semibold">{item.title}</h3>

        <span
          className={`text-xl transition-transform duration-300 ${
            isActive ? 'rotate-180' : ''
          }`}>
          {isActive ? '−' : '+'}
        </span>
      </button>

      {/* Smooth Drawer Animation */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}>
        <div className="px-6 pb-4 pt-1">
          <p className="text-[15px] leading-relaxed">{item.body}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFaqs;
