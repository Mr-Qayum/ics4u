type StepProps = {
  title: string;
  children: React.ReactNode;
  renderExtra?: () => React.ReactNode; // optional function prop
};

export const Step = ({ title, children, renderExtra }: StepProps) => (
  <div className="border border-gray-300 p-4 rounded-lg my-4">
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h2>

    {children}

    {renderExtra && (
      <div className="mt-4 p-3 bg-gray-100 rounded-md">{renderExtra()}</div>
    )}
  </div>
);
