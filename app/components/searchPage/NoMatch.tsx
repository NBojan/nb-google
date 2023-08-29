const NoMatch = ({ searchTerm }: { searchTerm: string }) => {
  return (
    <div className="no-match">
      <p className="mb-4">
        Your search - <span className="text-gray-600">{searchTerm}</span> - did
        not match any documents.
      </p>
      <p className="mb-4">Suggestions:</p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
        <li>Try fewer keywords.</li>
      </ul>
    </div>
  );
};

export default NoMatch;
