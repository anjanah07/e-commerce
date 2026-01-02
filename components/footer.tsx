import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="border-t">
        <div className="p-5 flex justify-center">
          {currentYear} {APP_NAME} all Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
