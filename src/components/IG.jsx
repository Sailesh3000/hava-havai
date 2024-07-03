import { Breadcrumbs, Item } from '@adobe/react-spectrum';
import { useState } from 'react';
import Terminals from './Terminals';
import Airports from './Airports'; // Import the Airports component

const IG = () => {
    const [selectedTab, setSelectedTab] = useState('Terminals');
    const [selectedBreadcrumb, setSelectedBreadcrumb] = useState('ig-airports');

    const handleTabClick = (value) => {
        setSelectedTab(value);
    }

    const handleBreadcrumbClick = (value) => {
        setSelectedBreadcrumb(value);
    }

    return (
        <section className="w-[1400px] h-[272px] px-6 py-4">
            <Breadcrumbs marginTop={7} marginBottom={10}>
                <Item key="airports" onClick={() => handleBreadcrumbClick('airports')}>Airports</Item>
                <Item key="ig-airports" onClick={() => handleBreadcrumbClick('ig-airports')}>Indira Gandhi International Airport</Item>
            </Breadcrumbs>
            <div className='px-2'>
                {selectedBreadcrumb === 'airports' ? (
                    <Airports />
                ) : (
                    <>
                        <h1 className='font-bold text-3xl w-[523px] h-[43px]'>Indira Gandhi International Airport</h1>
                        <br />
                        <div className='flex flex-row justify-start gap-6 h-[48px] w-[1400px] border-b-2 border-[#D5D5D5]'>
                            <div 
                                className={`cursor-pointer ${selectedTab === 'Terminals' ? 'border-b-2 border-black' : ''}`}
                                onClick={() => handleTabClick('Terminals')}
                            >
                                Terminals
                            </div>
                            <div 
                                className={`cursor-pointer ${selectedTab === 'Transport' ? 'border-b-2 border-black' : ''}`}
                                onClick={() => handleTabClick('Transport')}
                            >
                                Transport
                            </div>
                            <div 
                                className={`cursor-pointer ${selectedTab === 'Contact Details' ? 'border-b-2 border-black' : ''}`}
                                onClick={() => handleTabClick('Contact Details')}
                            >
                                Contact Details
                            </div>
                        </div>
                        {selectedTab === 'Terminals' && <Terminals />}
                    </>
                )}
            </div>
        </section>
    );
}

export default IG;
