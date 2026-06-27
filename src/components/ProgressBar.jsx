const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-neutral-600">Progress</span>
        <span className="text-sm font-medium text-neutral-600">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-2">
        <div
          className="bg-teal-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
