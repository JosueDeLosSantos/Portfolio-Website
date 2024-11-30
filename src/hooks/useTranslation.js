import translate from "translate";
import { useEffect, useState } from "react";
translate.key = import.meta.env.VITE_GOOGLE_API_KEY;

export default function useTranslation(translateThis) {
  const [workLoad, setWorkLoad] = useState(translateThis);

  useEffect(() => {
    const translateToSpanish = async () => {
      try {
        let translation = await translate(translateThis, "es");
        setWorkLoad(translation);
      } catch {
        setWorkLoad(undefined);
      }
    };

    translateToSpanish();
  }, [translateThis]);

  return workLoad;
}
