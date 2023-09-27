interface Props {
  query: string;
  category: string;
}

const Header = ({query, category}: Props) => {
  if (query && category) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot; in{" "}
        <span className="font-bold">{category}</span>
      </h1>
    );
  }
  if (query) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot;
      </h1>
    );
  }
  if (category) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search result for category <span className="font-bold">{category}</span>
      </h1>
    );
  }
  return (
    <h1 className="mb-5 font-sans text-base font-medium">No Filter Added</h1>
  );
};

export default Header;
