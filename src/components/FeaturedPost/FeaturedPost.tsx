import Image from 'next/image';
import Link from 'next/link';

import type { PostFileInfo } from '@/models';

import { formatPostDate, getBlogLink } from '@/lib/utils';

export type FeaturedPostProps = {
	post: PostFileInfo;
	authorName: string;
};

export const FeaturedPost = ({ post, authorName }: FeaturedPostProps) => {
	return (
		<div className="col-lg-4 small-post-border">
			<article className="d-flex">
				<div className="flex-shrink-0">
					{post.image && (
						<div className="recent-post-thumb me-3">
							<Image
								alt={post.title ?? ''}
								src={post.image}
								fill
								style={{
									objectFit: 'cover',
								}}
							/>
						</div>
					)}
				</div>
				<div className="flex-grow-1 ms-3">
					<div className="mb-3 post-meta">
						<span>By {authorName}</span>
						<span className="border-bottom border-primary px-2 mx-1" />
						<span>{formatPostDate(post.date)}</span>
					</div>
					<Link href={getBlogLink(post.slug)} className="h5 d-block mb-3">
						{post.title}
					</Link>
					<Link
						href={getBlogLink(post.slug)}
						className="btn btn-outline-primary"
					>
						read more
					</Link>
				</div>
			</article>
		</div>
	);
};
