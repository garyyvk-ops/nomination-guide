import * as Icons from 'lucide-react';

const QuestionScreen = ({ node, onOptionClick }) => {
  const getIcon = (iconName) => {
    const Icon = Icons[iconName] || Icons.Circle;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
        {node.title}
      </h2>
      
      <div className="space-y-4">
        {node.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionClick(option.next, option.label)}
            className="w-full text-left p-6 bg-neutral-50 hover:bg-neutral-100 border-2 border-neutral-200 hover:border-teal-600 rounded-lg transition-all duration-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {getIcon(option.icon)}
              </div>
              <div className="flex-1">
                <span className="text-lg font-medium text-neutral-900 group-hover:text-teal-700">
                  {option.label}
                </span>
              </div>
              <div className="flex-shrink-0 text-neutral-400 group-hover:text-teal-600">
                <Icons.ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
