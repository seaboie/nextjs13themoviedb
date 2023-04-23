'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error() {
 

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {}
        }
      >
        Try again
      </button>
    </div>
  );
}
