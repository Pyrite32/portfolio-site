import { useRef, useEffect, useState } from "react";

import data, { AppShowcaseItemData } from "./AppsShowcaseData";
import "./AppsShowcaseListView.css";

const AppsShowcaseListViewItem: React.FC<AppShowcaseItemData> = (props) => {
  return (
    <li className="flex flex-row list-view-item__panel bg-dark-gray justify-between relative">
      <div className="text-wrap text-lg p-5 box-border flex-grow max-w-fit w-1/2 z-10">
        <h2 className="text-light-fuschia font-nova font-bold underline underline-offset-2"
            >
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h2>
        <p className="text-sm text-light-gray font-nova">{props.description}</p>
      </div>
      <div
        className="list-view-item__image min-w-32 min-h-32 bg-cover bg-center fade-left z-10 opacity-70"
        style={{ backgroundImage: `url(${props.icon})` }}
        />
      <div className="absolute w-full h-full blur-lg opacity-15"
        style={{ backgroundImage: `url(${props.icon})` }}
       />
    </li>
  );
};



const AppsShowcaseListView = () => {
    const listRef = useRef<HTMLUListElement | null>(null);
    const [chevronState, setChevronState] = useState('top'); 

    const handleScroll = () => {
        if (listRef.current) {
            const { scrollTop, scrollHeight, clientHeight} = listRef.current;

            if (scrollTop + clientHeight >= scrollHeight) {
                setChevronState('bottom');
            }
            else if (scrollTop < 10) {
                setChevronState('top');
            }
            else {
                setChevronState('middle');
            }
        }
    }

    useEffect(() => {
        const listElement = listRef.current;
        if (listElement) {
            listElement.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (listElement) {
                listElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

  return (
    <article className="w-full h-list-view flex flex-col items-center">
      <ul ref={listRef} className="list-view h-full overflow-y-scroll">
        {data.map((item, index) => (
          <AppsShowcaseListViewItem {...item} key={index} />
        ))}
      </ul>
      <div className="chevron">
        {/* UP CHEVRON */}
        <svg style={{display: (chevronState === 'bottom' ? 'block' : "none")}} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"/></svg>
        
        {/* DOWN CHEVRON */}
        <svg style={{display: (chevronState === 'top' ? 'block' : "none")}} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
        
        {/* DUMMY SVG */}
        <svg style={{visibility: "hidden", display: (chevronState === 'middle' ? 'block' : 'none')}} xmlns="http://www.w3.org/2000/svg" width="24" height="24"></svg>
      </div>
    </article>
  );
};

export default AppsShowcaseListView;
