'use client';

import Button from '../components/Button';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold mb-8">Next.js MCP with Figma Code Connect</h1>
      
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold mb-4">Button Component Examples</h2>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <Button label="Primary Button" variant="primary" />
          <Button label="Secondary Button" variant="secondary" />
          <Button label="Outline Button" variant="outline" />
        </div>
        
        <div className="flex gap-4 flex-wrap justify-center mt-4">
          <Button label="Small" size="small" variant="primary" />
          <Button label="Medium" size="medium" variant="primary" />
          <Button label="Large" size="large" variant="primary" />
        </div>
        
        <div className="flex gap-4 flex-wrap justify-center mt-4">
          <Button 
            label="Click Me" 
            variant="primary" 
            onClick={handleClick} 
          />
          <Button label="Disabled" variant="primary" disabled />
        </div>
      </div>
    </main>
  );
}

