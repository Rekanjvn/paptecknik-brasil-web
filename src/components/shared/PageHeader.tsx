
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
}

const PageHeader = ({
  title,
  subtitle,
  children,
  backgroundImage,
}: PageHeaderProps) => {
  const defaultBgImage = "https://images.unsplash.com/photo-1555397430-57791c739627?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
  const bgImage = backgroundImage || defaultBgImage;

  return (
    <section className="relative py-20 md:py-28 bg-paptecknik-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-paptecknik-blue via-paptecknik-blue/95 to-paptecknik-blue/90"></div>
      <div className="content-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl opacity-90 mb-6">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
