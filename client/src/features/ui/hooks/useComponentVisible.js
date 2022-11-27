import { useEffect, useRef, useState } from "react";

const useComponentVisible = (initialIsVisible) => {
	const [isComponentVisible, setIsComponentVisible] =
		useState(initialIsVisible);
	const ref = useRef(null);

	const handleClickOutside = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return { ref, isComponentVisible, setIsComponentVisible };
};

export default useComponentVisible;
