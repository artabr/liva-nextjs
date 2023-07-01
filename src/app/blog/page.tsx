import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { Sidebar } from '@/app/components/Sidebar';
import { Pagination } from '@/components/Pagination';

async function getData() {
  return getAllFilesMetadata('blog');
}

export default async function Blog() {
  const data = await getData();

  return (
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="row">
              <Paginator pages={data} />
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
}
