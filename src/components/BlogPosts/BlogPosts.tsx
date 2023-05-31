import { Paginator } from '@/components/Paginator';
import { Pagination } from '@/components/Pagination';
import { Sidebar } from '@/components/Sidebar';
import { pages } from './mockData';

export const BlogPosts = () => {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="row">
              <Paginator pages={pages} />
            </div>
          </div>
          <Sidebar />
          <div className="col-12 mt-5">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};
