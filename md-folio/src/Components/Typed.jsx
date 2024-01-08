import React, { useEffect } from 'react';
import TypedJS from 'typed.js'; // Rename 'Typed' to 'TypedJS' to avoid naming conflicts

function Typed() {
  useEffect(() => {
    const typedElement = document.querySelector('.typed');

    if (typedElement) {
      let typed_strings = typedElement.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');

      const typedInstance = new TypedJS('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });

      // Clean up the Typed.js instance when the component unmounts
      return () => {
        if (typedInstance) {
          typedInstance.destroy();
        }
      };
    }
  }, []);

  return (
    <div>
      <div className="hero">
        <span className="typed heading2" data-typed-items="Developer, Professional Coder."></span>
        {/* Other Hero content goes here */}
      </div>
    </div>
  );
}

export default Typed; // Rename the export to avoid naming conflicts
