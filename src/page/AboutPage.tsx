import { useEffect, useState } from 'react';
import { parseAboutText } from '../utils/textParser';

interface Section {
  title: string;
  content: string;
}

export default function AboutPage() {
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const response = await fetch('/src/data/about.txt');
        const text = await response.text();
        const parsedSections = parseAboutText(text);
        setSections(parsedSections);
      } catch (err) {
        setError('Failed to load about content');
        console.error('Error loading about content:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutContent();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">About Home Haulers</h1>
      
      <div className="space-y-12">
        {sections.map((section, index) => (
          <section key={index} className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{section.title}</h2>
            <div className="prose prose-indigo max-w-none">
              {section.content.split('\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 