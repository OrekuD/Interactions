import { useEffect, useCallback } from "react";

const useKeyPress = (targetKey: string, action: () => void) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        action();
      } else {
        throw new Error("Please check the key name");
      }
    },
    [targetKey, action],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyPress;
