import { useEffect, useState } from "react";

function useIcons(iconNames) {
  const [icons, setIcons] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        setIsLoading(true);

        if (!iconNames || iconNames.length === 0) {
          setIcons({});
          setIsLoading(false);
          return;
        }

        const loadedIcons = {};

        for (const iconName of iconNames) {
          const { [iconName]: IconComponent } = await import("lucide-react");

          if (IconComponent) {
            loadedIcons[iconName] = IconComponent;
          }
        }

        setIcons(loadedIcons);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    loadIcons();
  }, [iconNames]);

  return { icons, isLoading, error };
}

export default useIcons;
