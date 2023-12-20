import React, { useEffect, useState } from 'react'

const Projects = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>haello!!</div>
  )
}

export default Projects