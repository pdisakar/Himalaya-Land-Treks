"use client";
import { useState } from "react";
import Tabs, { Tab } from "../../Tabs/Tabs";
import Member from "../../TeamItem/Member";
interface TeamListProps { data: any[] }
export default function TeamList({data}: TeamListProps){
  const [activeTab, setActiveTab] = useState<any>()

  
    return (
        <div className="featured-packages team">
        <Tabs setActive={setActiveTab} activeTab={activeTab}>
          {data.map((itm: any) => {
            return (
              <Tab title={itm.title} key={itm.id}>
                <div className="team-list">
                  <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {itm.members
                      ?.sort(
                        (a: any, b: any) => a.position_order - b.position_order
                      )
                      .map((memberItem: any, idx: number) => {
                        return (
                          <li key={idx}>
                            <Member data={memberItem} />
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    )
}