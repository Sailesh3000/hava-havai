import React from 'react';

const SideNavigation = ({ setCurrentView }) => {
  return (
      <nav className='bg-white text-black flex flex-col gap-x-4 w-[272px] h-screen' style={{padding:"16px 20px 20px 20px"}}>
        <div style={{ marginBottom: '16px' }}>
          <h2 className="spectrum-SideNav-heading" id="nav-heading-1"></h2>
          <ul className="spectrum-SideNav">
            <li className="spectrum-SideNav-item is-selected w-[240px] h-[34px] hover:bg-gray-200 hover:cursor-pointer" style={{padding:"7px 12px 7px 8px"}}>
              <a href="#" className="spectrum-SideNav-itemLink flex flex-row gap-2.5" onClick={() => setCurrentView('home')} aria-current="page">
                <span>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.666 10.625L9.37497 2.33399C9.27536 2.23481 9.14053 2.17914 8.99997 2.17914C8.85941 2.17914 8.72458 2.23481 8.62497 2.33399L0.333971 10.625C0.234556 10.7245 0.178711 10.8593 0.178711 11C0.178711 11.1406 0.234556 11.2755 0.333971 11.375L1.31297 12.3535C1.40672 12.4473 1.53387 12.5 1.66647 12.5H1.99997V17C1.99997 17.1326 2.05265 17.2598 2.14642 17.3535C2.24019 17.4473 2.36736 17.5 2.49997 17.5H6.49997C6.63258 17.5 6.75976 17.4473 6.85352 17.3535C6.94729 17.2598 6.99997 17.1326 6.99997 17V12C6.99997 11.8674 7.05265 11.7402 7.14642 11.6464C7.24019 11.5527 7.36736 11.5 7.49997 11.5H10.5C10.6326 11.5 10.7598 11.5527 10.8535 11.6464C10.9473 11.7402 11 11.8674 11 12V17C11 17.1326 11.0526 17.2598 11.1464 17.3535C11.2402 17.4473 11.3674 17.5 11.5 17.5H15.5C15.6326 17.5 15.7598 17.4473 15.8535 17.3535C15.9473 17.2598 16 17.1326 16 17V12.5H16.3335C16.4661 12.5 16.5932 12.4473 16.687 12.3535L17.666 11.375C17.7654 11.2755 17.8212 11.1406 17.8212 11C17.8212 10.8593 17.7654 10.7245 17.666 10.625Z" fill="#464646"/></svg>
                </span>
                <span className="spectrum-SideNav-link-text">Home</span>
              </a>
            </li>
            <li className="spectrum-SideNav-item w-[240px] h-[34px] hover:bg-gray-200 hover:cursor-pointer" style={{padding:"7px 12px 7px 8px"}}>
              <a href="#" className="spectrum-SideNav-itemLink flex flex-row gap-2.5" onClick={() => setCurrentView('dashboard')}>
                <span><svg className="relative top-[1px]" width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 1.5H1.5C1.22386 1.5 1 1.72386 1 2V4C1 4.27614 1.22386 4.5 1.5 4.5H3.5C3.77614 4.5 4 4.27614 4 4V2C4 1.72386 3.77614 1.5 3.5 1.5Z" fill="#464646"/>
<path d="M9.5 1.5H7.5C7.22386 1.5 7 1.72386 7 2V4C7 4.27614 7.22386 4.5 7.5 4.5H9.5C9.77614 4.5 10 4.27614 10 4V2C10 1.72386 9.77614 1.5 9.5 1.5Z" fill="#464646"/>
<path d="M15.5 1.5H13.5C13.2239 1.5 13 1.72386 13 2V4C13 4.27614 13.2239 4.5 13.5 4.5H15.5C15.7761 4.5 16 4.27614 16 4V2C16 1.72386 15.7761 1.5 15.5 1.5Z" fill="#464646"/>
<path d="M3.5 7.5H1.5C1.22386 7.5 1 7.72386 1 8V10C1 10.2761 1.22386 10.5 1.5 10.5H3.5C3.77614 10.5 4 10.2761 4 10V8C4 7.72386 3.77614 7.5 3.5 7.5Z" fill="#464646"/>
<path d="M9.5 7.5H7.5C7.22386 7.5 7 7.72386 7 8V10C7 10.2761 7.22386 10.5 7.5 10.5H9.5C9.77614 10.5 10 10.2761 10 10V8C10 7.72386 9.77614 7.5 9.5 7.5Z" fill="#464646"/>
<path d="M15.5 7.5H13.5C13.2239 7.5 13 7.72386 13 8V10C13 10.2761 13.2239 10.5 13.5 10.5H15.5C15.7761 10.5 16 10.2761 16 10V8C16 7.72386 15.7761 7.5 15.5 7.5Z" fill="#464646"/>
<path d="M3.5 13.5H1.5C1.22386 13.5 1 13.7239 1 14V16C1 16.2761 1.22386 16.5 1.5 16.5H3.5C3.77614 16.5 4 16.2761 4 16V14C4 13.7239 3.77614 13.5 3.5 13.5Z" fill="#464646"/>
<path d="M9.5 13.5H7.5C7.22386 13.5 7 13.7239 7 14V16C7 16.2761 7.22386 16.5 7.5 16.5H9.5C9.77614 16.5 10 16.2761 10 16V14C10 13.7239 9.77614 13.5 9.5 13.5Z" fill="#464646"/>
<path d="M15.5 13.5H13.5C13.2239 13.5 13 13.7239 13 14V16C13 16.2761 13.2239 16.5 13.5 16.5H15.5C15.7761 16.5 16 16.2761 16 16V14C16 13.7239 15.7761 13.5 15.5 13.5Z" fill="#464646"/>
</svg>
</span>
                <span className="spectrum-SideNav-link-text">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px',width:"240px",height:"102px" }}>
          <h2 className="spectrum-SideNav-heading font-bold" id="nav-heading-1"  style={{padding:"7px 12px 7px 8px"}}>Services</h2>
          <ul className="spectrum-SideNav" aria-labelledby="nav-heading-1">
            <li className="spectrum-SideNav-item w-[240px] h-[34px] hover:bg-gray-200 hover:cursor-pointer" style={{padding:"7px 12px 7px 8px"}}>
              <a href="#" className="spectrum-SideNav-itemLink" onClick={() => setCurrentView('airports')}>
                <span className="spectrum-SideNav-link-text">Airports</span>
              </a>
            </li>
            <li className="spectrum-SideNav-item w-[240px] h-[34px] hover:bg-gray-200 hover:cursor-pointer" style={{padding:"7px 12px 7px 8px"}}>
              <a href="#" className="spectrum-SideNav-itemLink" onClick={() => setCurrentView('videos')}>
                <span className="spectrum-SideNav-link-text">Videos</span>
              </a>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px',width:"240px",height:"136px" }}>
          <h2 className="spectrum-SideNav-heading w-[240px] h-[34px] font-bold" style={{padding:"7px 12px 7px 8px"}} id="nav-heading-2">Others</h2>
          <ul className="spectrum-SideNav" aria-labelledby="nav-heading-2">
            <li className="spectrum-SideNav-item w-[240px] h-[34px] hover:bg-gray-200 hover:cursor-pointer" style={{padding:"7px 12px 7px 8px"}}>
              <a href="#" className="spectrum-SideNav-itemLink" onClick={() => setCurrentView('list1')}>
                <span className="spectrum-SideNav-link-text">List 1</span>
              </a>
            </li>
            <li className="spectrum-SideNav-item w-[240px] h-[34px] hover:bg-gray-200 hover:cursor-pointer" style={{padding:"7px 12px 7px 8px"}}>
              <a href="#" className="spectrum-SideNav-itemLink" onClick={() => setCurrentView('list2')}>
                <span className="spectrum-SideNav-link-text">List 2</span>
              </a>
            </li>
            <li className="spectrum-SideNav-item w-[240px] h-[34px] hover:bg-gray-200 hover:cursor-pointer" style={{padding:"7px 12px 7px 8px"}}>
              <a href="#" className="spectrum-SideNav-itemLink" onClick={() => setCurrentView('list3')}>
                <span className="spectrum-SideNav-link-text">List 3</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default SideNavigation;
