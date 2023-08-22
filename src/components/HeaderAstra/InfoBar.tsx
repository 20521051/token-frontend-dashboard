import Info from "./Info";

function InfoBar() {
  return (
    <div className="sm:px-32 text-sm py-2 flex bg-cyan-900">
      <div className="sm:flex basis-1/2 pl-2">
        <div className="flex sm:basis-1/4">
          <Info icon="phone" content="0961 967 543" link="#" />
        </div>
        <div className="flex basis-1/4">
          <Info icon="mail" content="info@vietnamstartup.io" link="#" />
        </div>
      </div>
      <div className="sm:flex sm:basis-1/2 sm:justify-end pl-2">
        <div className="flex basis-1/4 sm:justify-end">
          <Info icon="map" content="Tra cứu đơn hàng" link="#" />
        </div>
        <div className="flex basis-1/4 sm:justify-end">
          <Info icon="user" content="Đăng Nhập" link="#" />
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
