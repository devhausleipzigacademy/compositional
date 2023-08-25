"use client";

import React from "react";

type TabProps = {
  children: React.ReactNode[];
  defaultValue: string;
  className?: string;
};

type TabsListProps = {
  children: React.ReactNode[];
  className?: string;
};

type TabsTriggerProps = {
  children: React.ReactNode[] | React.ReactNode;
  value: string;
};

type TabsContentProps = {
  children: React.ReactNode[] | React.ReactNode;
  value: string;
  className?: string;
};

const TabsContext = React.createContext({
  value: "",
  setValue: (value: string) => {},
});

export default function Tabs({ children, defaultValue, className }: TabProps) {
  const [value, setValue] = React.useState(defaultValue);
  const contextValue = React.useMemo(
    () => ({ value, setValue }),
    [value, setValue]
  );
  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className}>{children.map((child) => child)}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: TabsListProps) {
  return <ul className={className}>{children.map((child) => child)}</ul>;
}

export function TabsTrigger({ children, value }: TabsTriggerProps) {
  const { setValue } = React.useContext(TabsContext);
  return (
    <li
      onClick={() => {
        setValue(value);
      }}
    >
      {children}
    </li>
  );
}

export function TabsContent({ children, value, className }: TabsContentProps) {
  const { value: contextValue } = React.useContext(TabsContext);
  return <div className={className}>{contextValue === value && children}</div>;
}
