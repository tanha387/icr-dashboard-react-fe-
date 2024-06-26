import { useEffect } from 'react';

function useOutsideAlerter(ref, callback, ignoreRef) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && (!ignoreRef || !ignoreRef.current || !ignoreRef.current.contains(event.target))) {
          callback();
        }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, callback, ignoreRef]);
  }
  
  export default useOutsideAlerter;