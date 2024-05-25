// useLockBodyScroll.js

import { useEffect } from 'react';

function useLockBodyScroll() {
  useEffect(() => {
    // Logic to lock body scroll
    document.body.style.overflow = 'hidden';

    // Cleanup function to restore body scroll on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
}

export default useLockBodyScroll;
