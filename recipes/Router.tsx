import React from 'react';
import { type ReactNode, type ComponentType, useEffect } from 'react';
import { useHashLocation } from './useHashLocation';

// 1. Define explicit types for our Route component props
interface RouteProps {
  path: string;
  component: ComponentType;
}

interface RouterProps {
  children: ReactNode;
}

export function Router({ children }: RouterProps) {
  const currentPath = useHashLocation();

   // 🔄 Automatically scroll to the top of the window on every path change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPath]); // This dependency array ensures it triggers every time the path changes

  // Find the active route while checking that the child is a valid React element
  const activeRoute = React.Children.toArray(children).find((child) => {
    // This type guard checks if the child is an object/element, skipping text strings
    if (React.isValidElement<RouteProps>(child)) {
      return child.props.path === currentPath;
    }
    return false;
  });

  return activeRoute || <div><h1>404</h1><p>Page Not Found</p></div>;
}

// 2. Add types to the individual Route component
export function Route({ component: Component }: RouteProps) {
  return <Component />;
}
