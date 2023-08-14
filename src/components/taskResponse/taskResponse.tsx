import React, { useState } from 'react';

interface TaskResponseProps {
    tasks: string[];
}

const TaskResponse: React.FC<TaskResponseProps> = () => {
    const [activeTab, setActiveTab] = useState<'processing' | 'completed'>('processing');

    const handleTabClick = (tab: 'processing' | 'completed') => {
        setActiveTab(tab);
    };

    const tabStyle = (tab: 'processing' | 'completed') =>
        `flex-2 p-4 rounded ${
            activeTab === tab
                ? 'bg-gray-100 border-l-4 border-blue-500'
                : 'border border-gray-300'
        } ${activeTab === tab ? 'bg-blue-500' : ''}`;

    const tabTextClass = (tab: 'processing' | 'completed') =>
        `text-lg font-semibold mb-2 ${
            activeTab === tab ? 'text-black' : 'text-#141828'
        }`;

    const handleClick = (tab: 'processing' | 'completed') => {
        handleTabClick(tab);
        document.documentElement.style.setProperty('--active-color', tab === 'processing' ? '#141828' : '#177DD9');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex space-x-4">
                <div className={`flex-2 p-4 rounded ${activeTab === 'processing' ? 'bg-blue-500' : 'border border-gray-300'}`} onClick={() => handleClick('processing')}>
                    <h2 className={`text-lg font-semibold mb-2 ${activeTab === 'processing' ? 'text-white' : 'text-#141828'}`}>
                        Đang xử lý
                    </h2>
                </div>
                <div className={`flex-2 p-4 rounded ${activeTab === 'completed' ? 'bg-blue-500' : 'border border-gray-300'}`} onClick={() => handleClick('completed')}>
                    <h2 className={`text-lg font-semibold mb-2 ${activeTab === 'completed' ? 'text-white' : 'text-#141828'}`}>
                        Đã hoàn thành
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default TaskResponse;
