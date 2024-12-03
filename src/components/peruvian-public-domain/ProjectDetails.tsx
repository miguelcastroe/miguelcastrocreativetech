const ProjectDetails = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-6">Project Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-medium mb-4">Challenge</h3>
          <p className="text-gray-700 mb-6">
            Many of Peru's historical documents and cultural artifacts were at risk of being lost
            or damaged. Access to these materials was limited, making it difficult for researchers
            and the public to study and appreciate Peru's rich cultural heritage.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">Solution</h3>
          <p className="text-gray-700 mb-6">
            We developed a comprehensive digital archive system that allows for the preservation
            and public access of historical documents. The platform includes high-resolution
            scanning capabilities, metadata tagging, and a user-friendly interface for browsing
            and searching the collection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;