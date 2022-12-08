import { Link, useNavigate } from "react-router-dom";

const NoAuthPage = () => {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return (
		<>
			<div className="container">
				<h1>Unauthorized</h1>
				<p>You do not have access to the requested page.</p>
				<Link onClick={goBack}>Go Back</Link>
			</div>
		</>
	);
};

export default NoAuthPage;
