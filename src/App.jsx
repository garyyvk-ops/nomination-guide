import { useState } from 'react';
import { getNode } from './decisionTree';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ExplanationScreen from './components/ExplanationScreen';
import ContactScreen from './components/ContactScreen';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import Disclaimer from './components/Disclaimer';

function App() {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState([]);
  const [userPath, setUserPath] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const currentNode = getNode(currentNodeId);

  const handleOptionClick = (nextNodeId, optionLabel) => {
    // Add to history
    setHistory([...history, currentNodeId]);
    
    // Add to user path for summary
    setUserPath([...userPath, {
      nodeId: currentNodeId,
      title: currentNode.title,
      answer: optionLabel
    }]);
    
    setCurrentNodeId(nextNodeId);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const previousNodeId = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setUserPath(userPath.slice(0, -1));
      setCurrentNodeId(previousNodeId);
    }
  };

  const handleRestart = () => {
    setCurrentNodeId('start');
    setHistory([]);
    setUserPath([]);
    setShowSummary(false);
  };

  const renderScreen = () => {
    if (!currentNode) return null;

    switch (currentNode.type) {
      case 'start':
        return (
          <StartScreen 
            node={currentNode} 
            onStart={() => handleOptionClick(currentNode.next, 'Start')}
          />
        );
      case 'question':
        return (
          <QuestionScreen 
            node={currentNode} 
            onOptionClick={handleOptionClick}
          />
        );
      case 'explanation':
        return (
          <ExplanationScreen 
            node={currentNode} 
            onOptionClick={handleOptionClick}
          />
        );
      case 'contact':
        return (
          <ContactScreen 
            node={currentNode}
            onRestart={handleRestart}
          />
        );
      case 'ending':
        return (
          <ExplanationScreen 
            node={currentNode} 
            onOptionClick={handleOptionClick}
            showSummary={true}
            userPath={userPath}
            onToggleSummary={() => setShowSummary(!showSummary)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        {currentNode.type !== 'start' && (
          <ProgressBar 
            currentStep={history.length + 1} 
            totalSteps={Object.keys(currentNode).length}
          />
        )}

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {renderScreen()}
        </div>

        {/* Navigation */}
        {currentNode.type !== 'start' && currentNode.type !== 'contact' && (
          <Navigation 
            onBack={handleBack}
            onRestart={handleRestart}
            canGoBack={history.length > 0}
          />
        )}

        {/* Disclaimer */}
        <Disclaimer />
      </div>
    </div>
  );
}

export default App;
