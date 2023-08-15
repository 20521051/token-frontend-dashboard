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
      <div className="flex justify-center items-center mt-10">
        {/* DO SOMETHING */}
        <img src="data:image/png;base64,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" alt="" />
      </div>
    </div>
  );
}

export default TaskResponse;
