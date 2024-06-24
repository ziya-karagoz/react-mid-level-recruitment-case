import { useState, useEffect } from 'react';

// Bu kod çalıştırıldığında ekranda ne görünür? Neden?
// Bu kodda bir hata varsa hatayı nasıl düzeltebilirsiniz?

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      alert('Timer is cleared');

    }
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

export default Timer;
