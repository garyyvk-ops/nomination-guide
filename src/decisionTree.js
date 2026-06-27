// Central Decision Tree Data Structure
// This file contains all the decision tree nodes and logic
// Easy to edit for non-technical users

export const decisionTree = {
  start: {
    id: 'start',
    type: 'start',
    title: 'Insurance & Takaful Nomination Guide',
    body: 'This guide helps you understand how nomination may work for insurance and takaful.',
    button: 'Start',
    next: 'product_type'
  },
  
  product_type: {
    id: 'product_type',
    type: 'question',
    title: 'Which product are you asking about?',
    options: [
      { label: 'Conventional Insurance', icon: 'Shield', next: 'conventional_nomination_done' },
      { label: 'Takaful', icon: 'Heart', next: 'takaful_option' }
    ]
  },
  
  // CONVENTIONAL INSURANCE FLOW
  conventional_nomination_done: {
    id: 'conventional_nomination_done',
    type: 'question',
    title: 'Have you done the nomination?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'conventional_religion' },
      { label: 'Not yet', icon: 'XCircle', next: 'will_wasiat_done' }
    ]
  },
  
  conventional_religion: {
    id: 'conventional_religion',
    type: 'question',
    title: 'Are you Muslim or Non-Muslim?',
    options: [
      { label: 'Non-Muslim', icon: 'User', next: 'marital_status' },
      { label: 'Muslim', icon: 'Mosque', next: 'non_statutory_trust' }
    ]
  },
  
  marital_status: {
    id: 'marital_status',
    type: 'question',
    title: 'What was your status when making the nomination?',
    options: [
      { label: 'Single', icon: 'User', next: 'has_children' },
      { label: 'Married', icon: 'Users', next: 'married_nominee_type' }
    ]
  },
  
  has_children: {
    id: 'has_children',
    type: 'question',
    title: 'Did you have children when making the nomination?',
    options: [
      { label: 'Yes', icon: 'Baby', next: 'single_with_children_nominee_type' },
      { label: 'No', icon: 'X', next: 'single_no_children_nominee_type' }
    ]
  },
  
  single_no_children_nominee_type: {
    id: 'single_no_children_nominee_type',
    type: 'question',
    title: 'Who did you nominate?',
    options: [
      { label: 'Parent', icon: 'Users', next: 'statutory_trust' },
      { label: 'Sibling', icon: 'Users', next: 'non_statutory_trust' },
      { label: 'Partner', icon: 'Heart', next: 'non_statutory_trust' },
      { label: 'Friend', icon: 'User', next: 'non_statutory_trust' },
      { label: 'Others', icon: 'MoreHorizontal', next: 'help_review' }
    ]
  },
  
  single_with_children_nominee_type: {
    id: 'single_with_children_nominee_type',
    type: 'question',
    title: 'Who did you nominate?',
    options: [
      { label: 'Parent', icon: 'Users', next: 'non_statutory_trust' },
      { label: 'Sibling', icon: 'Users', next: 'non_statutory_trust' },
      { label: 'Partner', icon: 'Heart', next: 'non_statutory_trust' },
      { label: 'Friend', icon: 'User', next: 'non_statutory_trust' },
      { label: 'Child', icon: 'Baby', next: 'statutory_trust' },
      { label: 'Others', icon: 'MoreHorizontal', next: 'help_review' }
    ]
  },
  
  married_nominee_type: {
    id: 'married_nominee_type',
    type: 'question',
    title: 'Who did you nominate?',
    options: [
      { label: 'Parent', icon: 'Users', next: 'non_statutory_trust' },
      { label: 'Sibling', icon: 'Users', next: 'non_statutory_trust' },
      { label: 'Friend', icon: 'User', next: 'non_statutory_trust' },
      { label: 'Child', icon: 'Baby', next: 'statutory_trust' },
      { label: 'Spouse', icon: 'Heart', next: 'statutory_trust' },
      { label: 'Others', icon: 'MoreHorizontal', next: 'help_review' }
    ]
  },
  
  // STATUTORY TRUST FLOW
  statutory_trust: {
    id: 'statutory_trust',
    type: 'explanation',
    title: 'Statutory Trust',
    body: 'A statutory trust means the nominee receives the policy money beneficially. The nominee may receive the full amount of the policy money payable. This arrangement is generally creditor-proof and the policy money does not form part of the deceased policy owner\'s estate.',
    keyPoints: [
      'Absolute / beneficiary-style treatment',
      'Nominee receives the policy money',
      'Generally creditor-proof',
      'Policy money does not form part of the estate'
    ],
    moreInfo: 'For a statutory trust policy, the policy monies payable do not form part of the estate of the deceased policy owner and are not subjected to the deceased policy owner\'s debts. This helps ensure loved ones receive the policy money. However, a trust policy does not apply in the same way for a Muslim conventional policy owner. The nominee of a Muslim policy owner takes the policy money only as executor and must distribute it according to Islamic laws.',
    nextQuestion: 'Does this serve your intention?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'completed' },
      { label: 'No', icon: 'XCircle', next: 'help_review' }
    ]
  },
  
  statutory_trustee_note: {
    id: 'statutory_trustee_note',
    type: 'explanation',
    title: 'Trustee Requirement',
    body: 'A trustee may be required for a statutory trust policy, especially where the nominee is below 18.',
    keyPoints: [
      'Public Trustee / trust company',
      'Parent of nominee',
      'Nominee above 18',
      'Any person above 18 with sound mind'
    ],
    nextQuestion: 'Does this serve your intention?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'completed' },
      { label: 'No', icon: 'XCircle', next: 'help_review' }
    ]
  },
  
  // NON-STATUTORY TRUST FLOW
  non_statutory_trust: {
    id: 'non_statutory_trust',
    type: 'explanation',
    title: 'Non-Statutory Trust',
    body: 'A non-statutory trust means the nominee does not simply receive the policy money beneficially. The nominee acts more like an executor and has a duty to distribute the money according to the Will, Distribution Act, or Islamic law depending on the situation.',
    keyPoints: [
      'Executor-style role',
      'Not creditor-proof',
      'Policy money may form part of estate',
      'Money may need to be distributed after debts and liabilities'
    ],
    moreInfo: 'For a non-statutory trust policy, the policy monies payable will form part of the estate of the deceased policy owner and may be subjected to debts and liabilities. The executor may distribute remaining assets after debts and liabilities are discharged. For a Muslim conventional policy owner, the nominee also takes the policy money only as executor and must distribute it in accordance with Islamic laws.',
    nextQuestion: 'Does this serve your intention?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'completed' },
      { label: 'No', icon: 'XCircle', next: 'help_review' }
    ]
  },
  
  // TAKAFUL FLOW
  takaful_option: {
    id: 'takaful_option',
    type: 'question',
    title: 'Which takaful nomination option did you choose?',
    options: [
      { label: 'Conditional Hibah', icon: 'Gift', next: 'conditional_hibah' },
      { label: 'Wasi', icon: 'Scale', next: 'wasi' }
    ]
  },
  
  conditional_hibah: {
    id: 'conditional_hibah',
    type: 'explanation',
    title: 'Conditional Hibah',
    body: 'Conditional Hibah is closer to an absolute beneficiary arrangement. The nominee receives the takaful benefits beneficially.',
    keyPoints: [
      'Absolute / beneficiary-style treatment',
      'Nominee receives the takaful benefits',
      'Generally creditor-proof'
    ],
    moreInfo: 'For a nominee below 18 years old who receives takaful benefits beneficially under a conditional hibah, the company may pay the takaful benefits to the parent of the incompetent nominee, proper claimant, Public Trustee, or trust company nominated by the certificate owner, subject to the takaful benefit amount and applicable rules.',
    nextQuestion: 'Does this serve your intention?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'completed' },
      { label: 'No', icon: 'XCircle', next: 'help_review' }
    ]
  },
  
  wasi: {
    id: 'wasi',
    type: 'explanation',
    title: 'Wasi',
    body: 'Under Wasi, the nominee acts as executor or pemegang amanah. The nominee receives the money subject to the duty to distribute it according to Fara\'id law or applicable estate law.',
    keyPoints: [
      'Executor / trustee-style role',
      'Not creditor-proof in the same way',
      'Distribution duty applies'
    ],
    moreInfo: 'A nominee under Wasi of a takaful nomination should be above 18 and of sound mind. The nominee acts as executor / pemegang amanah to distribute the money according to Fara\'id law after liabilities are discharged. If the takaful owner was not Muslim, the nominee distributes according to applicable estate law such as the Probate and Administration Act 1959.',
    nextQuestion: 'Does this serve your intention?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'completed' },
      { label: 'No', icon: 'XCircle', next: 'help_review' }
    ]
  },
  
  // NO NOMINATION / WILL-WASIAT FLOW
  will_wasiat_done: {
    id: 'will_wasiat_done',
    type: 'question',
    title: 'Have you completed your Will / Wasiat?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'grant_of_probate' },
      { label: 'Not yet', icon: 'XCircle', next: 'letter_of_administration' }
    ]
  },
  
  grant_of_probate: {
    id: 'grant_of_probate',
    type: 'explanation',
    title: 'Grant of Probate',
    body: 'If you have completed a Will or Wasiat, the executor appointed under it may need to apply for a Grant of Probate from court before the insurer can release the payable money.',
    keyPoints: [
      'Executor applies to court',
      'Insurer releases money after required process',
      'Executor distributes according to Will, Distribution Act, or Fara\'id law depending on the situation'
    ],
    moreInfo: 'Application for Grant of Probate may take time depending on the size of assets, and legal fees may be required. For insurance owned by a non-Muslim, the executor appointed under the Will may distribute the policy money according to the Will after debts and liabilities are discharged. For a Muslim, the executor or Wasi appointed under the Wasiat may distribute one-third according to Wasiat, while the rest is distributed according to Fara\'id law.',
    nextQuestion: 'Does this serve your intention?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'completed' },
      { label: 'No', icon: 'XCircle', next: 'help_review' }
    ]
  },
  
  letter_of_administration: {
    id: 'letter_of_administration',
    type: 'explanation',
    title: 'Letter of Administration',
    body: 'If there is no Will or Wasiat, an administrator appointed by family or court may need to apply for Letter of Administration before the insurer can release the payable money.',
    keyPoints: [
      'Administrator may be appointed by family or court',
      'Court process may be required',
      'Distribution follows Distribution Act for non-Muslims or Fara\'id law for Muslims'
    ],
    moreInfo: 'Appointment of an administrator may take time because it may require mutual agreement of family members. For insurance owned by a non-Muslim, the administrator may distribute policy money according to the Distribution Act. For a Muslim, the administrator may distribute policy money according to Fara\'id law.',
    nextQuestion: 'Does this serve your intention?',
    options: [
      { label: 'Yes', icon: 'CheckCircle', next: 'completed' },
      { label: 'No', icon: 'XCircle', next: 'help_review' }
    ]
  },
  
  // HELP FLOW
  help_review: {
    id: 'help_review',
    type: 'explanation',
    title: 'Let me help you review this',
    body: 'Your current arrangement may not fully match your intention. You may need to review your nomination, Will/Wasiat, or estate planning arrangement so the money reaches the right people in the right way.',
    primaryCTA: 'Speak to an adviser',
    secondaryCTA: 'Restart guide',
    options: [
      { label: 'Speak to an adviser', icon: 'Phone', next: 'adviser_contact' },
      { label: 'Restart guide', icon: 'RefreshCw', next: 'start' }
    ]
  },
  
  adviser_contact: {
    id: 'adviser_contact',
    type: 'contact',
    title: 'Speak to an adviser',
    body: 'This situation may need a more personal review. Add your adviser or company contact details here so users know who to speak to next.',
    contactDetails: {
      name: 'Your Adviser Name',
      phone: '+60 12-345-6789',
      email: 'adviser@example.com',
      whatsapp: '+60 12-345-6789'
    }
  },
  
  // COMPLETION FLOW
  completed: {
    id: 'completed',
    type: 'ending',
    title: 'You have completed the guide',
    body: 'Based on your answers, the guide has shown the likely nomination treatment and whether it may match your intention. You may restart the guide to explore another scenario or speak to an adviser if you need personal advice.',
    options: [
      { label: 'Restart guide', icon: 'RefreshCw', next: 'start' },
      { label: 'Speak to an adviser', icon: 'Phone', next: 'adviser_contact' }
    ]
  }
};

// Helper function to get node by ID
export const getNode = (nodeId) => {
  return decisionTree[nodeId] || null;
};

// Helper function to calculate total steps for progress
export const calculateTotalSteps = () => {
  // This is a rough estimate for progress indicator
  // Can be refined based on actual user paths
  return Object.keys(decisionTree).length;
};
