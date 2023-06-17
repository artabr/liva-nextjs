import { data } from '@/components/Sidebar/mockData';
import Link from 'next/link';
import Image from 'next/image';

export const AboutWidget = () => {
  return (
    <div className="widget">
      <h4 className="widget-title">{data.aboutPage.title}</h4>
      <Image
        src="/images/author.jpg"
        alt="Author"
        className="img-fluid author-thumb-sm d-block mx-auto rounded-circle mb-4"
        width="165"
        height="165"
      />
      <p>{data.aboutPage.params.summary}</p>
      <Link href="/about" className="btn btn-outline-primary">
        Know More
      </Link>
    </div>
  );
};
