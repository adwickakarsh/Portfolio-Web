import { useState, useEffect } from 'react';

const Preloader = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1000),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => setStep(4), 2700),
      setTimeout(() => setStep(5), 4000)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  if (step === 5) return null;

  return (
    <div className={`fixed inset-0 bg-purple-200 z-100 transition-all duration-1000 ease-in-out ${step==4 ? 'opacity-0':'opacity-100'}`} >
      <div className={`fixed inset-0 bg-white z-100 transition-all duration-600 ease-in-out ${step>=2 ? '-translate-y-full':'translate-y-0'}`}></div>
      <div className={`fixed inset-0 bg-black z-90 transition-all duration-600 ease-in-out ${step>=3 ? '-translate-y-full':'translate-y-0'}`}></div>
    </div>
  )
}

export default Preloader;