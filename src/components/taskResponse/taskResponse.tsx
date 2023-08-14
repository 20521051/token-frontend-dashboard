import React, { useState } from 'react';

interface TaskResponseProps {
    tasks: string[];
}

const TaskResponse: React.FC<TaskResponseProps> = () => {
    const [activeTab, setActiveTab] = useState<'processing' | 'completed'>('processing');

    const handleTabClick = (tab: 'processing' | 'completed') => {
        setActiveTab(tab);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex space-x-4">
                <div
                    className={`flex-1 p-4 rounded shadow ${
                        activeTab === 'processing' ? 'bg-gray-100' : 'border border-[0.25rem] border-#141828'
                    }`}
                    onClick={() => handleTabClick('processing')}
                >
                    <h2 className={`text-lg font-semibold mb-2 ${activeTab === 'processing' ? 'text-black' : 'text-#141828'}`}>
                        Đang xử lý
                    </h2>
                </div>
                <div
                    className={`flex-1 p-4 rounded shadow ${
                        activeTab === 'completed' ? 'bg-gray-100' : 'border border-[0.25rem] border-#141828'
                    }`}
                    onClick={() => handleTabClick('completed')}
                >
                    <h2 className={`text-lg font-semibold mb-2 ${activeTab === 'completed' ? 'text-black' : 'text-#141828'}`}>
                        Đã hoàn thành
                    </h2>
                </div>
            </div>
            <table className="w-full mt-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2">Tiêu đề</th>
                        <th className="p-2">Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Thêm các dòng dữ liệu tương ứng với từng tab ở đây */}
                </tbody>
            </table>
        </div>
    );
};

export default TaskResponse;
