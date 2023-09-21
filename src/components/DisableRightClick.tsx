type Props = {};

const DisableRightClick = (props: Props) => {
  const handleContextMenu = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{ border: "1px solid #ccc", padding: 50 }}
    >
      <img
        src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
        alt="Your Image"
      />
    </div>
  );
};

export default DisableRightClick;