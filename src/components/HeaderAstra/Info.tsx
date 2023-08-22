import { ReactNode } from "react";
import { PhoneIcon, UserIcon, MailIcon, MapIcon } from "../Icons";

interface InfoProps {
  icon: "phone" | "mail" | "map" | "user";
  content: string;
  link: string;
}

function Info({ icon, content, link }: InfoProps) {
  function returnIcon(): ReactNode {
    switch (icon) {
      case "phone":
        return <PhoneIcon />;
      case "mail":
        return <MailIcon />;
      case "map":
        return <MapIcon />;
      case "user":
        return <UserIcon />;
      default:
        return <></>;
    }
  }

  return (
    <div className="flex text-amber-200">
      {returnIcon()}
      <a className="pl-2 text-slate-50" href={link}>
        {content}
      </a>
    </div>
  );
}

export default Info;
