import { useState } from 'react';

enum Tab {
  processing,
  completed,
}
function TaskResponse() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.processing);

  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=' container mx-auto text-[#77829b] font-[16px] text-[16px] p-4'>
      <div className='flex'>
        <button
          className={`mr-5 ${activeTab === Tab.processing ? 'border-b-[2px] border-[#1a94ff] border-solid' : ''}`}
          onClick={() => handleClick(Tab.processing)}
        >
          <h2 className={`mb-1 ${activeTab === Tab.processing ? 'text-white' : ''}`}>Đang xử lý</h2>
        </button>
        <button
          className={`${activeTab === Tab.completed ? 'border-b-[2px] border-[#1a94ff] border-solid' : ''}`}
          onClick={() => handleClick(Tab.completed)}
        >
          <h2 className={`mb-1 ${activeTab === Tab.completed ? 'text-white' : ''}`}>Đã hoàn thành</h2>
        </button>
      </div>
      <div>
        {/* DO SOMETHING */}
      </div>
    </div>
  );
}

export default TaskResponse;
