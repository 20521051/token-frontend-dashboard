import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, SpeakerIcon } from "../Icons";

const AstraClone = () => {
  const infos = ["this is info 1", "info 2 is this", "and this is info 3"];

  const [currentInfoIdx, setCurrentInfoIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfoIdx((prevIndex) =>
        prevIndex === infos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [infos.length]);

  return (
    <div className="p-4 flex bg-gradient-to-b from-violet-300 to-white">
      {/* card */}
      <div className="basis-1/4">
        <div className="rounded-xl h-44 w-80 bg-gradient-to-b from-blue-900 to-blue-600 space-y-4 hover: cursor-pointer">
          <div className="flex justify-between w-full h-full">
            <div>
              <div className="flex items-center space-x-20 py-4">
                <div className="box-border h-11 w-32 flex items-center">
                  <img src="VNS_logo_ngang.png" alt="logo"></img>
                </div>
                <div className="p-2 border border-slate-500 rounded-full text-white">
                  Đăng Nhập
                </div>
              </div>

              <div className="text-white font-light text-sm pl-2 pt-4">
                {infos[currentInfoIdx]}
              </div>
            </div>
          </div>
          <div className="flex bg-white rounded-lg text-slate-500 p-2 space-x-2">
            <div className="self-center">
              <SpeakerIcon />
            </div>
            <p> 90923 khách hàng đã trở thành hội viên VIP</p>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="w-full pl-6 space-y-4">
        <div className="flex bg-transparent/50 rounded-lg">
          <div className="p-2 flex w-full  text-white">
            <div className="flex-none w-14 h-14 ">
              <img src="VNS_logo.png" alt="" />
            </div>
            <div className="grow h-14">
              <p className="font-semibold">Gói hội viên nâng cấp</p>
              <p>
                Tăng VNS hoàn, miễn phí giao hàng 100%, đổi trả hàng 365 ngày...
              </p>
            </div>
            <div className="flex-none w-20 h-9 rounded-md bg-sky-500 text-center self-center pt-1 hover: cursor-pointer">
              Xem gói
            </div>
          </div>
        </div>

        <div className="p-4 pb-2 bg-white rounded-lg space-y-4">
          <p className="font-bold ">Tìm hiểu VNSe Rewards</p>
          <div className="flex rounded-lg bg-gradient-to-b from-violet-500 to-violet-300 text-white font-semibold h-40 hover:cursor-pointer">
            <div className="basis-1/6 ">
              <div className="flex justify-center pt-8">
                <img src="1.png" alt="" className="w-auto h-16" />
              </div>
              <p className="text-center">Gói hội viên VIP</p>
            </div>

            <div className="basis-1/6 border-x border-violet-200">
              <div className=" flex justify-center pt-8">
                <img src="2.png" alt="" className="w-auto h-16" />
              </div>
              <p className="text-center">Nhà bán hoàn VNS</p>
            </div>

            <div className="basis-1/6">
              <div className=" flex justify-center pt-8">
                <img src="3.png" alt="" className="w-auto h-16" />
              </div>
              <p className="text-center">Miễn phí giao hàng 100%</p>
            </div>

            <div className="basis-1/6 border-x border-violet-200">
              <div className=" flex justify-center pt-8">
                <img src="4.png" alt="" className="w-auto h-16" />
              </div>
              <p className="text-center">Heo vàng VNSe</p>
            </div>

            <div className="basis-1/6">
              <div className=" flex justify-center pt-8">
                <img src="5.png" alt="" className="w-auto h-16" />
              </div>
              <p className="text-center">Giảm giá đơn bằng VNSe</p>
            </div>

            <div className="basis-1/6 border-l border-violet-200">
              <div className=" flex justify-center pt-8">
                <img src="6.png" alt="" className="w-auto h-16" />
              </div>
              <p className="text-center">Đổi trả 365 ngày</p>
            </div>
          </div>
          <div></div>
        </div>

        <div className="p-4 bg-white rounded-lg space-y-4">
          <p className="font-bold ">Các ưu đãi khác</p>
          <div className="flex space-x-2">
            <div className="w-40 h-40 border border-slate-100 rounded-lg hover:cursor-pointer">
              <div className=" flex justify-center pt-8">
                <img src="7.png" alt="" className="w-16 h-16" />
              </div>
              <p className="text-center">Hỏi Chat GPT</p>
            </div>
            <div className="w-40 h-40 border border-slate-100 rounded-lg hover:cursor-pointer">
              <div className=" flex justify-center pt-8">
                <img src="8.png" alt="" className="w-16 h-16" />
              </div>
              <p className="text-center">Trao đổi VNS-Xu</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg">
          <p className="font-bold pb-4">VNSe là gì?</p>
          <div className="flex space-x-14">
            <div className="basis-1/3">
              <img src="9.png" alt="" className="w-14 h-14" />
              <p className="font-semibold pt-4">Điểm thưởng mua sắm</p>
              <p className="text-slate-500">
                Hoàn điểm thưởng VNS khi mua hàng, mức hoàn tuỳ gói hội viên.
              </p>
            </div>

            <div className="basis-1/3">
              <img src="10.png" alt="" className="w-14 h-14" />
              <p className="font-semibold pt-4">Có thể sinh lời</p>
              <p className="text-slate-500">
                Giá trị VNS giao động theo thị trường có thể sinh lời & dùng gửi
                tiết kiệm Heo vàng VNSe
              </p>
            </div>

            <div className="basis-1/3">
              <img src="11.png" alt="" className="w-14 h-14" />
              <p className="font-semibold pt-4">Dùng VNS đổi giảm giá</p>
              <p className="text-slate-500">
                Dùng điểm VNS để giảm giá đơn hàng, đổi sang Xu
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg">
          <p className="font-semibold">Câu hỏi thường gặp</p>
          <div className="w-full pt-4 space-y-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left hover:cursor-pointer border-b border-slate-300 pb-4">
                    <span>VNSe Rewards là gì?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Chương trình điểm thưởng VNS dành cho mọi khách hàng
                    VNS Market khi mua sắm và tương tác.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left hover:cursor-pointer border-b border-slate-300 pb-4">
                    <span>Khi mua sắm, điểm VNS được thưởng như thế nào?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Điểm VNS được hoàn cho khách hàng khi mua sắm trên VNS
                    Market, 4% đến hơn 10% giá trị đơn tuỳ mức hạng hội viên.
                    Đặc biệt với các sản phẩm có nhãn VNSe+ bạn sẽ được hoàn VNS
                    nhiều hơn.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left hover:cursor-pointer border-b border-slate-300 pb-4">
                    <span>Ngoài mua sắm, có cách nào để có VNS?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Ngoài mua sắm, bạn có thể nhận thêm VNS qua các tương tác ở
                    VNS Market như đánh giá sản phẩm, chơi game Quay số may mắn
                    hoặc nạp Xu đổi ra VNS qua sàn VNS Exchange.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left hover:cursor-pointer border-b border-slate-300 pb-4">
                    <span>
                      Có phải tất cả các sản phẩm trên VNS Market đều được
                      thưởng VNS?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Bạn sẽ được thưởng VNS cho 99% sản phẩm trên VNS Market. Khi
                    vào xem trang thông tin chi tiết của từng sản phẩm, bạn sẽ
                    thấy ghi chú VNS được thưởng cho sản phẩm đó. Sản phẩm nào
                    không có ghi chú sẽ không được áp dụng thưởng VNS. Bạn nhận
                    VNS khi đơn hàng giao thành công và không phát sinh đổi trả.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left hover:cursor-pointer border-b border-slate-300 pb-4">
                    <span>VNS có bị hết hạn không?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    VNS của bạn sẽ không bao giờ hết hạn. Bạn sẽ luôn luôn sở
                    hữu VNS và sử dụng bất kỳ khi nào bạn muốn.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left hover:cursor-pointer border-b border-slate-300 pb-4">
                    <span>Vì sao điểm VNS lại lên xuống giá trị?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Giá trị VNS do thị trường trao đổi quyết định, khi nhu cầu
                    mua VNS của người dùng tăng lên, giá trị VNS sẽ tăng theo.
                    Ví dụ khi khách hàng A muốn bán 1 VNS với giá 500 Xu và
                    khách hàng B đồng ý mua, lúc đó giá trị 1 VNS sẽ là 500 Xu.
                    VNS Market không quyết định tỷ giá VNS.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left hover:cursor-pointer border-b border-slate-300 pb-4">
                    <span>Trao đổi VNS thành Xu để làm gì?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Xu có thể dùng để thanh toán đơn hàng như tiền mặt, 1 Xu = 1
                    VNĐ. Bạn có để đổi điểm VNS lấy Xu để thanh toán. Nếu bạn là
                    Hội viên VIP, bạn có thể chọn cách bỏ ống heo điểm VNS để
                    được nhận Xu.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstraClone;
