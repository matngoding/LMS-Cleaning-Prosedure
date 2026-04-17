import React from 'react';

const SOPDetail = () => {
  const sopContent = `## Standard Operating Procedure (SOP)
  \n  ### Title: Cleaning Procedure\n  \n  ### Purpose:\n  To ensure a clean and safe environment.\n  \n  ### Scope:\n  Applies to all cleaning staff.\n  \n  ### Instructions:\n  1. Gather cleaning materials.\n  2. Start with dusting surfaces.\n  3. Clean windows.\n  4. Mop or vacuum floors.\n  5. Dispose of trash properly.\n  6. Check the restrooms.\n  7. Report any issues to the supervisor.\n  \n  ### Mark as Complete:\n  Ensure that all steps have been completed before marking this SOP as complete.
  `;

  const handleComplete = () => {
    alert('SOP marked as complete');
  };

  return (
    <div>
      <h1>Standard Operating Procedure</h1>
      <div>{sopContent.split('\n').map((line, index) => <p key={index}>{line}</p>)}</div>
      <button onClick={handleComplete}>Mark as Complete</button>
    </div>
  );
};

export default SOPDetail;