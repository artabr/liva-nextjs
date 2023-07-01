import { Sidebar } from '@/components/Sidebar';
import { Pagination } from '@/components/Pagination';

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="row">{children}</div>
          </div>
          <Sidebar />
          <div className="col-12 mt-5">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
}
