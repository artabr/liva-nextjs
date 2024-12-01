import { TfiEmail, TfiLocationPin, TfiMobile } from 'react-icons/tfi';

import { ContactForm } from '@/components/ContactForm';

export type GetInTouchProps = {
	title: string;
	content: string;
	mobile: string;
	email: string;
	location: string;
};

export const GetInTouch = ({
	title,
	content,
	mobile,
	email,
	location,
}: GetInTouchProps) => {
	return (
		<section className="section-sm pb-0">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 text-center">
						<h2>{title}</h2>
						<div className="content mb-4">{content}</div>
						<div className="row">
							<div className="col-lg-4 small-post-border">
								<TfiMobile className="h1 text-primary" />
								<h5 className="fw-light my-3">Phone</h5>
								{mobile}
							</div>
							<div className="col-lg-4 small-post-border">
								<TfiEmail className="h1 text-primary" />
								<h5 className="fw-light my-3">Email</h5>
								{email}
							</div>
							<div className="col-lg-4 small-post-border">
								<TfiLocationPin className="h1 text-primary" />
								<h5 className="fw-light my-3">Location</h5>
								{location}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const ContactPage = () => {
	return (
		<>
			<GetInTouch
				title="Get in touch"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
				mobile="+91 1234567890"
				email="mail@example.com"
				location="123 Street, City, Country"
			/>
			<ContactForm />
		</>
	);
};
