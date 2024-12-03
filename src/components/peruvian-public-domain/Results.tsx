const Results = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-6">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-[#F6F6F7]">
          <h3 className="text-4xl font-medium mb-4">50K+</h3>
          <p className="text-sm">Documents digitized</p>
        </div>
        <div className="p-6 bg-[#F6F6F7]">
          <h3 className="text-4xl font-medium mb-4">100+</h3>
          <p className="text-sm">Contributing institutions</p>
        </div>
        <div className="p-6 bg-[#F6F6F7]">
          <h3 className="text-4xl font-medium mb-4">200K+</h3>
          <p className="text-sm">Monthly visitors</p>
        </div>
      </div>
    </section>
  );
};

export default Results;