import { createContext, useContext } from "react";

// Define constants here
export const CONSTANTS = {
  ROUTES: {
    HOME: '',
    HELLO: 'hello',
    FACIAL_EXPRESSIONS: 'facial-expressions',
    OBJECTS_DETECTION: 'objects-detection',
    TRAINING: 'training'
  },
  TITLES: {
    FACIAL_EXPRESSIONS: 'Facial Expressions',
    OBJECTS_DETECTION: 'Objects Detection',
    TRAINING: 'Training model (TensorFlow)'
  },
  MODELS: {
    FACE_EXPRESSION: 'face_expression_model',
    SSD_MOBILENET: 'ssd_mobilenetv1_model',
    YOLO11N: 'yolo11n_web_model',
    YOLO12N: 'yolo12n_web_model'
  },
  API_ENDPOINTS: {
    // Add API endpoints here when needed
  }
};

const ConstantsContext = createContext();

// Custom hook for consuming the context
export function useConstants() {
  return useContext(ConstantsContext);
}

// Provider component
export function ConstantsProvider({ children }) {
  return (
    <ConstantsContext.Provider value={CONSTANTS}>
      {children}
    </ConstantsContext.Provider>
  );
}
