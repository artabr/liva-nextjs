import Link from 'next/link';
import Image from 'next/image';
import { getAuthorInfo } from '@/lib/fetch-utils';
import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';

export default async function AboutWidget() {
  const authorInfo = await getAuthorInfo();
  const { title, image, authorName, summary } = authorInfo;

  return (
    <div className="widget">
      <h4 className="widget-title">{title}</h4>
      <Image
        src={ensureLeadingSlash(image)}
        alt={authorName}
        className="img-fluid author-thumb-sm d-block mx-auto rounded-circle mb-4"
        width="165"
        height="165"
      />
      <p>{summary}</p>
      <Link href="/about" className="btn btn-outline-primary">
        Know More
      </Link>
    </div>
  );
}
