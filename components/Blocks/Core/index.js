export const Core = ({ data }) => {
	return (
		<div className='coreBlock container' dangerouslySetInnerHTML={{ __html: data }}></div>
	);
};
