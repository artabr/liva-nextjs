import type { PropsWithChildren } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export type FooterProps = {
	copyright?: string;
	contentTitle?: string;
	menu: {
		title: string;
		links: {
			title: string;
			url: string;
		}[];
	}[];
};

export const Footer = (props: PropsWithChildren<FooterProps>) => {
	return (
		<footer className="text-capitalize">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 text-center mb-5">
						<Link href="/">
							<Image
								src="/images/logo.png"
								width="65"
								height="34"
								alt="Site Title"
							/>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 mb-5">
						<h6 className="mb-4">{props.contentTitle}</h6>
						{props.children}
					</div>
					{props.menu.map((menuItem) => (
						<div key={menuItem.title} className="col-lg-3 col-sm-6 mb-5">
							<h6 className="mb-4">{menuItem.title}</h6>
							<ul className="list-unstyled">
								{menuItem.links.map((link) => (
									<li className="mb-3" key={link.title}>
										<Link className="text-dark" href={link.url}>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
					<div
						className="col-12 border-top py-4 text-center"
						dangerouslySetInnerHTML={{ __html: props.copyright ?? '' }}
					/>
				</div>
			</div>
		</footer>
	);
};
