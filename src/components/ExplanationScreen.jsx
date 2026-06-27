import { useState } from 'react';
import * as Icons from 'lucide-react';
import UserSummary from './UserSummary';

const ExplanationScreen = ({ node, onOptionClick, showSummary = false, userPath = [], onToggleSummary }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const getIcon = (iconName) => {
    const Icon = Icons[iconName] || Icons.Circle;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
        {node.title}
      </h2>
      
      <p className="text-lg text-neutral-600 mb-6">
        {node.body}
      </p>
      
      {node.keyPoints && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
            Key Points
          </h3>
          <ul className="space-y-2">
            {node.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mt-0.5">
                  <Icons.Check className="w-4 h-4" />
                </div>
                <span className="text-neutral-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {node.moreInfo && (
        <div className="mb-6">
          <button
            onClick={() => setShowMoreInfo(!showMoreInfo)}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            {showMoreInfo ? (
              <>
                <Icons.ChevronUp className="w-5 h-5" />
                Show Less
              </>
            ) : (
              <>
                <Icons.ChevronDown className="w-5 h-5" />
                More Info
              </>
            )}
          </button>
          
          {showMoreInfo && (
            <div className="mt-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <p className="text-neutral-600 text-sm leading-relaxed">
                {node.moreInfo}
              </p>
            </div>
          )}
        </div>
      )}
      
      {showSummary && userPath.length > 0 && (
        <UserSummary 
          userPath={userPath} 
          onToggle={onToggleSummary}
          isOpen={true}
        />
      )}
      
      {node.nextQuestion && (
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            {node.nextQuestion}
          </h3>
          
          <div className="space-y-3">
            {node.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onOptionClick(option.next, option.label)}
                className="w-full text-left p-4 bg-neutral-50 hover:bg-neutral-100 border-2 border-neutral-200 hover:border-teal-600 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 text-teal-600 group-hover:text-teal-700">
                    {getIcon(option.icon)}
                  </div>
                  <span className="font-medium text-neutral-900 group-hover:text-teal-700">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {node.options && !node.nextQuestion && (
        <div className="mt-8 pt-6 border-t border-neutral-200 space-y-3">
          {node.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onOptionClick(option.next, option.label)}
              className="w-full text-left p-4 bg-neutral-50 hover:bg-neutral-100 border-2 border-neutral-200 hover:border-teal-600 rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-teal-600 group-hover:text-teal-700">
                  {getIcon(option.icon)}
                </div>
                <span className="font-medium text-neutral-900 group-hover:text-teal-700">
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplanationScreen;
