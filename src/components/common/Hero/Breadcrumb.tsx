interface BreadcrumbProps {
    title: string;
    desc: string;
    pageBefore: string;
  }
  
  const Breadcrumb = ({ title, desc, pageBefore }: BreadcrumbProps) => {
    return (
      <section className="bg-gradient-to-br from-brand-300 to-brand-200">
        <div className="row">
          <div className="container">
            <h1 className="text-white text-3xl font-bold">{title}</h1>
            <p className="text-white text-xs">{pageBefore}</p>
            <p className="mt-3 text-white leading-4 max-w-3xl">{desc}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Breadcrumb;
  