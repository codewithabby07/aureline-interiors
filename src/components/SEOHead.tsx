import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description?: string;
  ogImage?: string;
}

export function SEOHead({ 
  title, 
  description = "Aureline Interiors is a boutique interior design studio specialising in residential and refined commercial spaces.", 
  ogImage = "/images/hero.jpg" 
}: SEOHeadProps) {
  useEffect(() => {
    document.title = `${title} | AURELINE INTERIORS`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | AURELINE INTERIORS`);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', ogImage);
    }
  }, [title, description, ogImage]);

  return null;
}
