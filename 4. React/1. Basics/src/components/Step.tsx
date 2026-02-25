type StepProps = {
  title: string;
  children: React.ReactNode;
};

export const Step = ({ title, children }: StepProps) => (
  <div className="border border-gray-300 p-4 rounded-lg my-4">
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h2>
    {children}
  </div>
);
