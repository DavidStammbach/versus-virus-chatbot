import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

export default () => {
  const directLine = useMemo(() => createDirectLine({ token: 'gBMtzerPyr0.o4xxgEoupK0Z4MCeTYCQvtBNn3Hdv0nqTmGiHWZrx0w' }), []);

  return <ReactWebChat directLine={directLine} userID="YOUR_USER_ID" />;
};