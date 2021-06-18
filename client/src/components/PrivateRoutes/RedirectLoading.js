import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RedirectLoading = () => {
  const [count, setCount] = useState(20);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && history.push('/');
    return () => clearInterval(interval);
  }, [count, history]);

  return <></>;
};

export default RedirectLoading;
