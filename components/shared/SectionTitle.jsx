const SectionTitle = ({ leftDash, rightDash, children }) => {
  return (
    <div className="flex items-center gap-2">
      {leftDash ? <hr className="w-full border-gray-200 border-1" /> : null}
      <h1 className="text-3xl font-title  text-orange-600 whitespace-nowrap w-fit">
        {children}
      </h1>
      {rightDash ? <hr className="w-full border-gray-200 border-1" /> : null}
    </div>
  );
};

export default SectionTitle;
